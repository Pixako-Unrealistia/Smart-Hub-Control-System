"use client";
import React, { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
import AddSmartMeterForm from './AddSmartMeterForm'; // Import the form component
import AddMeterForm from './AddMeterForm';

interface DropdownMenuProps {
  hubId: string; // Pass the hubId to delete the hub
  onMeterAdded: () => void; // Callback to refresh the meters list after adding a new meter
  onHubDeleted: () => void; // Callback to refresh the hubs list after deleting the hub
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ hubId, onMeterAdded, onHubDeleted }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleAdd = () => {
    setIsModalVisible(true); // Show the modal when "Add Meter" is clicked
    setIsDropdownVisible(false); // Hide the dropdown
  };

  const handleDeleteHub = async () => {
    try {
      console.log('Deleting hub with ID:', hubId);
      const response = await fetch(`${process.env.NEXT_PUBLIC_DELETE_HUB_SERVICE_URL}/api/hubs/${hubId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Hub deleted successfully');
        onHubDeleted(); // Call the callback to refresh the hubs list
      } else {
        console.error('Failed to delete hub');
      }
    } catch (error) {
      console.error('Error deleting hub:', error);
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
            onClick={handleAdd}
          >
            Add Meter
          </button>
          <button 
            className="w-full text-left px-4 py-2 hover:bg-gray-100" 
            onClick={handleDeleteHub}
          >
            Remove Hub
          </button>
        </div>
      </div>

      {/* Modal for Adding a New Meter */}
      <AddMeterForm isVisible={isModalVisible} onClose={closeModal} onMeterAdded={onMeterAdded} hubId={hubId} />
    </>
  );
};

export default DropdownMenu;
