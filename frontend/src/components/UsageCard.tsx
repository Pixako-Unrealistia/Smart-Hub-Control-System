import { Zap } from 'lucide-react';

interface UsageCardProps {
  usage: number | string;
  unit: string;
}

const UsageCard = ({ usage, unit }: UsageCardProps) => {
  return (
    <div className="grid grid-cols-2 items-center p-4 bg-white shadow rounded-lg">
        <h2 className="capitalize text-sm font-medium text-gray-500">
            Current Energy Usage
        </h2>
        <div className="flex flex-col justify-start">
            <div className=" pl-5">
                {/* Icon for usage */}
                <Zap className="text-yellow-500" />
            </div>
            {/* Display the usage value */}
            <h1 className="text-2xl font-semibold my-4">
                {usage} <span className="text-lg font-light">{unit}</span>
            </h1>
        </div>

    </div>
  );
};

export default UsageCard;
