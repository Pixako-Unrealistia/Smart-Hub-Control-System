"use client";
import { useEffect, useState } from "react";
import SmartHubCard from "./SmartHubCard";

const SmartHubDetailsPageClient = ({ session }: { session: any }) => {
  const [id, setId] = useState<string | null>(null);
  const [smartHubData, setSmartHubData] = useState<{ location: string; powerUsage: number } | null>(null);

  useEffect(() => {
    // Extract the SmartHub ID from the URL using window.location
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hubId = path.split("/").pop() || null; // Extract the SmartHub ID from the URL
      setId(hubId);
    }

    // Simulate data fetching (since you don't have actual data)
    setTimeout(() => {
      // Replace with your actual API call in the future
      setSmartHubData({
        location: "Example Location",
        powerUsage: 120,
      });
    }, 1000); // Simulated delay
  }, []);

  if (!smartHubData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-10">
      <h2 className="text-2xl col-span-2 lg:col-span-4 text-start">Smart Meter Hub | </h2>
      <SmartHubCard id="2313A" location="Bangkok" powerUsage={100} isOnline={true} />
      <SmartHubCard id="2313A" location="Nakhorn Pathom" powerUsage={200} isOnline={true} />
      <SmartHubCard id="2313A" location="Chiang Mai" powerUsage={300} isOnline={true} />
      <SmartHubCard id="2313A" location="Koh Chang" powerUsage={400} isOnline={false} />
      <SmartHubCard id="2313A" location="Koh Tao" powerUsage={400} isOnline={false} />
    </div>
  );
};

export default SmartHubDetailsPageClient;
