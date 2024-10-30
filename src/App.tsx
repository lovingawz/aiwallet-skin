import React from 'react';
import PortfolioOverview from './components/PortfolioOverview';
import ValueChart from './components/ValueChart';
import ConsultationSection from './components/ConsultationSection';
import AISection from './components/AISection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Crypto Wallet Dashboard</h1>
          <p className="text-gray-600">Smart Investment Companion</p>
        </header>

        <div className="grid grid-cols-2 gap-6">
          <PortfolioOverview />
          <ValueChart />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <ConsultationSection />
          <AISection />
        </div>
      </div>
    </div>
  );
}

export default App;