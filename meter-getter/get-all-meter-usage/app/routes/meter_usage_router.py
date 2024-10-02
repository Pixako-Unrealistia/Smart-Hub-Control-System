from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.db import get_db
from app.models.meter import Meter
from app.models.smart_meter_hub import SmartMeterHub
from app.handlers.meter_receiver_handler import read_meter_csv_index

router = APIRouter()

@router.get("/get-all-meter-usage/{userId}/{index}")
def get_all_meter_usage(userId: int, index: int, db: Session = Depends(get_db)):
    try:
        # Step 1: Query all online meters belonging to the user's hubs by joining the smart_meter_hubs table
        online_meters = (
            db.query(Meter.meter_id)
            .join(SmartMeterHub, Meter.hub_id == SmartMeterHub.id)  # Join meters with smart_meter_hubs on hub_id
            .filter(Meter.state == True, SmartMeterHub.user_id == userId)  # Filter based on user_id in smart_meter_hubs
            .all()
        )

        # Debugging: Print the result of the query
        print(f"Online meters fetched for user {userId}: {online_meters}")

        total_usage = 0

        # Step 2: Loop through each online meter and calculate total usage from CSV
        for meter in online_meters:
            meter_id = meter[0]  # Extract meter_id from tuple
            
            # Debugging: Print the meter_id being processed
            print(f"Processing meter_id: {meter_id}")

            # Fetch the usage data from the CSV file
            usage_data = read_meter_csv_index(meter_id, index)

            # Debugging: Print the data retrieved from the CSV file
            print(f"Data fetched from CSV for meter {meter_id}: {usage_data}")

            if usage_data:
                total_usage += usage_data.get("energy(kWh/hh)", 0)  # Adjust based on your CSV column

        # Debugging: Print the total usage calculated
        print(f"Total usage for all online meters for user {userId}: {total_usage}")

        return {"total_usage": total_usage}

    except Exception as e:
        print(f"Error calculating total usage: {e}")
        return {"error": "Failed to calculate total usage"}
