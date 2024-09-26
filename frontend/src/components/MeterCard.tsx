"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Power, Zap, Server, Gauge } from "lucide-react";

interface SmartHubCardProps {
  id: string;
  location: string;
  powerUsage: number;
  isOnline: boolean;
}

const SmartHubCard: React.FC<SmartHubCardProps> = ({ id, location, powerUsage, isOnline }) => {
  const [showPowerIcon, setShowPowerIcon] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    setShowPowerIcon(true);
  };

  const handleMouseLeave = () => {
    setShowPowerIcon(false);
  };

  const handleCardClick = () => {
    // Redirect to the Smart Hub management page with the smart hub ID
    router.push(`/smarthub/${id}`);
  };

  return (
    <div
      className={`border rounded-lg shadow-md p-4 max-w-sm cursor-pointer transition-transform duration-300 ${
        isOnline ? "bg-white text-black" : "bg-gray-100 text-gray-400"
      } hover:scale-105 active:scale-95`}  // Jelly-like scaling effect on hover and click
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}  // Redirect when the card is clicked
    >
      <div className="flex items-center justify-between mb-4">
        {/* Icon */}
        <div
          className={`flex items-center justify-center h-12 w-12 rounded-full ${
            isOnline ? "bg-purple-100" : "bg-gray-300"
          }`}
        >
          <Gauge className={`w-6 h-6 ${isOnline ? "text-purple-600" : "text-gray-400"}`} />
        </div>

        {/* Power Usage */}
        {isOnline && (
          <div className="flex items-center space-x-2">
            <Zap className="text-yellow-500" />
            <span className="text-sm font-semibold">{powerUsage} kW / h</span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="text-lg font-semibold">Meter</div>

      {/* Location */}
      <div className={`text-sm ${isOnline ? "text-gray-600" : "text-gray-400"}`}>
        {location} {isOnline ? "" : "| Offline"}
      </div>

      {/* Power On/Off Icon - with smooth transition */}
      <div className="flex justify-end mt-4">
        <div
          className={`transition-opacity duration-300 ${
            showPowerIcon ? "opacity-100" : "opacity-0"
          }`}
        >
          <Power className={`h-6 w-6 ${isOnline ? "text-gray-500" : "text-gray-400"}`} />
        </div>
      </div>
    </div>
  );
};

export default SmartHubCard;
