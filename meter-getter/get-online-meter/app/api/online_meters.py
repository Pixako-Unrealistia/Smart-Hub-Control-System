from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.services.meter_service import get_online_meter_count

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/api/online-meters")
async def online_meters(db: Session = Depends(get_db)):
    count = get_online_meter_count(db)
    return {"online_meters": count}
