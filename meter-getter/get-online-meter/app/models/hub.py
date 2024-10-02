from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from app.db.database import Base
from datetime import datetime

class SmartMeterHub(Base):
    __tablename__ = 'smart_meter_hubs'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)  # Foreign key to users
    hub_name = Column(String, nullable=False)
    location = Column(String)
    is_online = Column(Boolean, default=False)  # Represents whether the hub is online
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)
