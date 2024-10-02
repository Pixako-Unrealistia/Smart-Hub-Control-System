from sqlalchemy.orm import Session
from app.models.hub import Hub

def get_online_hub_count(db: Session):
    return db.query(Hub).filter(Hub.is_online == True).count()
