'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CirclePlus } from 'lucide-react';
import SmartHubCard from '../../../components/SmartHubCard';
import AddSmartMeterForm from '../../../components/AddSmartMeterForm';

interface Hub {
  id: string;
  hub_name: string;
  location: string;
  powerUsage: number;
  is_online: boolean;
}

const Page = () => {
  interface User {
    id: string;
  }
  
  const [user, setUser] = useState<User | null>(null);
  const [hubs, setHubs] = useState<Hub[]>([]);  
  const [isModalVisible, setModalVisible] = useState(false); 
  const router = useRouter();  

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
        method: 'GET',
        credentials: 'include',  
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);  
       
        const hubsResponse = await fetch(`${process.env.NEXT_PUBLIC_GET_HUB_SERVICE_URL}/api/hubs/user/${userData.id}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (hubsResponse.ok) {
          const hubsData = await hubsResponse.json();
          const sortedHubs = hubsData.sort((a: Hub, b: Hub) => (b.is_online ? 1 : 0) - (a.is_online ? 1 : 0));
          setHubs(sortedHubs);
        } else {
          console.error('Failed to fetch smart hubs');
        }
      } else {
        console.log('Invalid token or response issue, redirecting to sign-in');
        router.push('/sign-in'); 
      }
    } catch (error) {
      console.error('Error fetching user data or smart hubs:', error);
      router.push('/sign-in'); 
    }
  };

  useEffect(() => {
    fetchUserData(); 
  }, [router]);

  const handleHubAdded = () => {
    fetchUserData();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Function to toggle hub status (online/offline)
  const toggleHubStatus = async (hubId: string, newState: boolean) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SET_HUB_STATE_URL}/api/hubs/${hubId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_online: newState }),
      });

      if (response.ok) {
        // Update the hub state after successfully toggling the status
        setHubs((prevHubs) =>
          prevHubs.map((hub: Hub) => (hub.id === hubId ? { ...hub, is_online: newState } : hub))
        );
      } else {
        console.error('Failed to toggle hub status');
      }
    } catch (error) {
      console.error('Error toggling hub status:', error);
    }
  };

  if (!user) {
    return <h2>Loading...</h2>;  
  }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
      <div className='flex justify-between items-center col-span-2 lg:col-span-4'>
        <h1 className='text-2xl'>All devices</h1>
        <button onClick={openModal}>
          <CirclePlus size={24} color={'#9ca3af'} strokeWidth={2} absoluteStrokeWidth />
        </button>
      </div>

      {hubs.length === 0 ? (
        <h2 className="col-span-2 lg:col-span-4 text-center">No hubs available. Please add a hub.</h2>
      ) : (
        hubs.map((hub) => (
          <SmartHubCard 
            key={hub.id} 
            name={hub.hub_name} 
            id={hub.id} 
            location={hub.location} 
            powerUsage={hub.powerUsage || 0} 
            isOnline={hub.is_online} 
            toggleHubStatus={toggleHubStatus} 
          />
        ))
      )}

      <AddSmartMeterForm 
        isVisible={isModalVisible}
        onClose={closeModal}
        onHubAdded={handleHubAdded}
        userId={user.id} 
        hubId={''} 
        onMeterAdded={function (): void {
          throw new Error('Function not implemented.');
        }}      
      />
    </div>
  );
};

export default Page;
