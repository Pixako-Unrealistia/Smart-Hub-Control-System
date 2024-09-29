from sqlalchemy.orm import Session
from app.models.meter import Meter

def get_online_meter_count(db: Session):
    return db.query(Meter).filter(Meter.state == True).count()
