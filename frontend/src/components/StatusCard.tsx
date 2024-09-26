import { RadioReceiver, Gauge } from 'lucide-react';

interface StatusCardProps {
    type: string;
    value: number | string;
}

const StatusCard = ({ type, value }: StatusCardProps) => {
    // Define the card items
    const cardItems = [
        {
            type: "smarthub",
            icon: RadioReceiver,  // Smart Hub Icon
            label: "Smart meter hubs",
        },
        {
            type: "meter",
            icon: Gauge,  // Power Meter Icon
            label: "Meters",
        },
    ];

    // Find the matching item based on the type
    const currentItem = cardItems.find(item => item.type === type);

    if (!currentItem) return null; // If no item matches, return null

    const Icon = currentItem.icon; // Get the icon dynamically

    return (
        <div className="flex items-center p-4 bg-white shadow rounded-lg">
            <div className="flex-shrink-0">
                <div className="p-4 bg-purple-100 rounded-full">
                    {/* Render the dynamic icon */}
                    <Icon className="text-purple-500" size={32} />
                </div>
            </div>
            <div className="ml-4">
                <div className="text-2xl font-bold text-gray-800">{value}</div>
                <div className="text-gray-500">{currentItem.label} online</div>
            </div>
        </div>
    );
};

export default StatusCard;
