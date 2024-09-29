from sqlalchemy import Column, Integer, String, Boolean
from app.db.database import Base

class Meter(Base):
    __tablename__ = 'meters'

    id = Column(Integer, primary_key=True, index=True)
    hub_id = Column(Integer)
    meter_id = Column(String)
    name = Column(String)
    location = Column(String)
    state = Column(Boolean, default=False) 
    created_at = Column(String)
    updated_at = Column(String)
