'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Import useParams to get the dynamic id
import MeterCard from '../../../../../components/MeterCard';
import DropdownMenuMeter from '../../../../../components/DropdownMenuMeter';

const Page = () => {
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
  const { hubId: paramHubId, meterId: paramMeterId } = useParams();  // Get both hubId and meterId from URL

  const hubId = Array.isArray(paramHubId) ? paramHubId[0] : paramHubId;  // Ensure hubId is always a string
  const meterId = Array.isArray(paramMeterId) ? paramMeterId[0] : paramMeterId;  // Ensure meterId is always a string

  // Fetch meters for the specified hub
  const fetchMetersForHub = async (hubId: string, meterId: string) => {
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

        // Fetch meters for the hub with the hubId and meterId from the URL
        const metersResponse = await fetch(`${process.env.NEXT_PUBLIC_METER_MANAGER}/api/meters/hub/${hubId}/meter/${meterId}`, {
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
    if (hubId && meterId) {
      console.log('Hub ID:', hubId, 'Meter ID:', meterId);  // Log the hubId and meterId
      fetchMetersForHub(hubId, meterId);  // Fetch meters for the hub and meterId with the dynamic ids
    } else {
      console.log('No hubId or meterId found in the URL.');
      setLoading(false);
    }
  }, [hubId, meterId]);

  if (loading) {
    return <h2>Loading...</h2>;  // Show loading state while fetching
  }

  if (!user) {
    return <h2>Loading user data...</h2>;  // Loading state for user data
  }

  // Refresh the meters when a new meter is added
  const handleMeterAdded = () => {
    fetchMetersForHub(hubId, meterId);  // Re-fetch the meters for this hub and meter
  };

  // Handle the hub deletion
  const handleHubDeleted = () => {
    window.location.href = `/smarthub/${hubId}`;  // Redirect to the hub page after deletion
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-10">
      <div className="flex justify-between items-center col-span-2 lg:col-span-4">
        <h1 className="text-2xl">Meters in Hub {hubId} (Meter {meterId})</h1>
        <DropdownMenuMeter hubId={hubId} meterId={meterId} onMeterDeleted={handleHubDeleted} onMeterAdded={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </div>
    </div>
  );
};

export default Page;
