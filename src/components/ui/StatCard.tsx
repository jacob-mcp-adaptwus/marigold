import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="text-center p-6 bg-[#2a2b2a] bg-opacity-50 rounded-xl backdrop-blur-sm">
      <div className="text-4xl font-bold text-[#f59d40] mb-2">{number}</div>
      <div className="text-gray-300 font-medium">{label}</div>
    </div>
  );
};

export default StatCard; 