'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DropdownMenuMeter from '../../../../../components/DropdownMenuMeter';

const Page = () => {
  const [config, setConfig] = useState<any | null>(null);  // State to hold the meter config
  const [loading, setLoading] = useState(true);  // Loading state
  const { meterId: paramMeterId, hubId: paramHubId } = useParams();  // Get both hubId and meterId from URL

  const meterId = Array.isArray(paramMeterId) ? paramMeterId[0] : paramMeterId;
  const hubId = Array.isArray(paramHubId) ? paramHubId[0] : paramHubId;

  const fetchMeterConfig = async (meterId: string) => {
    try {
      const configResponse = await fetch(`${process.env.NEXT_PUBLIC_GET_CONFIG_SERVICE_URL}/api/configs/${meterId}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (configResponse.ok) {
        const configData = await configResponse.json();
        if (Array.isArray(configData) && configData.length > 0) {
          setConfig(configData[0]);
        } else {
          setConfig(null);
        }
      } else {
        console.error('Failed to fetch meter config');
      }
    } catch (error) {
      console.error('Error fetching meter config:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (meterId) {
      fetchMeterConfig(meterId);
    } else {
      setLoading(false);
    }
  }, [meterId]);

  const handleMeterDeleted = () => {
    window.location.href = `/smarthub/${hubId}`;  // Redirect to the hub page after deletion
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="grid grid-cols-2 p-10">
      <div className='flex col-span-2 justify-between'>
        <h1 className="text-2xl mb-4">Meter Config for Meter {meterId} from Hub {hubId}</h1>
        <DropdownMenuMeter hubId={hubId} meterId={meterId} onMeterDeleted={handleMeterDeleted} />
      </div>

      {/* Config display */}
      <div className="border p-5 rounded-lg bg-white shadow-md">
        {config ? (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Meter ID</h2>
              <p>{config.meter_id || 'N/A'}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Configuration</h2>
              <p><strong>Max Voltage:</strong> {config.config?.max_voltage || 'N/A'}</p>
              <p><strong>Firmware Version:</strong> {config.config?.firmware_version || 'N/A'}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Timestamps</h2>
              <p><strong>Created At:</strong> {new Date(config.created_at).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(config.updated_at).toLocaleString()}</p>
            </div>
          </div>
        ) : (
          <p>No config available for this meter.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
