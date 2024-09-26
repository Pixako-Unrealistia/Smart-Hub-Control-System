"use client";
import React, { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
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
            onClick={handleRemove}
          >
            Configuration
          </button>
          <button 
            className="w-full text-left px-4 py-2 hover:bg-gray-100" 
            onClick={handleRemove}
          >
            Remove Hub
          </button>
        </div>
      </div>

      {/* Modal for Adding a New Device */}
      <AddSmartMeterForm isVisible={isModalVisible} onClose={closeModal} />
    </>
  );
};

export default DropdownMenu;
