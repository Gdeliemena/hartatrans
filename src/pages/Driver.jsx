import React from 'react';
import { driverData } from '../data/driverData';

export default function Driver({ navigateTo }) {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1100px]">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h3 className="text-[#F59E0B] font-bold text-[13px] uppercase tracking-wider mb-2">Transparansi Layanan</h3>
          <h1 className="text-3xl md:text-[40px] font-bold text-[#0B7A3E] mb-4">Our Driver</h1>
          <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Jelajahi destinasi terbaik di Lombok dengan pengalaman dari tim driver profesional kami.
          </p>
        </div>

        {/* GRID LAYOUT (Max 3 Box Sebaris) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {driverData.map((driver) => (
            <div 
              key={driver.id} 
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-5 shadow-sm border border-gray-100">
                <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="font-bold text-xl text-gray-900">{driver.name}</h3>
              
              <div className="bg-[#E8F5E9] text-[#0B7A3E] px-4 py-1.5 rounded-full text-[11px] font-bold mt-3 mb-6">
                Pengalaman {driver.experience} Tahun
              </div>

              <button 
                onClick={() => navigateTo('driverDetail', driver.id)}
                className="text-gray-400 text-sm hover:text-[#0B7A3E] transition-colors mt-auto"
              >
                Lihat Profil &gt;
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}