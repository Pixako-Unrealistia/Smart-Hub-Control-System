from fastapi import FastAPI
from routes.meter_receiver_routes import router as meter_receiver_router

app = FastAPI()

# Include the meter receiver routes
app.include_router(meter_receiver_router)

@app.get("/")
async def root():
    return {"message": "Meter Receiver Service is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
