import React from 'react';

export default function MotorCard({ motor, navigateTo }) {
  return (
    <div 
      onClick={() => navigateTo('sewaDetail', motor.id)} // <-- UPDATE DI SINI
      className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer pb-4"
    >
      {/* Gambar Motor (Kotak) */}
      <div className="w-full aspect-square bg-[#0B7A3E] relative overflow-hidden">
         <img 
           src={motor.img} 
           alt={motor.name} 
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
         />
      </div>
      
      {/* Teks */}
      <div className="pt-4 px-4 flex flex-col">
        <h3 className="font-bold text-[15px] text-gray-900 mb-1">{motor.name}</h3>
        <p className="text-gray-900 font-bold text-[14px]">
          Rp. {motor.price}/24 Jam
        </p>
      </div>
    </div>
  );
}