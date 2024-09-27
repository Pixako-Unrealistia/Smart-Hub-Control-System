from fastapi import APIRouter, Body
from handlers.meter_setter_handler import set_meter_data, set_meter_config

router = APIRouter()

@router.put("/meter/{meter_id}/state")
async def update_meter_state(meter_id: str, state: bool):
    return set_meter_data(meter_id, state)

@router.put("/meter/{meter_id}/config")
async def update_meter_config(meter_id: str, config: dict = Body(...)):
    return set_meter_config(meter_id, config)
