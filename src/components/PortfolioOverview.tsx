import React from 'react';
import { PieChart } from 'lucide-react';

const PortfolioOverview = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Portfolio Overview</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <PieChart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <span className="text-white font-medium">B</span>
            </div>
            <div>
              <div className="text-xl font-bold">0.81%</div>
              <div className="text-blue-500 text-sm">Bitcoin</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <span className="text-white font-medium">T</span>
            </div>
            <div>
              <div className="text-xl font-bold">7.098</div>
              <div className="text-emerald-500 text-sm">Tether</div>
            </div>
          </div>
        </div>
        
        <div className="relative w-32 h-32">
          <div className="w-full h-full rounded-full bg-yellow-400" style={{ clipPath: 'polygon(0 0, 85% 0, 85% 100%, 0 100%)' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">16.85</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;