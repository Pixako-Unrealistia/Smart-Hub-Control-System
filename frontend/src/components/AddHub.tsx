"use client";
import React, { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import AddSmartMeterForm from './AddSmartMeterForm'; // Import the form component

interface AddSmartMeterFormProps {
  isVisible: boolean;
  onClose: () => void;
  onHubAdded: () => void;  // Required callback prop
}

const DropdownMenu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleAdd = () => {
    setIsModalVisible(true); // Show the modal when "Add Device" is clicked
    setIsDropdownVisible(false); // Hide the dropdown
  };

  const handleRemove = () => {
    console.log('Remove action clicked');
  };

  const closeModal = () => {
    setIsModalVisible(false); // Close the modal
  };

  return (
    <>
      <div className="relative">
        <CirclePlus
          size={25} 
          color="#9ca3af" 
          strokeWidth={2} 
          absoluteStrokeWidth 
          onClick={handleAdd}
          className="cursor-pointer"
        />
      </div>
      {/* Modal for Adding a New Device */}
      <AddSmartMeterForm isVisible={isModalVisible} onClose={closeModal} onHubAdded={function (): void {
        throw new Error('Function not implemented.');
      } } hubId={''} onMeterAdded={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </>
  );
};

export default DropdownMenu;
