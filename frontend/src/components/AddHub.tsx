"use client";
import React, { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import AddSmartMeterForm from './AddSmartMeterForm'; // Import the form component

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
      <AddSmartMeterForm isVisible={isModalVisible} onClose={closeModal} />
    </>
  );
};

export default DropdownMenu;
