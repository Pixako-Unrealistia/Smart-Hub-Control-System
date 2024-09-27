// src/app/api/hub/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { addHub, getHubs, updateHub } from '../../../controllers/hubController';

export async function POST(req: NextRequest) {
  return await addHub(req);
}

export async function GET(req: NextRequest) {
  return await getHubs(req);
}

export async function PUT(req: NextRequest) {
  return await updateHub(req);
}
