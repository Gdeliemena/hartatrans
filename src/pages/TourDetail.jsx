import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Star, ShoppingCart, ChevronDown } from 'lucide-react';
import { detailedTours } from '../data/detailedToursData';
import { initialReviewsData } from '../data/dataReview';
import { carsData } from '../data/carsData';
import { driverData } from '../data/driverData';

export default function TourDetail({ navigateTo, tourId, addToCart }) {
  const currentTour = detailedTours[tourId] || detailedTours['ph1']; 

  const [selectedPax, setSelectedPax] = useState('2-3 PAX');
  const [selectedHotel, setSelectedHotel] = useState('TANPA HOTEL');
  const [selectedCar, setSelectedCar] = useState('');
  
  // States Tanggal & Driver Pengikat Keranjang
  const [tourDate, setTourDate] = useState('');
  const [selectedDriver, setSelectedDriver] = useState('');

  // State Dinamis untuk menangkap pilihan hari
  const [daySelections, setDaySelections] = useState({});

  useEffect(() => {
    const defaultSelections = {};
    currentTour.itinerary.forEach((item, index) => {
      if (item.options) {
        defaultSelections[index] = Object.keys(item.options)[0];
      }
    });
    setDaySelections(defaultSelections);
    setSelectedHotel('TANPA HOTEL');
    setTourDate(''); // Reset tanggal saat ganti paket
    setSelectedDriver('');
  }, [currentTour]);

  const handleDayChange = (index, value) => {
    setDaySelections(prev => ({ ...prev, [index]: value }));
  };

  // State Review
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

  const currentTourReviews = reviews.filter(r => r.tourId === currentTour.id);

  const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);
  const baseTourPrice = currentTour.pricing[selectedHotel][selectedPax];
  const activeCarData = carsData.find(car => car.name === selectedCar);
  const carPrice = activeCarData && typeof activeCarData.bbmDriver === 'number' ? activeCarData.bbmDriver : 0;
  const totalPrice = baseTourPrice + carPrice;

  const handleSubmitReview = () => {
    if (!reviewerName || !reviewText || rating === 0) {
      alert("Mohon isi nama, komentar, dan pilih rating bintang ya!");
      return;
    }
    const newReview = { id: Date.now(), tourId: currentTour.id, name: reviewerName, date: 'Just now', rating, comment: reviewText };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('hartaTransReviews', JSON.stringify(updatedReviews));
    alert("Review berhasil disimpan!");
    setReviewerName(''); setReviewText(''); setRating(0);
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      
      {/* RESET CSS iPHONE SAFARI */}
      <style>{`
        input[type="date"] {
          -webkit-appearance: none;
          min-height: 46px;
        }
        select.ios-fix-select {
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px]">
        
        <button onClick={() => navigateTo('tour')} className="flex items-center text-gray-600 hover:text-[#0B7A3E] font-medium mb-6 transition">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Daftar Tour
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-2">
            <div className="w-full aspect-[16/9] md:h-[400px] rounded-2xl overflow-hidden mb-8">
              <img src={currentTour.image} alt={currentTour.title} className="w-full h-full object-cover" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{currentTour.title}</h1>
            <p className="text-gray-700 text-[15px] mb-4">{currentTour.description}</p>
            <div className="flex items-center text-gray-500 text-sm mb-8">
              <Clock size={16} className="mr-2" /> {currentTour.duration}
            </div>

            <h3 className="font-bold text-xl text-gray-900 mb-4 border-b pb-2">Rencana Perjalanan</h3>
            <div className="mb-8 space-y-5">
              {currentTour.itinerary.map((item, index) => {
                const activeOption = daySelections[index];
                return (
                  <div key={index}>
                    <h4 className="font-bold text-gray-900 text-md mb-2">
                      {item.day} {item.options && activeOption ? `- ${activeOption}` : ''}
                    </h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      {item.base && item.base.map((act, i) => <li key={`b-${i}`}>• {act}</li>)}
                      {item.options && activeOption && item.options[activeOption].map((act, i) => <li key={`o-${i}`}>• {act}</li>)}
                      {item.activities && item.activities.map((act, i) => <li key={`a-${i}`}>• {act}</li>)}
                    </ul>
                  </div>
                )
              })}
            </div>

            <h3 className="font-bold text-xl text-gray-900 mb-4 border-b pb-2">INCLUDE</h3>
            <ul className="text-gray-700 text-sm mb-10 space-y-1">
              {currentTour.includes.map((inc, i) => <li key={i}>• {inc}</li>)}
            </ul>

            <div className="border-t pt-6 mb-12">
              <p className="text-sm font-bold text-gray-900 mb-1">Harga Total (Per Pax + Mobil)</p>
              <p className="text-3xl font-bold text-[#0B7A3E]">Rp {formatPrice(totalPrice)}</p>
            </div>
          </div>

          {/* KOLOM KANAN (FORM KONFIGURASI) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Konfigurasi Perjalanan</h3>

              <div className="space-y-4">
                
                {/* FIXED TANGGAL BARU (ANTI BLANK & SINGLE CLICK) */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Tanggal Tour</label>
                  <div className="relative w-full">
                    <input 
                      type="date" 
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="border border-gray-300 rounded-md p-2.5 text-sm w-full focus:outline-none focus:border-[#0B7A3E] min-h-[44px] bg-white text-gray-700" 
                    />
                    {!tourDate && (
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none bg-white pr-4">
                        mm/dd/yyyy
                      </span>
                    )}
                  </div>
                </div>
                
                {/* KENDARAAN */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Pilih Kendaraan</label>
                  <div className="relative w-full">
                    <select value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)} className="ios-fix-select border border-gray-300 rounded-md p-2.5 pr-10 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E] min-h-[44px]">
                      <option value="">-- Tanpa Kendaraan Tambahan --</option>
                      <optgroup label="Seri Regular">{carsData.filter(car => car.category === 'regular').map(car => <option key={car.id} value={car.name}>{car.name}</option>)}</optgroup>
                      <optgroup label="Seri Bisnis">{carsData.filter(car => car.category === 'bisnis').map(car => <option key={car.id} value={car.name}>{car.name}</option>)}</optgroup>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* DRIVER */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Pilih Driver</label>
                  <div className="relative w-full">
                    <select value={selectedDriver} onChange={(e) => setSelectedDriver(e.target.value)} className="ios-fix-select border border-gray-300 rounded-md p-2.5 pr-10 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E] min-h-[44px]">
                      <option value="">-- Tanpa Driver Khusus --</option>
                      {driverData.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* DROPDOWN DINAMIS ITINERARY */}
                {currentTour.itinerary.map((item, index) => {
                  if (item.options) {
                    return (
                      <div key={index} className="flex flex-col">
                        <label className="text-[11px] font-bold text-gray-700 mb-1">Pilihan {item.day}</label>
                        <div className="relative w-full">
                          <select 
                            value={daySelections[index] || ''} 
                            onChange={(e) => handleDayChange(index, e.target.value)} 
                            className="ios-fix-select border border-gray-300 rounded-md p-2.5 pr-10 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E] min-h-[44px]"
                          >
                            {Object.keys(item.options).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                            <ChevronDown size={14} />
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null;
                })}

                {/* HOTEL */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Penginapan</label>
                  <div className="relative w-full">
                    <select value={selectedHotel} onChange={(e) => setSelectedHotel(e.target.value)} className="ios-fix-select border border-gray-300 rounded-md p-2.5 pr-10 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E] min-h-[44px]">
                      {Object.keys(currentTour.pricing).map(hotel => <option key={hotel} value={hotel}>{hotel}</option>)}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* PAX */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Jumlah Orang</label>
                  <div className="relative w-full">
                    <select value={selectedPax} onChange={(e) => setSelectedPax(e.target.value)} className="ios-fix-select border border-gray-300 rounded-md p-2.5 pr-10 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E] min-h-[44px]">
                      {currentTour.paxOptions.map(pax => <option key={pax} value={pax}>{pax}</option>)}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* TOMBOL EMAS KERANJANG */}
              <button 
                onClick={() => {
                  if(!tourDate) { alert('Mohon pilih tanggal tour terlebih dahulu!'); return; }
                  addToCart({
                    name: currentTour.title,
                    img: currentTour.image,
                    price: totalPrice,
                    tanggal: tourDate,
                    kendaraan: selectedCar || 'Tanpa Kendaraan Tambahan',
                    driver: selectedDriver || 'Tim Harta Trans'
                  });
                }}
                className="w-full bg-[#F59E0B] text-white font-bold py-3.5 rounded-md mt-6 shadow-md hover:bg-amber-600 transition flex items-center justify-center gap-2 text-sm"
              >
                 <ShoppingCart size={18} /> Masukkan ke Keranjang Tour
              </button>
            </div>
          </div>
        </div>

        {/* REVIEW SECTIONS */}
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
            <p className="text-center text-gray-500 bg-gray-50 py-10 rounded-xl border border-dashed">Belum ada ulasan untuk tour ini.</p>
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