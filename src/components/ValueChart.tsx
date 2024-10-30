import React from 'react';
import { TrendingDown } from 'lucide-react';

const ValueChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Real Value Suggestion</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <TrendingDown className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-48 relative">
        {/* Simplified chart representation */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/50 to-transparent rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
      </div>
    </div>
  );
};

export default ValueChart;