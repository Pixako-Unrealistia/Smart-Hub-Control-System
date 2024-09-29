from sqlalchemy import Column, Integer, String, Boolean, DateTime
from app.db.db import Base

class Meter(Base):
    __tablename__ = 'meters'

    id = Column(Integer, primary_key=True, index=True)
    hub_id = Column(String, index=True)
    meter_id = Column(String, unique=True, index=True)
    name = Column(String)
    location = Column(String)
    state = Column(Boolean)  # Online/offline state
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
