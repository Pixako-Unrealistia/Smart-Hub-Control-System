from sqlalchemy import text
from sqlalchemy.orm import Session
from app.utils.file_utils import read_meter_csv_index

async def fetch_meters_for_hub(db: Session, hub_id: int):
    query = text("SELECT meter_id, state FROM meters WHERE hub_id = :hub_id")
    return db.execute(query, {"hub_id": hub_id}).fetchall()

async def calculate_hub_usage(db: Session, hub_id: int, index: int) -> dict:
    meters_in_hub = await fetch_meters_for_hub(db, hub_id)
    total_power_usage = 0.0
    offline_meters = []
    online_meters = []
    
    for meter in meters_in_hub:
        meter_id = meter[0]  # Access meter_id (first element of the tuple)
        state = meter[1]  # Access state (second element of the tuple)
        
        # Log the meter ID and its state
        print(f"Processing meter: {meter_id}, state: {state}")
        
        if state:  # If the meter is online
            print(f"Meter {meter_id} is online. Fetching usage...")
            meter_data = read_meter_csv_index(meter_id, index)
            if meter_data and "energy(kWh/hh)" in meter_data:
                total_power_usage += float(meter_data["energy(kWh/hh)"].strip())
                online_meters.append(meter_id)
            else:
                print(f"Meter {meter_id} has no usage data for index {index}.")
        else:
            print(f"Meter {meter_id} is offline.")
            offline_meters.append(meter_id)
    
    print(f"Total power usage for hub {hub_id}: {total_power_usage}")
    
    return {
        "total_power_usage": total_power_usage,
        "online_meters": online_meters,
        "offline_meters": offline_meters
    }
