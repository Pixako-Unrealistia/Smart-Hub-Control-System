from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from app.db.db import Base

class Meter(Base):
    __tablename__ = 'meters'
    id = Column(Integer, primary_key=True, index=True)
    hub_id = Column(Integer, ForeignKey("smart_meter_hubs.id"))
    meter_id = Column(String, unique=True, index=True)
    name = Column(String)
    location = Column(String)
    state = Column(Boolean, default=True)  # Online/offline state

class SmartMeterHub(Base):
    __tablename__ = 'smart_meter_hubs'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    hub_name = Column(String)
    location = Column(String)
    is_online = Column(Boolean, default=True)
