'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';  // Import useParams to get the dynamic id

import MeterCard from '../../../../components/MeterCard';
import DropdownMenu from '../../../../components/DropdownMenu';

const Page = () => {
  const router = useRouter(); 
  const [user, setUser] = useState(null);  // State for user info
  interface Meter {
    id: string;
    name: string;
    location: string;
    powerUsage?: number;
    state: boolean;
  }

  const [meters, setMeters] = useState<Meter[]>([]);  // State to hold meters
  const [loading, setLoading] = useState(true);  // Loading state
  const { id } = useParams();  // Get the dynamic hub id from URL
  const hubId = Array.isArray(id) ? id[0] : id;  // Ensure hubId is always a string

  // Fetch meters for the specified hub
  const fetchMetersForHub = async (hubId: string) => {
    try {
      // Fetch user data first
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('Fetched user data:', userData);
        setUser(userData);
        
        // Fetch meters for the hub with the id from the URL
        const metersResponse = await fetch(`${process.env.NEXT_PUBLIC_GET_METER_SERVICE_URL}/api/meters/hub/${hubId}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (metersResponse.ok) {
          const metersData = await metersResponse.json();
          console.log('Fetched meters:', metersData);
          setMeters(metersData);  // Set fetched meters to state
          setLoading(false);  // Set loading to false after data is fetched
        } else {
          console.error('Failed to fetch meters');
          setLoading(false);
        }
      } else {
        console.log('Invalid token or response issue, redirecting to sign-in');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching meters or user data:', error);
      setLoading(false);
    }
  };

  // Fetch the user data and meters when the component mounts
  useEffect(() => {
    if (hubId) {
      console.log('Hub ID:', hubId);  // Log the hub ID to make sure it's being extracted
      fetchMetersForHub(hubId);  // Fetch meters for the hub with the dynamic id
    } else {
      console.log('No hub ID found in the URL.');
      setLoading(false);
    }
  }, [hubId]);

  if (loading) {
    return <h2>Loading...</h2>;  // Show loading state while fetching
  }

  if (!user) {
    return <h2>Loading user data...</h2>;  // Loading state for user data
  }

  // Refresh the meters when a new meter is added
  const handleMeterAdded = () => {
    fetchMetersForHub(hubId);  // Re-fetch the meters for this hub
  };

  // Handle the hub deletion
  const handleHubDeleted = () => {
    // window.location.href = '/devices'; 
    router.push('/devices');  // Redirect to the devices page after deleting the hub
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-10">
      <div className="flex justify-between items-center col-span-2 lg:col-span-4">
        <h1 className="text-2xl">Meters in Hub {hubId}</h1>
        <DropdownMenu hubId={hubId} onMeterAdded={handleMeterAdded} onHubDeleted={handleHubDeleted} />
      </div>

      {/* Render fetched meters */}
      {meters.length === 0 ? (
        <h2>No meters available in this hub.</h2>
      ) : (
        meters.map((meter) => (
          <MeterCard
            key={meter.id}
            hubid={hubId}
            meterid={meter.id}
            name={meter.name}
            location={meter.location}
            powerUsage={meter.powerUsage || 0}
            isOnline={meter.state}
          />
        ))
      )}
    </div>
  );
};

export default Page;
