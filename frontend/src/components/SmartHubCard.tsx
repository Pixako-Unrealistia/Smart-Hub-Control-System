"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Power, Zap, Server } from "lucide-react";

interface SmartHubCardProps {
  id: string;
  name: string;
  location: string;
  powerUsage: number;
  isOnline: boolean;
}

const SmartHubCard: React.FC<SmartHubCardProps> = ({ id, name, location, powerUsage, isOnline }) => {
  const [isHubOnline, setIsHubOnline] = useState(isOnline); // State to track the hub's online/offline status
  const [loading, setLoading] = useState(false); // Loading state when toggling
  const [showPowerIcon, setShowPowerIcon] = useState(false); // Track whether to show the power icon
  const router = useRouter();

  const handleMouseEnter = () => {
    setShowPowerIcon(true); // Show the power icon on hover
  };

  const handleMouseLeave = () => {
    setShowPowerIcon(false); // Hide the power icon when not hovering
  };

  const handleCardClick = () => {
    // Redirect to the Smart Hub management page with the smart hub ID
    router.push(`/smarthub/${id}/`);
  };

  const toggleHubStatus = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click event when toggling

    setLoading(true); // Set loading while processing request

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SET_HUB_STATE_URL}/api/hubs/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_online: !isHubOnline }), // Toggle the online status
      });

      if (response.ok) {
        // Successfully toggled the hub status
        setIsHubOnline((prevState) => !prevState); // Update the UI to reflect the new status
      } else {
        console.error("Failed to toggle hub status.");
      }
    } catch (error) {
      console.error("Error toggling hub status:", error);
    }

    setLoading(false); // Stop loading after request completes
  };

  return (
    <div
      className={`border rounded-lg shadow-md p-4 max-w-sm cursor-pointer transition-transform duration-300 ${
        isHubOnline ? "bg-white text-black" : "bg-gray-100 text-gray-400"
      } hover:scale-105 active:scale-95`}  // Jelly-like scaling effect on hover and click
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}  // Redirect when the card is clicked
    >
      <div className="flex items-center justify-between mb-4">
        {/* Icon */}
        <div
          className={`flex items-center justify-center h-12 w-12 rounded-full ${
            isHubOnline ? "bg-purple-100" : "bg-gray-300"
          }`}
        >
          <Server className={`w-6 h-6 ${isHubOnline ? "text-purple-600" : "text-gray-400"}`} />
        </div>

        {/* Power Usage */}
        {isHubOnline && (
          <div className="flex items-center space-x-2">
            <Zap className="text-yellow-500" />
            <span className="text-sm font-semibold">{powerUsage} kW / h</span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="text-lg font-semibold">{name}</div>

      {/* Location */}
      <div className={`text-sm ${isHubOnline ? "text-gray-600" : "text-gray-400"}`}>
        {location} {isHubOnline ? "" : "| Offline"}
      </div>

      {/* Power On/Off Icon - with smooth transition */}
      <div className="flex justify-end mt-4">
        <div
          className={`transition-opacity duration-300 ${showPowerIcon ? "opacity-100" : "opacity-0"}`}
        >
          <Power
            className={`h-6 w-6 cursor-pointer ${isHubOnline ? "text-green-500" : "text-red-500"}`}
            onClick={toggleHubStatus}  // Toggle state on click
          />
        </div>
      </div>

      {loading && <div className="text-xs text-gray-500 mt-2">Toggling status...</div>}
    </div>
  );
};

export default SmartHubCard;
