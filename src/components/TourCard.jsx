import React from 'react';
import { Clock } from 'lucide-react';

export default function TourCard({ tour, type, navigateTo }) {
  // Format Rupiah
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col overflow-hidden transition-transform hover:-translate-y-1">
      
      {/* Gambar atas */}
      <div className="w-full h-[200px] md:h-[220px] bg-gray-200 relative overflow-hidden">
        <img 
          src={tour.img} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Konten Text */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        
        {/* Label Kategori */}
        <div className="bg-orange-50 text-[#F59E0B] font-bold text-[11px] px-3 py-1.5 rounded-md w-fit mb-3">
          {type === 'hemat' ? 'Paket Hemat' : 'Trip Harian'}
        </div>

        {/* Judul Tour */}
        <h3 className="font-bold text-[20px] text-gray-900 mb-2 leading-tight">
          {tour.title}
        </h3>

        {/* Durasi (Hanya muncul jika tipenya paket hemat) */}
        {type === 'hemat' && tour.duration && (
          <div className="flex items-center text-gray-500 text-[14px]">
            <Clock size={16} className="mr-2" />
            {tour.duration}
          </div>
        )}

        {/* Garis Pembatas Horizontal */}
        <div className="w-full h-[1px] bg-gray-200 my-5"></div>

        {/* Footer (Harga & Tombol) */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-[12px] text-gray-400 mb-0.5">Harga Paket</p>
            <p className="text-[#0B7A3E] font-bold text-lg md:text-xl">
              Rp {formatPrice(tour.price)}
            </p>
          </div>
          
          <button 
            onClick={() => type === 'hemat' ? navigateTo('tourDetail', tour.id) : navigateTo('tripHarianDetail', tour.id)} 
            className="bg-[#0B7A3E] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition"
          >
            Pilih Mobil
          </button>
        </div>

      </div>
    </div>
  );
}