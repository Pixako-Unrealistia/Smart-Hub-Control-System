import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.meter_usage_router import router as meter_usage_router
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the meter usage router
app.include_router(meter_usage_router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Meter Usage Service is running"}

if __name__ == "__main__":
    import uvicorn

    port = int(os.getenv("PORT", 8006))
    
    uvicorn.run(app, host="0.0.0.0", port=port)