from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.hub_service import calculate_hub_usage
from app.db.db import get_db

router = APIRouter()

@router.get("/api/hub-usage/{hub_id}/{index}")
async def get_hub_usage(hub_id: int, index: int, db: Session = Depends(get_db)):
    try:
        result = await calculate_hub_usage(db, hub_id, index)
        return {
            "hub_id": hub_id,
            "total_power_usage": result["total_power_usage"],
            "online_meters": result["online_meters"],
            "offline_meters": result["offline_meters"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
