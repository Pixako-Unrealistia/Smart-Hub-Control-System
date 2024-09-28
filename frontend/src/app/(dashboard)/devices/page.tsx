'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CirclePlus } from 'lucide-react';  // Import the CirclePlus icon
import SmartHubCard from '../../../components/SmartHubCard';
import AddSmartMeterForm from '../../../components/AddSmartMeterForm'; // Import the AddSmartMeterForm component

const Page = () => {
  const [user, setUser] = useState(null);
  const [hubs, setHubs] = useState([]);  
  const [isModalVisible, setModalVisible] = useState(false); // To show/hide the form modal
  const router = useRouter();  

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
        method: 'GET',
        credentials: 'include',  
      });

      console.log('API response:', response);  

      if (response.ok) {
        const userData = await response.json();
        console.log('Fetched user data:', userData);  
        setUser(userData);  
       
        console.log('NEXT_METER_HUB:', process.env.NEXT_PUBLIC_GET_HUB_SERVICE_URL);
        const hubsResponse = await fetch(`${process.env.NEXT_PUBLIC_GET_HUB_SERVICE_URL}/api/hubs/user/${userData.id}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (hubsResponse.ok) {
          const hubsData = await hubsResponse.json();
          setHubs(hubsData); 
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

  // Fetch the user data and hubs when the component mounts
  useEffect(() => {
    fetchUserData(); 
  }, [router]);

  // Callback to refresh the hubs after adding a new one
  const handleHubAdded = () => {
    fetchUserData(); // Re-fetch the hubs when a new hub is added
  };

  // Function to open the modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  if (!user) {
    return <h2>Loading...</h2>;  
  }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
      <div className='flex justify-between items-center col-span-2 lg:col-span-4'>
        <h1 className='text-2xl'>All devices</h1>
        {/* Circular button with CirclePlus icon */}
        <button 
          onClick={openModal} 
        >
          <CirclePlus size={24} color={'#9ca3af'} strokeWidth={2} absoluteStrokeWidth />
        </button>
      </div>

      {/* Smart hubs list */}
      {hubs.length === 0 ? (
        <h2 className="col-span-2 lg:col-span-4 text-center">No hubs available. Please add a hub.</h2>
      ) : (
        hubs.map((hub: any) => (
          <SmartHubCard 
            key={hub.id} 
            name={hub.hub_name} 
            id={hub.id} 
            location={hub.location} 
            powerUsage={hub.powerUsage} 
            isOnline={hub.is_online} 
          />
        ))
      )}

      {/* Add Hub Form Modal */}
      <AddSmartMeterForm 
        isVisible={isModalVisible}
        onClose={closeModal}
        onHubAdded={handleHubAdded} // Pass the callback to refresh the list
        hubId={''} onMeterAdded={function (): void {
          throw new Error('Function not implemented.');
        } }      />
    </div>
  );
};

export default Page;
