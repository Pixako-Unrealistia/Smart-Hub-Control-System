from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.db import get_db
from app.models.meter import Meter
from app.handlers.meter_receiver_handler import read_meter_csv_index

router = APIRouter()

@router.get("/get-all-meter-usage/{index}")
def get_all_meter_usage(index: int, db: Session = Depends(get_db)):
    try:
        # Query the database to get all online meters
        online_meters = db.query(Meter.meter_id).filter(Meter.state == True).all()

        # Debugging: Print the result of the query
        print(f"Online meters fetched from database: {online_meters}")

        total_usage = 0

        # Loop through each online meter and calculate total usage from CSV
        for meter in online_meters:
            meter_id = meter[0]  # since it's a tuple (meter_id,)
            
            # Debugging: Print the meter_id being processed
            print(f"Processing meter_id: {meter_id}")

            # Fetch the usage data from the CSV file
            usage_data = read_meter_csv_index(meter_id, index)

            # Debugging: Print the data retrieved from the CSV file
            print(f"Data fetched from CSV for meter {meter_id}: {usage_data}")

            if usage_data:
                total_usage += usage_data["energy(kWh/hh)"]  # Adjust based on your CSV column

        # Debugging: Print the total usage calculated
        print(f"Total usage for all online meters: {total_usage}")

        return {"total_usage": total_usage}

    except Exception as e:
        print(f"Error calculating total usage: {e}")
        return {"error": "Failed to calculate total usage"}
