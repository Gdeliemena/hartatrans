import React from 'react';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A6B36] text-white pt-12 pb-6">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          
          {/* Kiri */}
          <div className="md:w-1/3">
            <h3 className="font-bold text-lg mb-4">HARTA TRANS</h3>
            <p className="text-[13px] text-gray-200 leading-relaxed max-w-sm">
              Solusi sewa mobil dan paket tour terbaik di Lombok. Aman, nyaman, dan terpercaya.
            </p>
          </div>
          
          {/* Tengah */}
          <div className="md:w-1/3 flex flex-col sm:flex-row gap-4 sm:gap-12 md:justify-center">
            <a href="#" className="text-[13px] font-semibold hover:text-[#F59E0B] transition">Sewa Mobil</a>
            <a href="#" className="text-[13px] font-semibold hover:text-[#F59E0B] transition">Paket Tour</a>
            <a href="#" className="text-[13px] font-semibold hover:text-[#F59E0B] transition">Driver Kami</a>
          </div>
          
          {/* Kanan */}
          <div className="md:w-1/3 md:text-right w-full">
            <h3 className="font-semibold text-[13px] mb-3 text-gray-200">Hubungi Kami</h3>
            <div className="flex items-center md:justify-end gap-2 text-[#F59E0B] font-bold">
              <Phone size={16} fill="currentColor" />
              <span>+62 823-3963-8686</span>
            </div>
          </div>

        </div>
        
        {/* Bawah */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-[11px] text-gray-300">© 2026 Harta Trans Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}