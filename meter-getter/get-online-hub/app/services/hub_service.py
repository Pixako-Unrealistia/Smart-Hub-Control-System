from sqlalchemy.orm import Session
from app.models.hub import Hub

def get_online_hub_count(db: Session, user_id: int):
    # Return the count of online hubs for the given user
    return db.query(Hub).filter(Hub.user_id == user_id, Hub.is_online == True).count()
