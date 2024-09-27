import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import StatusCard from '../../../components/StatusCard';
import UsageCard from '../../../components/UsageCard';
import SmartHubCard from '../../../components/SmartHubCard';
import { EllipsisVertical } from 'lucide-react';
import AddHub from '../../../components/AddHub';

const fetchHubs = async () => {
  const response = await fetch(`${process.env.NEXT_USR_URL}/api/hub`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Include credentials to pass the session token
  });

  if (!response.ok) {
    throw new Error('Failed to fetch smart meter hubs');
  }

  const data = await response.json();
  return data.hubs;
}

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <h2>
        Please login to see this home page
      </h2>
    );
  }

  let hubs;
  try {
    hubs = await fetchHubs();
  } catch (error) {
    return (
      <div>
        <h2>Error fetching smart meter hubs. Please try again later.</h2>
      </div>
    );
  }

  if (hubs.length === 0) {
    return (
      <div className="p-10">
        <h2>No smart meter hubs found. Please add one.</h2>
        <AddHub />
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
      <div className='flex justify-between items-center col-span-2 lg:col-span-4'>
        <h1 className='text-2xl'>All devices</h1>
        <AddHub />
      </div>
      {hubs.map((hub: any) => (
        <SmartHubCard
          key={hub.id}
          name={hub.hub_name}
          id={hub.id}
          location={hub.location || "Location Info"}  // You can adjust this as needed
          powerUsage={hub.powerUsage || 0}  // Ensure default value if powerUsage is not available
          isOnline={hub.isOnline || false}
        />
      ))}
    </div>
  );
}

export default Page;
