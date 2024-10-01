'use client';

import React, { useEffect, useState } from 'react';
import StatusCard from '../../../components/StatusCard';
import UsageCard from '../../../components/UsageCard';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface User {
  id: number;
  username: string;
  email: string;
}

const Page = () => {
  const [user, setUser] = useState<User | null>(null);
  const [onlineHubs, setOnlineHubs] = useState(0); // State to store online smart hubs count
  const [onlineMeters, setOnlineMeters] = useState(0); // State to store online meters count
  const [totalUsage, setTotalUsage] = useState(0); // State to store the total meter usage
  const [second, setSecond] = useState(0); // State to track the current second
  const router = useRouter();
  const pathname = usePathname(); // To detect current route

  // Fetch user data and online status of hubs/meters
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
          method: 'GET',
          credentials: 'include', // Ensure cookies are sent with the request
        });

        if (response.ok) {
          const userData = await response.json();
          console.log('User data fetched:', userData); // Debugging log for user data
          setUser(userData); // Set user data

          // Fetch online hubs and meters count for the user after user is set
          if (userData?.id) {
            fetchOnlineStatus(userData.id); // Pass userId explicitly
          }
        } else {
          console.log('Invalid token or response issue, redirecting to sign-in');
          router.push('/sign-in'); // Token invalid or expired, redirect to login
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/sign-in'); // Redirect to sign-in in case of an error
      }
    };

    // Fetch online hubs and meters
    const fetchOnlineStatus = async (userId: number) => {
      try {
        console.log('Fetching online hubs for userId:', userId); // Debugging log

        // Fetch online hubs for the user
        const hubsResponse = await fetch(`${process.env.NEXT_PUBLIC_HUB_ONLINE_SERVICE_URL}/api/online-hubs/${userId}`, {
          method: 'GET',
        });

        if (hubsResponse.ok) {
          const hubsData = await hubsResponse.json();
          console.log('Hubs data fetched:', hubsData); // Debugging log for hubs data
          setOnlineHubs(hubsData.online_hubs_count); // Assuming you return the count as 'online_hubs_count'
        } else {
          console.error('Failed to fetch online hubs');
        }

        // Fetch online meters for the user
        const metersResponse = await fetch(`${process.env.NEXT_PUBLIC_METER_ONLINE_SERVICE_URL}/api/online-meters/${userId}`, {
          method: 'GET',
        });

        if (metersResponse.ok) {
          const metersData = await metersResponse.json();
          console.log('Meters data fetched:', metersData); // Debugging log for meters data
          setOnlineMeters(metersData.online_meters_count); // Assuming you return the count as 'online_meters_count'
        } else {
          console.error('Failed to fetch online meters');
        }
      } catch (error) {
        console.error('Error fetching online hubs or meters:', error);
      }
    };

    fetchUserData(); // Fetch user data on mount
  }, [router]); // Only run once when the component mounts

  // Update `second` every second and fetch total meter usage only when on the home page
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const startUsageInterval = () => {
      intervalId = setInterval(async () => {
        try {
          // Update the second value (cycles between 0 and 59)
          setSecond((prevSecond) => (prevSecond >= 59 ? 0 : prevSecond + 1));

          if (!user?.id) return; // Ensure user ID is available

          // Use the updated `second` value in the fetch URL
          const usageResponse = await fetch(`${process.env.NEXT_PUBLIC_GET_ALL_METER_USAGE_SERVICE_URL}/api/get-all-meter-usage/${user.id}/${second}`, {
            method: 'GET',
          });

          if (usageResponse.ok) {
            const usageData = await usageResponse.json();
            console.log('Meter usage data:', usageData); // Debugging log for usage data
            setTotalUsage(usageData.total_usage); // Update the total usage
          } else {
            console.error('Failed to fetch meter usage');
          }
        } catch (error) {
          console.error('Error fetching meter usage:', error);
        }
      }, 2000);
    };

    // Start the interval only if the user is on the home page
    if (pathname === '/home') {
      startUsageInterval();
    }

    // Cleanup interval on page leave or component unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [second, pathname, user?.id]); // Rerun when second, pathname, or user ID changes

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='grid grid-cols-2 gap-5 p-10'>
      <h2 className='text-2xl col-span-2 text-start'>
        Hello {user.username}
      </h2>
      <StatusCard value={onlineHubs} type='smarthub' />
      <StatusCard value={onlineMeters} type='meter' />
      <div className='col-span-2'>
        <UsageCard usage={totalUsage} unit="kWh/hh" />
      </div>
    </div>
  );
};

export default Page;
