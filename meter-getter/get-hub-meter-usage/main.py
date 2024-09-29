from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.hub_usage import router as hub_usage_router
import uvicorn
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = FastAPI()

# Get the frontend URL from the environment
frontend_url = os.getenv("FRONTEND_URL", "http://localhost:3000")

# Add CORS middleware with the frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_url],  # Read frontend URL from environment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the hub usage router
app.include_router(hub_usage_router)

@app.get("/")
def read_root():
    return {"message": "Smart Meter Hub Usage Service is running!"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8003)
