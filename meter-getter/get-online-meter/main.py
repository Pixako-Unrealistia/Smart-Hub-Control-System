from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.online_meters import router as meter_router
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],  # Allow only the specified frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

app.include_router(meter_router)

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8004))  # Use port from environment variable, default to 8004
    uvicorn.run(app, host="0.0.0.0", port=port)
