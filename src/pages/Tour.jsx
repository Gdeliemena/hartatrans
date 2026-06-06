import React, { useState } from 'react';
import TourCard from '../components/TourCard';
import { paketHematData, tripHarianData } from '../data/tourData';

export default function Tour({ navigateTo }) {
  // State untuk melacak tab mana yang aktif ('hemat' atau 'harian')
  const [activeTab, setActiveTab] = useState('hemat');

  // Menentukan data mana yang ditampilkan berdasarkan tab aktif
  const displayedTours = activeTab === 'hemat' ? paketHematData : tripHarianData;

  return (
    <div className="animate-fadeIn bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B7A3E] mb-4">
            Paket Tour Lombok
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Jelajahi destinasi terbaik di Lombok dengan paket tour harian dan menginap pilihan kami. <br className="hidden md:block"/>
            Sudah termasuk transportasi, driver, dan bbm.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1.5 rounded-full flex gap-1">
            <button
              onClick={() => setActiveTab('hemat')}
              className={`px-6 py-2.5 rounded-full text-[13px] md:text-sm font-bold transition-all duration-300 ${
                activeTab === 'hemat' 
                  ? 'bg-[#0B7A3E] text-white shadow-md' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Paket Tour
            </button>
            <button
              onClick={() => setActiveTab('harian')}
              className={`px-6 py-2.5 rounded-full text-[13px] md:text-sm font-bold transition-all duration-300 ${
                activeTab === 'harian' 
                  ? 'bg-[#0B7A3E] text-white shadow-md' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Trip Harian
            </button>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedTours.map((tour) => (
            <TourCard 
              key={tour.id} 
              tour={tour} 
              type={activeTab} 
              navigateTo={navigateTo} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}