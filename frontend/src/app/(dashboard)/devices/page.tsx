import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import StatusCard from '../../../components/StatusCard';
import UsageCard from '../../../components/UsageCard';
import SmartHubCard from '../../../components/SmartHubCard';
import { EllipsisVertical } from 'lucide-react';
import AddHub from '../../../components/AddHub';

const page = async () => {
    const session = await getServerSession(authOptions);
    // console.log(session);
    if(session?.user) {
        return (
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
            <div className='flex justify-between items-center col-span-2 lg:col-span-4'>
                <h1 className='text-2xl'>All devices</h1>
                <AddHub />
                {/* <Popup /> */}
            </div>
            <SmartHubCard id='2313A' location='Bangkok' powerUsage={100} isOnline = {true} />
            <SmartHubCard id='2313A' location='Nakhorn Pathom' powerUsage={200} isOnline = {true} />
            <SmartHubCard id='2313A' location='Chiang Mai' powerUsage={300} isOnline = {true} />
            <SmartHubCard id='2313A' location='Koh Chang' powerUsage={400} isOnline = {false} />
            <SmartHubCard id='2313A' location='Koh Tao' powerUsage={400} isOnline = {false} />
          </div>
        )
    }

  return (
    <h2>
        Please login to see this home page
    </h2>
  )
}

export default page