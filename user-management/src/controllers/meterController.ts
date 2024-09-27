import { NextResponse } from 'next/server';
import * as z from 'zod';
import { getServerSession } from 'next-auth';
import { addMeterToHub, getMetersByHub, updateMeterState } from '../services/meterService';
import { authOptions } from '../lib/auth';

// Zod schema for validating the meter data
const meterSchema = z.object({
  meter_id: z.string().min(1, 'Meter ID is required').max(255),
  display_name: z.string().min(1, 'Display name is required').max(255),
});

// Add a new meter to a hub
export async function addMeter(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { meter_id, display_name, hub_id } = meterSchema.extend({ hub_id: z.number() }).parse(body);

    const newMeter = await addMeterToHub(hub_id, meter_id, display_name);
    return NextResponse.json({ meter: newMeter, message: 'Meter added successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error adding meter:', error);
    return NextResponse.json({ message: 'Failed to add meter' }, { status: 500 });
  }
}

// Get all meters for a specific hub
export async function getMeters(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const hubId = parseInt(new URL(req.url).searchParams.get('hub_id') || '', 10);
    const meters = await getMetersByHub(hubId);
    return NextResponse.json({ meters }, { status: 200 });
  } catch (error) {
    console.error('Error fetching meters:', error);
    return NextResponse.json({ message: 'Failed to fetch meters' }, { status: 500 });
  }
}

// Update meter state (on/off)
export async function updateMeter(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { meter_id, state } = z.object({ meter_id: z.string(), state: z.boolean() }).parse(body);

    const updatedMeter = await updateMeterState(meter_id, state);
    return NextResponse.json({ meter: updatedMeter, message: 'Meter state updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating meter:', error);
    return NextResponse.json({ message: 'Failed to update meter state' }, { status: 500 });
  }
}
