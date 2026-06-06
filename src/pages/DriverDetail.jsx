import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { driverData } from '../data/driverData';

export default function DriverDetail({ navigateTo, itemId }) {
  const driver = driverData.find(d => d.id === itemId);

  if (!driver) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
        <h2>Driver tidak ditemukan!</h2>
        <button onClick={() => navigateTo('driver')} className="mt-4 bg-[#0B7A3E] text-white px-6 py-2 rounded">Kembali</button>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[900px]">
        
        {/* Tombol Kembali */}
        <button onClick={() => navigateTo('driver')} className="flex items-center text-gray-700 hover:text-[#0B7A3E] font-medium mb-8 transition">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Daftar Driver
        </button>

        {/* CONTAINER PROFIL */}
        <div className="mt-12 relative drop-shadow-sm">
          
          {/* Bagian Atas (Hijau) */}
          <div className="h-[140px] md:h-[160px] bg-[#0B7A3E] rounded-t-2xl w-full"></div>
          
          {/* Bagian Bawah (Putih) */}
          <div className="bg-white rounded-b-2xl border border-t-0 border-gray-100 p-8 md:p-12 pt-20 md:pt-24 relative">
            
            {/* FOTO OVERLAP (Melayang di antara hijau dan putih) */}
            <div className="absolute -top-[70px] left-8 md:left-12">
              <img 
                src={driver.image} 
                alt={driver.name} 
                className="w-[140px] h-[140px] rounded-full object-cover border-[6px] border-white shadow-md bg-white"
              />
            </div>
            
            {/* Identitas Driver */}
            <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 mt-2">{driver.name}</h1>
            <p className="text-[#0B7A3E] font-bold text-sm md:text-[15px] mt-2">
              Pengalaman: {driver.experience} Tahun
            </p>

            {/* Tentang Driver */}
            <div className="mt-12 mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Tentang Driver</h2>
              <p className="text-gray-500 italic text-[15px] md:text-[16px] leading-relaxed">
                {driver.about}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}