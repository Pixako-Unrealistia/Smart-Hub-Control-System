'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import MeterCard from '../../../../components/MeterCard';
import DropdownMenu from '../../../../components/DropdownMenu';
import { Power } from 'lucide-react';

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);  // State for user info
  const [allMetersOn, setAllMetersOn] = useState(false); // State to track if all meters are on/off
  const [meters, setMeters] = useState<Meter[]>([]);  // State to hold meters
  const [loading, setLoading] = useState(true);  // Loading state
  const { id } = useParams();  // Get the dynamic hub id from URL
  const hubId = Array.isArray(id) ? id[0] : id;  // Ensure hubId is always a string

  interface Meter {
    id: string;  // Primary key (for on/off operations)
    meter_id: string;  // Meter identifier (for fetching usage)
    name: string;
    location: string;
    powerUsage?: number;
    state: boolean;
    readIndex: number;  // Add readIndex to track the current reading index
  }

  // Fetch meters for the specified hub
  const fetchMetersForHub = async (hubId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);

        // Fetch meters for the hub with the id from the URL
        const metersResponse = await fetch(`${process.env.NEXT_PUBLIC_GET_METER_SERVICE_URL}/api/meters/hub/${hubId}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (metersResponse.ok) {
          const metersData = await metersResponse.json();
          const initializedMeters = metersData.map((meter: Meter) => ({
            ...meter,
            readIndex: 0,  // Initialize the readIndex for each meter
          }));

          setMeters(initializedMeters);  // Set fetched meters to state
          setAllMetersOn(metersData.every((meter: { state: any }) => meter.state));  // Check if all meters are on
        } else {
          console.error('Failed to fetch meters');
        }
      } else {
        console.log('Invalid token or response issue, redirecting to sign-in');
      }
    } catch (error) {
      console.error('Error fetching meters or user data:', error);
    } finally {
      setLoading(false); // Ensure loading state is stopped
    }
  };

  // Toggle all meters on/off
  const toggleAllMeters = async () => {
    try {
      const newState = !allMetersOn; // Toggle the current state
      const response = await fetch(`${process.env.NEXT_PUBLIC_SET_ALL_METERS_STATE_URL}/api/hubs/${hubId}/meters`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state: newState }), // Pass the new state to toggle all meters
      });

      if (response.ok) {
        // Update the local meters state without needing to re-fetch
        const updatedMeters = meters.map(meter => ({
          ...meter,
          state: newState, // Set all meters' state to the new state
        }));
        setMeters(updatedMeters);  // Immediately reflect the changes in the UI
        setAllMetersOn(newState); // Update the UI to reflect the new state
      } else {
        console.error('Failed to toggle all meters.');
      }
    } catch (error) {
      console.error('Error toggling all meters:', error);
    }
  };

  // Toggle individual meter on/off using the primary key (id)
  const toggleMeter = async (meterId: string) => {
    try {
      const meter = meters.find(m => m.id === meterId);
      const newState = !meter?.state; // Toggle the meter's state
      const response = await fetch(`${process.env.NEXT_PUBLIC_SET_METER_STATE_URL}/api/meters/${meterId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state: newState }), // Pass the new state to toggle the meter
      });

      if (response.ok) {
        // Update the state for this meter in the meters array
        setMeters(prevMeters =>
          prevMeters.map(meter =>
            meter.id === meterId ? { ...meter, state: newState } : meter
          )
        );
      } else {
        console.error('Failed to toggle meter state.');
      }
    } catch (error) {
      console.error('Error toggling meter state:', error);
    }
  };

const fetchMeterReading = async (meterId: string, index: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GET_METER_USAGE_SERVICE_URL}/meter/${meterId}/read/${index}`, {
      method: 'GET',
    });

    if (response.ok) {
      const meterData = await response.json();

      const powerUsage = parseFloat(meterData["energy(kWh/hh)"].trim());

      if (!isNaN(powerUsage)) {
        return powerUsage; 
      } else {
        console.error('Invalid power usage data');
        return null;
      }
    } else {
      console.error('Failed to fetch meter reading');
      return null;
    }
  } catch (error) {
    console.error('Error fetching meter reading:', error);
    return null;
  }
};


  useEffect(() => {
    const interval = setInterval(async () => {
      const updatedMeters = await Promise.all(
        meters.map(async (meter) => {
          if (meter.state) {
            const reading = await fetchMeterReading(meter.meter_id, meter.readIndex);  // Fetch meter reading using meter_id
            if (reading !== null) {
              // Return a new meter object instead of mutating the current one
              return {
                ...meter,
                powerUsage: reading, // Update the power usage
                readIndex: meter.readIndex + 1, // Increment the readIndex
              };
            }
          }
          return meter;
        })
      );
      setMeters([...updatedMeters]);  // Update state with a new array
    }, 1000); // Fetch the reading every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [meters]);  // Make sure meters are part of the dependency array

  // Fetch the user data and meters when the component mounts
  useEffect(() => {
    if (hubId) {
      fetchMetersForHub(hubId);  // Fetch meters for the hub with the dynamic id
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

  // Refresh the meters when a hub is updated
  const handleHubUpdated = () => {
    fetchMetersForHub(hubId); // Re-fetch the meters after updating the hub
  };

  // Handle the hub deletion
  const handleHubDeleted = () => {
    router.push('/devices');  // Redirect to the devices page after deleting the hub
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-10">
      <div className="flex justify-between items-center col-span-2 lg:col-span-4">
        <h1 className="text-2xl">Meters in Hub {hubId}</h1>
        <div className='grid grid-cols-2 gap-10'>
          <Power 
            className={`w-6 h-6 cursor-pointer ${allMetersOn ? 'text-green-600' : 'text-red-600'}`}
            onClick={toggleAllMeters} // Toggle all meters on/off
          />
          <DropdownMenu 
            hubId={hubId} 
            onMeterAdded={handleMeterAdded} 
            onHubDeleted={handleHubDeleted} 
            onHubUpdated={handleHubUpdated}  // Callback to refresh the hub list after updating
          />
        </div>
      </div>

      {/* Render fetched meters */}
      {meters.length === 0 ? (
        <h2>No meters available in this hub.</h2>
      ) : (
        meters.map((meter) => (
          <MeterCard
            key={meter.id}  // Use id as the key
            hubid={hubId}
            meterid={meter.id}  // Use id for internal operations like on/off
            name={meter.name}
            location={meter.location}
            powerUsage={meter.powerUsage || 0}
            isOnline={meter.state}
            toggleMeter={toggleMeter}  // Pass the toggle function to each MeterCard
          />
        ))
      )}
    </div>
  );
};

export default Page;
