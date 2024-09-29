'use client';

import React, { useState, useEffect } from 'react';

interface EditHubFormProps {
  isVisible: boolean;
  onClose: () => void;
  onHubUpdated: () => void; // Callback to refresh the hub list after editing the hub
  hubId: string; // Hub ID to be edited
}

const EditHubForm: React.FC<EditHubFormProps> = ({ isVisible, onClose, onHubUpdated, hubId }) => {
  const [hubName, setHubName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  // Fetch current hub data when the modal is opened
  useEffect(() => {
    const fetchHubDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_GET_HUB_SERVICE_URL}/api/hubs/${hubId}`);
        if (response.ok) {
          const hubData = await response.json();
          setHubName(hubData.hub_name);
          setLocation(hubData.location);
        } else {
          console.error('Failed to fetch hub details');
        }
      } catch (error) {
        console.error('Error fetching hub details:', error);
      }
    };

    if (isVisible) {
      fetchHubDetails();
    }
  }, [hubId, isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hubName || !location) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      console.log("link: ", `${process.env.NEXT_PUBLIC_UPDATE_HUB_SERVICE_URL}/api/hubs/${hubId}`);
      // print(data send)
      console.log("data send: ", {
        hub_name: hubName,
        location,
        is_online: true,
      });
      const response = await fetch(`${process.env.NEXT_PUBLIC_UPDATE_HUB_SERVICE_URL}/api/hubs/${hubId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hub_name: hubName,
          location,
          is_online: true,
        }),
      });

      if (response.ok) {
        onHubUpdated(); // Refresh the hub list
        onClose(); // Close the modal after updating
      } else {
        setError('Failed to update the hub. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Edit Smart Hub</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="hub_name" className="block text-sm font-medium text-gray-700">Hub Name</label>
            <input
              type="text"
              id="hub_name"
              name="hub_name"
              value={hubName}
              onChange={(e) => setHubName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end mt-6 space-x-4">
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHubForm;
