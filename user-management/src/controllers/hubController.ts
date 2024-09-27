import { NextResponse, NextRequest } from 'next/server';
import * as z from 'zod';
import { getServerSession } from 'next-auth';
import { addSmartMeterHub, getSmartMeterHubs, updateHubMeters } from '../services/hubService';
import { authOptions } from '../lib/auth';

// Zod schema for validating the request body
const hubSchema = z.object({
  hub_name: z.string().min(1, 'Hub name is required').max(255, 'Hub name is too long'),
});

const meterUpdateSchema = z.object({
  hub_id: z.number(), // Ensure hub_id is a number
  meters: z.array(z.string().nonempty('Meter ID is required')),
});

// Function to handle adding a new hub without authorization
// export async function addHub1(req: Request) {
//     try {
//       const body = await req.json();
//       const { hub_name } = hubSchema.parse(body);
  
//       // Assuming you have a way to get a userId for now (hardcoding for testing)
//       const userId = 1; // You can replace this with a hardcoded user ID for testing
  
//       const newHub = await addSmartMeterHub(userId, hub_name);
//       return NextResponse.json({ hub: newHub, message: 'Smart meter hub added successfully' }, { status: 201 });
//     } catch (error) {
//       console.error('Error adding hub:', error);
//       return NextResponse.json({ message: 'Failed to add smart meter hub' }, { status: 500 });
//     }
//   }

// Function to handle adding a new hub for the authenticated user
export async function addHub(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    console.log('Unauthorized');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { hub_name } = hubSchema.parse(body);
    const userId = Number(session.user.id); // Convert userId to a number

    const newHub = await addSmartMeterHub(userId, hub_name);
    return NextResponse.json({ hub: newHub, message: 'Smart meter hub added successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error adding hub:', error);
    return NextResponse.json({ message: 'Failed to add smart meter hub' }, { status: 500 });
  }
}

// Function to handle fetching all hubs for the authenticated user
export async function getHubs(req: NextRequest) {
    const session = await getServerSession(authOptions);
    console.log('Session Data:', session);  // Debugging session data
  
    if (!session?.user) {
      console.log('Unauthorized - No user in session');
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  
    try {
      const userId = Number(session.user.id);
      const hubs = await getSmartMeterHubs(userId);
      return NextResponse.json({ hubs }, { status: 200 });
    } catch (error) {
      console.error('Error fetching hubs:', error);
      return NextResponse.json({ message: 'Failed to fetch smart meter hubs' }, { status: 500 });
    }
  }
  
// Function to handle fetching all hubs for the authenticated user
// Mock database interaction for illustration
// const hubs = [
//     { id: 1, hub_name: 'Hub 1', location: 'Bangkok', powerUsage: 150, isOnline: true },
//     { id: 2, hub_name: 'Hub 2', location: 'Nakhorn Pathom', powerUsage: 200, isOnline: false },
//   ];
  
//   // Get hubs for the authenticated user
//   export async function getHubs(req: NextRequest) {
//     // In a real implementation, you'd query the database and authenticate the user
//     try {
//       // Mock response for demonstration
//       return NextResponse.json({ hubs });
//     } catch (error) {
//       return NextResponse.error();
//     }
// }
    
  

// Function to handle updating meters for a hub (Add or Remove meters)
export async function updateHub(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { hub_id, meters } = meterUpdateSchema.parse(body);
    const userId = Number(session.user.id); // Convert userId to a number

    const updatedHub = await updateHubMeters(userId, hub_id, meters); // Update meters in the hub
    return NextResponse.json({ hub: updatedHub, message: 'Hub updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating hub:', error);
    return NextResponse.json({ message: 'Failed to update hub' }, { status: 500 });
  }
}
