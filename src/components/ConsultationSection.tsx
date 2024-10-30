import React from 'react';
import { Users } from 'lucide-react';

const ConsultationSection = () => {
  const teamMembers = [
    { id: 1, name: 'Alex', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
    { id: 2, name: 'Sarah', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    { id: 3, name: 'Mike', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { id: 4, name: 'Emma', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Consultation</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Users className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">139</div>
          <div className="text-sm text-green-700">First Layer Data</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">108</div>
          <div className="text-sm text-green-700">Files Consumption</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
            />
            <div className="text-sm text-gray-600">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationSection;