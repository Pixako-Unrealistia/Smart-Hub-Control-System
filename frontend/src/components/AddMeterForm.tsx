'use client';

import React, { useState } from 'react';

interface AddMeterFormProps {
  isVisible: boolean;
  hubId: string;  // Ensure you pass the hub ID where the meter will be added
  onClose: () => void;
  onMeterAdded: () => void;  // Callback to refresh the meter list after adding a meter
}

const AddMeterForm: React.FC<AddMeterFormProps> = ({ isVisible, hubId, onClose, onMeterAdded }) => {
  const [meterId, setMeterId] = useState('');  // State to hold the meter ID
  const [name, setName] = useState('');  // State to hold the name of the meter
  const [location, setLocation] = useState('');  // State to hold the location of the meter
  const [error, setError] = useState('');  // State to hold validation errors

  if (!isVisible) return null;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!meterId || !name || !location) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');  // Clear any previous errors

    try {
      // API call to add a new meter to the specified hub
      const response = await fetch(`${process.env.NEXT_PUBLIC_METER_MANAGER}/api/meters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meter_id: meterId,  // Pass meter ID
          name,
          location,
          hub_id: hubId,  // Pass the hub ID to link the meter to the correct hub
          state: true,  // Default state (optional, you can make this a user input too)
        }),
      });

      if (response.ok) {
        console.log('Meter added successfully!');
        onClose();  // Close the form after successful submission
        onMeterAdded();  // Call the callback to refresh the meter list
      } else {
        console.error('Failed to add the meter.');
        setError('Failed to add the meter. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Add New Meter</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="meter_id" className="block text-sm font-medium text-gray-700">Meter ID:</label>
            <input
              type="text"
              id="meter_id"
              name="meter_id"
              value={meterId}
              onChange={(e) => setMeterId(e.target.value)}  // Update state on input change
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Meter Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
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
              Add Meter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeterForm;
