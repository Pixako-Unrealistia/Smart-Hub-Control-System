"use client";
import React, { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';

interface DropdownMenuMeterProps {
  meterId: string; // Pass the meterId to delete the meter
  hubId: string; // Pass the hubId to associate the meter with a hub
  onMeterDeleted: () => void; // Callback to refresh the meters list after deleting the meter
}

const DropdownMenuMeter: React.FC<DropdownMenuMeterProps> = ({ meterId, hubId, onMeterDeleted }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion state

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDeleteMeter = async () => {
    try {
      setIsDeleting(true); // Set deleting state
      console.log('Deleting meter with ID:', meterId);
      const response = await fetch(`${process.env.NEXT_PUBLIC_DELETE_METER_SERVICE_URL}/api/meters/${meterId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Meter deleted successfully');
        onMeterDeleted(); // Call the callback to refresh the meters list
      } else {
        console.error('Failed to delete meter');
      }
    } catch (error) {
      console.error('Error deleting meter:', error);
    } finally {
      setIsDeleting(false); // Reset deleting state
    }
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
            disabled={isDeleting} // Disable the button while deleting
          >
            {isDeleting ? 'Deleting...' : 'Remove Meter'}
          </button>
        </div>
      </div>
    </>
  );
};

export default DropdownMenuMeter;
