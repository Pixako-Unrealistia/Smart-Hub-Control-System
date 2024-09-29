from fastapi import HTTPException
from utils.file_utils import  read_meter_csv_index

def read_meter_index(meter_id: str, index: int):
    return read_meter_csv_index(meter_id, index)

