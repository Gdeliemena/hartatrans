import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Settings2, Users } from 'lucide-react';
import { carsData } from '../data/carsData';
import { motorsData } from '../data/dataMotor';
import { driverData } from '../data/driverData';

export default function SewaDetail({ navigateTo, itemId, addToCart }) {
  const carItem = carsData.find(c => c.id === itemId);
  const motorItem = motorsData.find(m => m.id === itemId);
  
  const item = carItem || motorItem;
  const isCar = !!carItem;

  const isLepasKunciAvailable = isCar ? item.lepasKunci !== 'Unavailable' : true;
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [driverOption, setDriverOption] = useState(isLepasKunciAvailable ? 'lepas_kunci' : driverData[0].id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2>Kendaraan tidak ditemukan!</h2>
        <button onClick={() => navigateTo('sewa')} className="mt-4 bg-[#0B7A3E] text-white px-6 py-2 rounded">Kembali</button>
      </div>
    );
  }

  // LOGIKA HARGA
  const parsePrice = (priceStr) => parseInt(String(priceStr).replace(/\D/g, '')) || 0;
  const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);
  
  let baseDailyPrice = 0;
  if (isCar) {
    baseDailyPrice = isLepasKunciAvailable ? item.lepasKunci : (item.bbmDriver - 150000);
  } else {
    baseDailyPrice = parsePrice(item.price);
  }
  
  const driverDailyPrice = (isCar && driverOption !== 'lepas_kunci') ? 150000 : 0;
  const currentDailyPrice = baseDailyPrice + driverDailyPrice;

  // Hitung Total Hari
  let totalDays = 1; 
  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0) totalDays = diffDays;
    else if (diffDays === 0) totalDays = 1; 
  }

  const totalBookingPrice = currentDailyPrice * totalDays;

  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1100px]">
        
        <button onClick={() => navigateTo('sewa')} className="flex items-center text-gray-700 hover:text-[#0B7A3E] font-medium mb-8 transition">
          <ArrowLeft size={18} className="mr-2" /> Kembali
        </button>

        {/* BUNGKUS UTAMA (Tanpa Kotak, Flex Layout Bersih) */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
          
          {/* KIRI: GAMBAR FULL KOTAK (Standalone dengan sudut membulat) */}
          <div className="w-full md:w-1/2 lg:w-[45%] rounded-3xl overflow-hidden shadow-lg">
             <img 
               src={item.img} 
               alt={item.name} 
               className="w-full h-auto object-cover object-center" 
             />
          </div>

          {/* KANAN: FORM & DETAIL (Melayang bersih di background putih) */}
          <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col pt-2 md:pt-4">
            
            <span className="bg-[#E8F5E9] text-[#0B7A3E] text-[10px] font-bold px-3 py-1.5 rounded-full w-fit mb-4">
              Tersedia
            </span>
            
            <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 uppercase tracking-wide mb-3">
              {item.name}
            </h1>
            
            {isCar && (
              <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                <div className="flex items-center gap-2"><Settings2 size={18} className="text-[#0B7A3E]" /> {item.transmission}</div>
                <div className="flex items-center gap-2"><Users size={18} className="text-[#0B7A3E]" /> {item.seats} Kursi</div>
              </div>
            )}

            <div className="mt-2 border-b border-gray-200 pb-6 mb-8">
               <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Harga Sewa / Hari</p>
               <p className="text-3xl md:text-[32px] font-bold text-[#0B7A3E]">
                 Rp {formatPrice(currentDailyPrice)} <span className="text-sm text-gray-400 font-normal">/ hari</span>
               </p>
            </div>

            <div className="flex-grow space-y-5">
               <div className="grid grid-cols-2 gap-4">
                 <div className="flex flex-col">
                    <label className="text-[12px] font-bold text-gray-800 mb-2">Tanggal Mulai</label>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#0B7A3E]/30 focus:border-[#0B7A3E] transition-all" />
                 </div>
                 <div className="flex flex-col">
                    <label className="text-[12px] font-bold text-gray-800 mb-2">Tanggal Selesai</label>
                    <input type="date" value={endDate} min={startDate} onChange={(e) => setEndDate(e.target.value)} className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#0B7A3E]/30 focus:border-[#0B7A3E] transition-all" />
                 </div>
               </div>

               {/* Pilihan Driver */}
               {isCar && (
                 <div className="flex flex-col pt-2">
                    <label className="text-[12px] font-bold text-gray-800 mb-2">Pilih Driver</label>
                    <select 
                      value={driverOption}
                      onChange={(e) => setDriverOption(e.target.value)}
                      className="border border-gray-300 rounded-lg p-3 text-sm w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7A3E]/30 focus:border-[#0B7A3E] transition-all cursor-pointer"
                    >
                      {isLepasKunciAvailable && (
                        <option value="lepas_kunci">-- Lepas Kunci (Tanpa Driver) --</option>
                      )}
                      
                      <optgroup label="Dengan Driver (+ Rp 150.000 / hari)">
                        {driverData.map(driver => (
                          <option key={driver.id} value={driver.id}>
                            {driver.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                 </div>
               )}
            </div>

            {/* SUMMARY & CHECKOUT */}
            <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="w-full sm:w-auto">
                <p className="text-xs font-bold text-gray-500 mb-1">Total Biaya ({totalDays} Hari)</p>
                <p className="text-2xl font-bold text-gray-900">
                  Rp {formatPrice(totalBookingPrice)}
                </p>
              </div>

              <button 
                onClick={() => addToCart({
                  name: item.name,
                  img: item.img,
                  price: totalBookingPrice,
                  tanggal: startDate && endDate ? `${startDate} s/d ${endDate}` : startDate || '-',
                  driver: isCar && driverOption !== 'lepas_kunci' 
                    ? (driverData.find(d => d.id === driverOption)?.name || 'Dengan Driver') 
                    : (isCar ? 'Lepas Kunci' : null),
                  kendaraan: null
                })}
                className="w-full sm:w-auto flex-1 bg-[#F59E0B] text-white font-bold py-3.5 px-8 rounded-lg shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:bg-amber-600 hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm"
              >
                 <ShoppingCart size={18} /> Tambah ke Keranjang
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}