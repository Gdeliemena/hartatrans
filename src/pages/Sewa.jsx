import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import MotorCard from '../components/MotorCard';
import { carsData } from '../data/carsData';
import { motorsData } from '../data/dataMotor';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Sewa({ navigateTo }) {
  const [activeTab, setActiveTab] = useState('regular'); // 'regular', 'bisnis', 'motor'
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  // Filter Data Berdasarkan Tab
  let currentData = [];
  if (activeTab === 'regular') currentData = carsData.filter(c => c.category === 'regular');
  else if (activeTab === 'bisnis') currentData = carsData.filter(c => c.category === 'bisnis');
  else if (activeTab === 'motor') currentData = motorsData;

  // Logika Pagination
  const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = currentData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Fungsi ganti tab (reset halaman ke 1)
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px]">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B7A3E] mb-3">Pilih Kendaraan Anda</h1>
          <p className="text-gray-900 font-bold text-sm">Tersedia berbagai jenis armada untuk kebutuhan pribadi maupun bisnis.</p>
        </div>

        {/* Tab Filter */}
        <div className="flex gap-3 mb-10 border-b border-gray-200 pb-6">
          <button 
            onClick={() => handleTabChange('regular')} 
            className={`px-5 py-2 rounded-full text-xs font-bold transition ${activeTab === 'regular' ? 'bg-[#0B7A3E] text-white shadow-md' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
          >
            Seri Regular
          </button>
          <button 
            onClick={() => handleTabChange('bisnis')} 
            className={`px-5 py-2 rounded-full text-xs font-bold transition ${activeTab === 'bisnis' ? 'bg-[#0B7A3E] text-white shadow-md' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
          >
            Seri Bisnis
          </button>
          <button 
            onClick={() => handleTabChange('motor')} 
            className={`px-5 py-2 rounded-full text-xs font-bold transition ${activeTab === 'motor' ? 'bg-[#0B7A3E] text-white shadow-md' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
          >
            Sewa Motor
          </button>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {paginatedData.map(item => (
            activeTab === 'motor' 
              ? <MotorCard key={item.id} motor={item} navigateTo={navigateTo} />
              : <CarCard key={item.id} car={item} navigateTo={navigateTo} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-16">
            
            {/* Tombol Back (Muncul jika halaman > 1) */}
            {currentPage > 1 && (
              <button onClick={() => setCurrentPage(prev => prev - 1)} className="mr-2 text-gray-900 hover:text-[#0B7A3E] transition">
                <ChevronLeft size={28} strokeWidth={3} />
              </button>
            )}

            {/* Dots */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-3.5 h-3.5 rounded-full transition-colors ${currentPage === i + 1 ? 'bg-[#0B7A3E]' : 'bg-[#81C784]'}`}
              />
            ))}
            
            {/* Tombol Next (Muncul jika belum di halaman terakhir) */}
            {currentPage < totalPages && (
              <button onClick={() => setCurrentPage(prev => prev + 1)} className="ml-2 text-gray-900 hover:text-[#0B7A3E] transition">
                <ChevronRight size={28} strokeWidth={3} />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}