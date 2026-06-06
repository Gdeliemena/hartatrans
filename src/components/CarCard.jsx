import React from 'react';
import { Settings2, Users } from 'lucide-react';

export default function CarCard({ car, navigateTo }) {
  const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);

  return (
    <div 
      onClick={() => navigateTo('sewaDetail', car.id)}
      className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer pb-3 sm:pb-5"
    >
      {/* GAMBAR KOTAK SEMPURNA (Aspect Square Mengikuti Lebar Grid) */}
      <div className="w-full aspect-square relative overflow-hidden bg-white">
        <img 
          src={car.img} 
          alt={car.name} 
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* DETAIL KONTEN (Responsive Padding) */}
      <div className="px-3 sm:px-5 pt-3 sm:pt-4 flex flex-col flex-grow">
        {/* Nama Mobil */}
        <h3 className="font-bold text-sm sm:text-[18px] text-gray-900 mb-1.5 sm:mb-3 truncate">
          {car.name}
        </h3>

        {/* Spesifikasi (Flex Wrap biar kalau gak muat dia otomatis turun rapi) */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-500 text-[10px] sm:text-[13px] mb-3 sm:mb-5">
          <div className="flex items-center gap-1">
            <Settings2 size={12} className="text-gray-400 sm:w-4 sm:h-4" /> 
            <span className="truncate max-w-[70px] sm:max-w-none">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={12} className="text-gray-400 sm:w-4 sm:h-4" /> 
            <span>{car.seats} Kursi</span>
          </div>
        </div>

        {/* Harga */}
        <div className="mt-auto pt-1">
          <p className="text-[10px] sm:text-[12px] text-gray-400 mb-0.5">Start from</p>
          <p className="font-bold text-xs sm:text-[17px] text-gray-900">
            {car.lepasKunci === 'Unavailable' ? 'Call Admin' : `Rp ${formatPrice(car.lepasKunci)}`}
          </p>
        </div>
      </div>
    </div>
  );
}