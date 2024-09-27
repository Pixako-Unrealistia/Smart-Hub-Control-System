import { NextRequest, NextResponse } from 'next/server';
import { addMeter, getMeters, updateMeter } from '../../../controllers/meterController';

// Add a new meter to a smart meter hub
export async function POST(req: NextRequest) {
  return await addMeter(req);
}

// Get meters for a specific hub
export async function GET(req: NextRequest) {
  return await getMeters(req);
}

// Update the meter state (on/off)
export async function PUT(req: NextRequest) {
  return await updateMeter(req);
}
