import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import StatusCard from '../../../components/StatusCard';
import UsageCard from '../../../components/UsageCard';

const page = async () => {
    const session = await getServerSession(authOptions);
    // console.log(session);
    if(session?.user) {
        return (
          <div className='grid grid-cols-2 gap-5 p-10'>
            <h2 className='text-2xl col-span-2 text-start'>
                Hello {session?.user.username}
            </h2>
            <StatusCard value={3} type='smarthub'/>
            <StatusCard value={2} type='meter' />
            <div className='col-span-2'>
              <UsageCard usage={1200} unit="W" />
            </div>

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