from fastapi import HTTPException
from utils.file_utils import read_file, write_file
import os
import json

# Handler for setting meter data (turn on, turn off, or set configuration)
def set_meter_data(meter_id: str, state: bool):
    data = read_file()  # Read data from a JSON file
    for meter_data in data:
        if meter_data['meter_id'] == meter_id:
            meter_data['state'] = state  # Update the meter's state
            file_path = os.path.join(os.path.dirname(__file__), '..', '..', '..','config', 'default.json')
            with open(file_path, 'w') as file:
                json.dump(data, file, indent=4)
            return {"message": f"Meter {meter_id} state updated to {state}"}
    raise HTTPException(status_code=404, detail="Meter not found")

def set_meter_config(meter_id: str, config: dict):
    data = read_file()  # Read data from a JSON file
    for meter_data in data:
        if meter_data['meter_id'] == meter_id:
            meter_data['config'] = config  # Update meter configuration
            file_path = os.path.join(os.path.dirname(__file__), '..', '..','..', 'config', 'default.json')
            with open(file_path, 'w') as file:
                json.dump(data, file, indent=4)
            return {"message": f"Meter {meter_id} configuration updated"}
    raise HTTPException(status_code=404, detail="Meter not found")

