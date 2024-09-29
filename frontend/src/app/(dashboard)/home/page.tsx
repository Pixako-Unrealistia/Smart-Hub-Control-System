'use client';

import React, { useEffect, useState } from 'react';
import StatusCard from '../../../components/StatusCard';
import UsageCard from '../../../components/UsageCard';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  username: string;
  email: string;
}

const Page = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data directly without manually handling the token
        console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
          method: 'GET',
          credentials: 'include',  // Ensure cookies are sent with the request
        });
  
        console.log('API response:', response);  // Log API response for debugging
  
        if (response.ok) {
          const userData = await response.json();
          console.log('Fetched user data:', userData);  // Log the fetched user data
          setUser(userData);  // Set user data
        } else {
          console.log('Invalid token or response issue, redirecting to sign-in');
          router.push('/sign-in');  // Token invalid or expired, redirect to login
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/sign-in');  // Redirect to sign-in in case of an error
      }
    };
  
    fetchUserData();
  }, [router]);
  

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='grid grid-cols-2 gap-5 p-10'>
      <h2 className='text-2xl col-span-2 text-start'>
        Hello {user.username}
      </h2>
      <StatusCard value={3} type='smarthub' />
      <StatusCard value={2} type='meter' />
      <div className='col-span-2'>
        <UsageCard usage={1200} unit="W" />
      </div>
    </div>
  );
};

export default Page;
