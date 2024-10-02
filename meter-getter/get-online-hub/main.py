from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.online_hubs import router as hub_router
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Set the frontend URL
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],  # Allow only the specified frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Include routers
app.include_router(hub_router)

if __name__ == "__main__":
    import uvicorn
    # Use port from environment variable, default to 8005
    port = int(os.getenv("PORT", 8005))
    # Run the app with Uvicorn
    uvicorn.run(app, host="0.0.0.0", port=port)
