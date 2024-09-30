from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.services.hub_service import get_online_hub_count

router = APIRouter()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/api/online-hubs")
async def online_hubs(db: Session = Depends(get_db)):
    count = get_online_hub_count(db)
    return {"online_hubs": count}
