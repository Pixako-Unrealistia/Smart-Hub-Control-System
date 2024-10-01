from sqlalchemy.orm import Session
from app.models.meter import Meter
from app.models.hub import SmartMeterHub

def get_online_meter_count(db: Session, user_id: int):
    # Return the count of online meters for the given user
    return db.query(Meter).join(SmartMeterHub, Meter.hub_id == SmartMeterHub.id) \
            .filter(SmartMeterHub.user_id == user_id, Meter.state == True).count()
