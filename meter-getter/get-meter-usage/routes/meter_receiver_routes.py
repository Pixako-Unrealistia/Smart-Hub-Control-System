from fastapi import APIRouter
from handlers.meter_receiver_handler import  read_meter_index

router = APIRouter()

@router.get("/meter/{meter_id}/read/{index}")
async def read_meter_index_route(meter_id: str, index: int):
    return read_meter_index(meter_id, index)
