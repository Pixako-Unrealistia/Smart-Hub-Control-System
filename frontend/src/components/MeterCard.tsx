"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Power, Zap, Gauge } from "lucide-react";

interface MeterCardProps {
  hubid: string;
  meterid: string;
  name: string;
  location: string;
  powerUsage: number;
  isOnline: boolean;
  toggleMeter: (meterId: string, newState: boolean) => void;
}

const MeterCard: React.FC<MeterCardProps> = ({ hubid, meterid, name, location, powerUsage, isOnline, toggleMeter }) => {
  const [showPowerIcon, setShowPowerIcon] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state while toggling
  const router = useRouter();

  const handleMouseEnter = () => {
    setShowPowerIcon(true);
  };

  const handleMouseLeave = () => {
    setShowPowerIcon(false);
  };

  const handleCardClick = () => {
    router.push(`/meter/${hubid}/${meterid}`); // Redirect to meter page
  };

  // Toggle meter state (on/off)
  const toggleMeterState = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click from firing
    setLoading(true); // Set loading while processing request

    // Call the toggleMeter function passed from the parent component (Page)
    toggleMeter(meterid, !isOnline);
    setLoading(false); // Stop loading after request completes
  };

  return (
    <div
      className={`border rounded-lg shadow-md p-4 max-w-sm cursor-pointer transition-transform duration-300 ${
        isOnline ? "bg-white text-black" : "bg-gray-100 text-gray-400"
      } hover:scale-105 active:scale-95`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}  // Redirect when the card is clicked
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`flex items-center justify-center h-12 w-12 rounded-full ${
            isOnline ? "bg-purple-100" : "bg-gray-300"
          }`}
        >
          <Gauge className={`w-6 h-6 ${isOnline ? "text-purple-600" : "text-gray-400"}`} />
        </div>

        {isOnline && (
          <div className="flex items-center space-x-2">
            <Zap className="text-yellow-500" />
            <span className="text-sm font-semibold">{powerUsage} kWh / hh</span>
          </div>
        )}
      </div>

      <div className="text-lg font-semibold">{name || "Smart Meter"}</div>
      <div className={`text-sm ${isOnline ? "text-gray-600" : "text-gray-400"}`}>
        {location} {isOnline ? "" : "| Offline"}
      </div>

      <div className="flex justify-end mt-4">
        <div className={`transition-opacity duration-300 ${showPowerIcon ? "opacity-100" : "opacity-0"}`}>
          <Power
            className={`h-6 w-6 cursor-pointer ${isOnline ? "text-green-500" : "text-red-500"}`}
            onClick={toggleMeterState} // Toggle state on click
          />
        </div>
      </div>

      {loading && <div className="text-xs text-gray-500 mt-2">Toggling state...</div>}
    </div>
  );
};

export default MeterCard;
