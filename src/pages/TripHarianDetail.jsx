import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import { tripHarianDetails } from '../data/tripHarianDetailData';
import { initialReviewsData } from '../data/dataReview';
import { carsData } from '../data/carsData';
import { driverData } from '../data/driverData';

export default function TripHarianDetail({ navigateTo, tourId }) {
  // Pastikan ID default aman jika tidak ketemu
  const currentTrip = tripHarianDetails[tourId] || tripHarianDetails['th1'];

  // States
  const [selectedPackage, setSelectedPackage] = useState(currentTrip.options[0]);
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedAddons, setSelectedAddons] = useState({});

  // Reset states jika pindah halaman tour
  useEffect(() => {
    setSelectedPackage(currentTrip.options[0]);
    setSelectedCar('');
    setSelectedAddons({});
  }, [currentTrip]);

  const handleAddonChange = (addonId) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addonId]: !prev[addonId]
    }));
  };

  // Kalkulasi Harga
  const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);
  const basePrice = currentTrip.pricing[selectedPackage] || 0;
  
  const activeCarData = carsData.find(car => car.name === selectedCar);
  const carPrice = activeCarData && typeof activeCarData.bbmDriver === 'number' ? activeCarData.bbmDriver : 0;
  
  let addonsPrice = 0;
  currentTrip.addons.forEach(addon => {
    if (selectedAddons[addon.id]) addonsPrice += addon.price;
  });

  const totalPrice = basePrice + carPrice + addonsPrice;

  // Review System
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    const savedReviews = localStorage.getItem('hartaTransReviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(initialReviewsData);
      localStorage.setItem('hartaTransReviews', JSON.stringify(initialReviewsData));
    }
  }, []);

  const currentTourReviews = reviews.filter(r => r.tourId === currentTrip.id);

  const handleSubmitReview = () => {
    if (!reviewerName || !reviewText || rating === 0) {
      alert("Mohon isi nama, komentar, dan pilih rating bintang ya!");
      return;
    }
    const newReview = { id: Date.now(), tourId: currentTrip.id, name: reviewerName, date: 'Just now', rating, comment: reviewText };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('hartaTransReviews', JSON.stringify(updatedReviews));
    alert("Review berhasil disimpan!");
    setReviewerName(''); setReviewText(''); setRating(0);
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px]">
        
        <button onClick={() => navigateTo('tour')} className="flex items-center text-gray-600 hover:text-[#0B7A3E] font-medium mb-6 transition">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Daftar Tour
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* ========================================= */}
          {/* KOLOM KIRI (Deskripsi Simple Sesuai Desain) */}
          {/* ========================================= */}
          <div className="lg:col-span-2">
            <div className="w-full aspect-video md:h-[450px] rounded-2xl overflow-hidden mb-8">
              <img src={currentTrip.image} alt={currentTrip.title} className="w-full h-full object-cover" />
            </div>

            <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-4">{currentTrip.title}</h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {currentTrip.description}
            </p>

            <div className="border-t border-gray-300 pt-6 mb-12">
              <p className="text-sm font-bold text-gray-900 mb-2">Harga (Per Pax / Paket)</p>
              <p className="text-3xl md:text-4xl font-bold text-[#0B7A3E]">
                Rp {formatPrice(totalPrice)}
              </p>
            </div>

            {/* ITINERARY & DETAIL (Tambahan agar data tidak mubazir) */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
               <h3 className="font-bold text-xl text-gray-900 mb-4">Detail Perjalanan</h3>
               
               <h4 className="font-semibold text-gray-800 mt-4 mb-2">Rencana Perjalanan (Itinerary)</h4>
               <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                 {currentTrip.itinerary.map((act, i) => <li key={i}>{act}</li>)}
               </ul>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                 <div>
                   <h4 className="font-semibold text-green-700 mb-2">Include (Termasuk)</h4>
                   <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                     {currentTrip.includes.map((inc, i) => <li key={i}>{inc}</li>)}
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-semibold text-red-600 mb-2">Exclude (Tidak Termasuk)</h4>
                   <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                     {currentTrip.excludes.map((exc, i) => <li key={i}>{exc}</li>)}
                   </ul>
                 </div>
               </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* KOLOM KANAN (Form Konfigurasi - Sticky) */}
          {/* ========================================= */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Konfigurasi Perjalanan Tour</h3>

              <div className="space-y-5">
                <div className="flex flex-col">
                  <label className="text-[12px] font-bold text-gray-800 mb-1.5">Tanggal Tour</label>
                  <input type="date" className="border border-gray-300 rounded-md p-2.5 text-sm w-full focus:outline-none focus:border-[#0B7A3E]" />
                </div>
                
                <div className="flex flex-col">
                  <label className="text-[12px] font-bold text-gray-800 mb-1.5">Pilih Kendaraan</label>
                  <select value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)} className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-600 focus:outline-none focus:border-[#0B7A3E]">
                    <option value="">-- Pilih Kendaraan Anda --</option>
                    <optgroup label="Seri Regular">{carsData.filter(car => car.category === 'regular').map(car => <option key={car.id} value={car.name}>{car.name}</option>)}</optgroup>
                    <optgroup label="Seri Bisnis">{carsData.filter(car => car.category === 'bisnis').map(car => <option key={car.id} value={car.name}>{car.name}</option>)}</optgroup>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[12px] font-bold text-gray-800 mb-1.5">Pilih Driver</label>
                  <select className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-600 focus:outline-none focus:border-[#0B7A3E]">
                    <option value="">-- Pilih Driver Anda --</option>
                    {driverData.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[12px] font-bold text-gray-800 mb-1.5">{currentTrip.packageLabel}</label>
                  <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E]">
                    {currentTrip.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* CHECKBOX TAMBAHAN (ADD-ONS) */}
                {currentTrip.addons.length > 0 && (
                  <div className="flex flex-col pt-2">
                    <label className="text-[12px] font-bold text-gray-800 mb-2">Tambahan</label>
                    <div className="space-y-2.5">
                      {currentTrip.addons.map(addon => (
                        <label key={addon.id} className="flex items-start gap-2.5 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            checked={!!selectedAddons[addon.id]}
                            onChange={() => handleAddonChange(addon.id)}
                            className="mt-0.5 rounded text-[#0B7A3E] focus:ring-[#0B7A3E] cursor-pointer"
                          />
                          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition">
                            {addon.name} = Rp.{formatPrice(addon.price)}/hari
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full bg-[#F59E0B] text-white font-bold py-3.5 rounded-md mt-8 shadow-md hover:bg-amber-600 transition flex items-center justify-center gap-2 text-sm">
                 Masukkan ke Keranjang Tour
              </button>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* BAGIAN REVIEW BAWAH (Sama persis dengan TourDetail) */}
        {/* ========================================= */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="font-bold text-2xl text-[#0B7A3E] mb-8 text-center uppercase tracking-wide">Ulasan Pelanggan</h3>
          {currentTourReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTourReviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col">
                  <h4 className="font-bold text-gray-900 text-[17px]">{review.name}</h4>
                  <p className="text-xs text-gray-400 mb-4">{review.date}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < review.rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-200 fill-gray-200"} />)}
                  </div>
                  <p className="text-[15px] text-gray-700 leading-relaxed italic line-clamp-4">"{review.comment}"</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 bg-gray-50 py-10 rounded-xl border border-dashed">Belum ada ulasan untuk trip ini.</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto border border-gray-200 p-8 md:p-10 rounded-xl bg-[#FAFAFA] mt-12 shadow-sm">
          <h3 className="font-bold text-xl mb-2 text-gray-900">Leave a Comment</h3>
          <p className="text-xs text-gray-500 mb-8">Your email address will not be published.</p>
          <textarea placeholder="Type here..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} className="w-full bg-gray-200 border-none rounded-md p-4 text-sm mb-6 h-32 focus:outline-none focus:ring-2 focus:ring-[#0B7A3E]"></textarea>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
             <input type="text" placeholder="Name *" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} className="bg-gray-200 border-none rounded-md p-3 text-sm w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#0B7A3E]" />
             <div className="flex gap-1 items-center">
               <span className="text-sm text-gray-500 mr-2">Rating:</span>
               {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={24} className={`cursor-pointer transition-colors ${s <= (hoverRating || rating) ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-300 fill-gray-300"}`} onClick={() => setRating(s)} onMouseEnter={() => setHoverRating(s)} onMouseLeave={() => setHoverRating(0)} />)}
             </div>
          </div>
          <button onClick={handleSubmitReview} className="bg-[#0B7A3E] hover:bg-green-700 text-white text-sm font-bold px-8 py-3 rounded-md transition shadow-md">Post Comment</button>
        </div>

      </div>
    </div>
  );
}