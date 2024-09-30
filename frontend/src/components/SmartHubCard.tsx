"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Power, Zap, Server } from "lucide-react";

interface SmartHubCardProps {
  id: string;
  name: string;
  location: string;
  powerUsage: number;
  isOnline: boolean;
  toggleHubStatus: (hubId: string, newState: boolean) => Promise<void>;
}

const SmartHubCard: React.FC<SmartHubCardProps> = ({ id, name, location, powerUsage, isOnline, toggleHubStatus }) => {
  const [isHubOnline, setIsHubOnline] = useState(isOnline);
  const [currentPowerUsage, setCurrentPowerUsage] = useState<number | null>(powerUsage);
  const [loading, setLoading] = useState(false);
  const [showPowerIcon, setShowPowerIcon] = useState(false);
  const [currentSecond, setCurrentSecond] = useState(0); // State to track the current second
  const router = useRouter();

  const handleMouseEnter = () => {
    setShowPowerIcon(true);
  };

  const handleMouseLeave = () => {
    setShowPowerIcon(false);
  };

  const handleCardClick = () => {
    router.push(`/smarthub/${id}/`);
  };

  const toggleHubStatusHandler = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoading(true);
    const newState = !isHubOnline;
    await toggleHubStatus(id, newState);
    setIsHubOnline(newState);
    setLoading(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const fetchPowerUsage = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_GET_HUB_METER_USAGE_SERVICE_URL}/api/hub-usage/${id}/${currentSecond}`); // Use currentSecond in the URL
        if (response.ok) {
          const data = await response.json();
          setCurrentPowerUsage(data.total_power_usage); // Use total_power_usage from the response
        } else {
          console.error("Failed to fetch power usage.");
        }
      } catch (error) {
        console.error("Error fetching power usage:", error);
      }
    };

    if (isHubOnline) {
      fetchPowerUsage(); // Fetch immediately when online
      interval = setInterval(() => {
        fetchPowerUsage(); // Fetch every second
        setCurrentSecond(prev => prev + 1); // Increment the current second
      }, 1000); // Set interval to fetch every second
    }

    return () => {
      if (interval) clearInterval(interval); // Clear interval on unmount or when going offline
    };
  }, [isHubOnline, id, currentSecond]); // Include currentSecond in the dependencies

  return (
    <div
      className={`border rounded-lg shadow-md p-4 max-w-sm cursor-pointer transition-transform duration-300 ${
        isHubOnline ? "bg-white text-black" : "bg-gray-100 text-gray-400"
      } hover:scale-105 active:scale-95`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`flex items-center justify-center h-12 w-12 rounded-full ${
            isHubOnline ? "bg-purple-100" : "bg-gray-300"
          }`}
        >
          <Server className={`w-6 h-6 ${isHubOnline ? "text-purple-600" : "text-gray-400"}`} />
        </div>

        {isHubOnline && currentPowerUsage !== null && (
          <div className="flex items-center space-x-2">
            <Zap className="text-yellow-500" />
            <span className="text-sm font-semibold">{currentPowerUsage.toFixed(3)} kWh / hh</span> {/* Show usage with 3 decimal points */}
          </div>
        )}
      </div>

      <div className="text-lg font-semibold">{name}</div>
      <div className={`text-sm ${isHubOnline ? "text-gray-600" : "text-gray-400"}`}>
        {location} {isHubOnline ? "" : "| Offline"}
      </div>

      <div className="flex justify-end mt-4">
        <div
          className={`transition-opacity duration-300 ${showPowerIcon ? "opacity-100" : "opacity-0"}`}
        >
          <Power
            className={`h-6 w-6 cursor-pointer ${isHubOnline ? "text-green-500" : "text-red-500"}`}
            onClick={toggleHubStatusHandler}
          />
        </div>
      </div>

      {loading && <div className="text-xs text-gray-500 mt-2">Toggling status...</div>}
    </div>
  );
};

export default SmartHubCard;
