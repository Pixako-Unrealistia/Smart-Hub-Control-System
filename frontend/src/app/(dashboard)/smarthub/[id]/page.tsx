import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import StatusCard from '../../../../components/StatusCard';
import UsageCard from '../../../../components/UsageCard';
import SmartHubCard from '../../../../components/SmartHubCard';
import MeterCard from '../../../../components/MeterCard';

const page = async ( { params }: { params : {id: string} }) => {
    const session = await getServerSession(authOptions);
    // console.log(session);
    if(session?.user) {
        return (
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
            <h2 className='text-2xl col-span-2 lg:col-span-4 text-start'>
                Smart Meter Hub {params.id}
            </h2>
            <MeterCard id='2313A' location='house 1' powerUsage={100} isOnline = {true} />
            <MeterCard id='2313A' location='house 2' powerUsage={200} isOnline = {true} />
            <MeterCard id='2313A' location='house 4' powerUsage={400} isOnline = {false} />
            <MeterCard id='2313A' location='house 5' powerUsage={400} isOnline = {false} />
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