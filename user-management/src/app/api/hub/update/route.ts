import { NextResponse } from 'next/server';
import * as z from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // Your NextAuth config options
import { updateSmartMeterHub } from '../../../controllers/hubController';

// Schema for input validation
const hubUpdateSchema = z.object({
  hubId: z.number().nonnegative(),
  hubName: z.string().optional(),
});

// PUT route to update a smart meter hub
export async function PUT(req: Request) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    const body = await req.json();
    const { hubId, hubName } = hubUpdateSchema.parse(body);

    // Call controller function to update hub
    const updatedHub = await updateSmartMeterHub(hubId, hubName);

    return NextResponse.json({ hub: updatedHub, message: 'Smart meter hub updated successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating smart meter hub' }, { status: 500 });
  }
}
