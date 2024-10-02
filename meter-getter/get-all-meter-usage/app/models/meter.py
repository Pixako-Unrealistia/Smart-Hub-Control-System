from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from app.db.db import Base

# Meter Model
class Meter(Base):
    __tablename__ = 'meters'

    id = Column(Integer, primary_key=True, index=True)
    hub_id = Column(Integer, ForeignKey("smart_meter_hubs.id"), nullable=False)  # Link to SmartMeterHub
    meter_id = Column(String, unique=True, index=True)
    name = Column(String)
    location = Column(String)
    state = Column(Boolean, default=True)  # Online/offline state
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
