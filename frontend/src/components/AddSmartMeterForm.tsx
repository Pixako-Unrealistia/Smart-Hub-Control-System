"use client";
import React, { useState } from 'react';

interface AddSmartMeterFormProps {
  isVisible: boolean;
  onClose: () => void;
  onHubAdded: () => void; // Callback to notify parent when a hub is added
}

const AddSmartMeterForm: React.FC<AddSmartMeterFormProps> = ({ isVisible, onClose, onHubAdded }) => {
  const [hub_name, setName] = useState('');  // State to hold the name of the smart hub
  const [location, setLocation] = useState('');  // State to hold the location of the smart hub
  const [error, setError] = useState('');  // State to hold validation errors

  if (!isVisible) return null;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Assuming user_id is available from session or context
    const user_id = 1;  // Replace with actual user_id
  
    if (!hub_name || !location) {
      setError('Please fill in both fields.');
      return;
    }
  
    setError('');  // Clear any previous errors
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_METER_HUB}/api/hubs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id,
          hub_name,
          location,
        }),
      });
  
      if (response.ok) {
        console.log('Smart Meter Hub added successfully!');
        onHubAdded();  // Notify the parent component to refresh the hub list
        onClose();  // Close the form after successful submission
      } else {
        console.error('Failed to add the Smart Meter Hub.');
        setError('Failed to add the Smart Meter Hub. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Add New Smart Meter Hub</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="hub_name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="hub_name"
              name="hub_name"
              value={hub_name}
              onChange={(e) => setName(e.target.value)}  // Update state on input change
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}  // Update state on input change
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSmartMeterForm;
