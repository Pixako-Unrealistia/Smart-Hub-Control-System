from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.hub import SmartMeterHub
from app.db.database import get_db

router = APIRouter()

@router.get("/api/online-hubs/{user_id}")
def get_online_hubs(user_id: int, db: Session = Depends(get_db)):
    hubs = db.query(SmartMeterHub).filter(SmartMeterHub.user_id == user_id, SmartMeterHub.is_online == True).all()
    if not hubs:
        raise HTTPException(status_code=404, detail="No online hubs found for the user")
    return {"online_hubs_count": len(hubs)}
