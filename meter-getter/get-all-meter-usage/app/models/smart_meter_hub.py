from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from app.db.db import Base

# SmartMeterHub Model
class SmartMeterHub(Base):
    __tablename__ = 'smart_meter_hubs'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)  # Link to users table
    hub_name = Column(String, nullable=False)
    location = Column(String)
    is_online = Column(Boolean, default=False)
    created_at = Column(DateTime, default='now()')
    updated_at = Column(DateTime, default='now()')
