"use client";
import React, { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
import AddMeterForm from './AddMeterForm'; // Import the form component for adding meters
import { useRouter } from 'next/navigation';  // Import the useRouter hook

interface DropdownMenuMeterProps {
  meterId: string; // Pass the meterId to delete the meter
  hubId: string; // Pass the hubId to associate the meter with a hub
  onMeterAdded: () => void; // Callback to refresh the meters list after adding a new meter
  onMeterDeleted: () => void; // Callback to refresh the meters list after deleting the meter
}

const DropdownMenuMeter: React.FC<DropdownMenuMeterProps> = ({ meterId, hubId, onMeterAdded, onMeterDeleted }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter(); // Initialize the useRouter hook

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDeleteMeter = async () => {
    try {
      console.log('Deleting meter with ID:', meterId);
      const response = await fetch(`${process.env.NEXT_PUBLIC_METER_MANAGER}/api/meters/${meterId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Meter deleted successfully');
        onMeterDeleted(); // Call the callback to refresh the meters list
        
        // Redirect back to the hub page or another relevant page after deletion
        // router.push(`/smarthub/${hubId}`);  // Replace with the desired route after deletion
      } else {
        console.error('Failed to delete meter');
      }
    } catch (error) {
      console.error('Error deleting meter:', error);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false); // Close the modal
  };

  return (
    <>
      <div className="relative">
        <EllipsisVertical 
          size={25} 
          color="#9ca3af" 
          strokeWidth={3} 
          absoluteStrokeWidth 
          onClick={toggleDropdown} 
          className="cursor-pointer"
        />
        
        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out transform origin-top-right ${
            isDropdownVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <button 
            className="w-full text-left px-4 py-2 hover:bg-gray-100" 
            onClick={handleDeleteMeter}
          >
            Remove Meter
          </button>
        </div>
      </div>
    </>
  );
};

export default DropdownMenuMeter;
