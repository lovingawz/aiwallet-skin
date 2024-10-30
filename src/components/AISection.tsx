import React from 'react';
import { Bot } from 'lucide-react';

const AISection = () => {
  const suggestions = [
    {
      title: 'Design Setting',
      description: 'Optimize your trading settings',
      status: 'Task done',
      color: 'green'
    },
    {
      title: 'Trading Strategy',
      description: 'Review and adjust your strategy',
      status: 'Pending',
      color: 'orange'
    },
    {
      title: 'Risk Analysis',
      description: 'Check portfolio risk levels',
      status: 'In progress',
      color: 'blue'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Real-time AI Suggestions</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Bot className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {suggestions.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{item.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-600`}>
                {item.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
            <button className="w-full mt-3 bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors">
              Review Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISection;