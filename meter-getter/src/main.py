from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.meter_receiver_routes import router as meter_receiver_router

app = FastAPI()

# Set up CORS to allow requests from http://localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allows the frontend to access the API
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Include the meter receiver routes
app.include_router(meter_receiver_router)

@app.get("/")
async def root():
    return {"message": "Meter Receiver Service is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
