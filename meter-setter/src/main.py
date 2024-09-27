from fastapi import FastAPI
from routes.meter_setter_routes import router as meter_setter_router

app = FastAPI()

# Include the meter setter routes
app.include_router(meter_setter_router)

@app.get("/")
async def root():
    return {"message": "Meter Setter Service is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
