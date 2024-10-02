from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.meter import Meter
from app.models.hub import SmartMeterHub
from app.db.database import get_db

router = APIRouter()

@router.get("/api/online-meters/{user_id}")
def get_online_meters(user_id: int, db: Session = Depends(get_db)):
    meters = db.query(Meter).join(SmartMeterHub, Meter.hub_id == SmartMeterHub.id)\
               .filter(SmartMeterHub.user_id == user_id, Meter.state == True).all()
    if not meters:
        raise HTTPException(status_code=404, detail="No online meters found for the user")
    return {"online_meters_count": len(meters)}
