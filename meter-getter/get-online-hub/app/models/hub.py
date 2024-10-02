from sqlalchemy import Column, Integer, String, Boolean
from app.db.database import Base

class Hub(Base):
    __tablename__ = 'smart_meter_hubs'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    hub_name = Column(String)
    location = Column(String)
    is_online = Column(Boolean, default=False)  # Represents whether the hub is online
    created_at = Column(String)
    updated_at = Column(String)
