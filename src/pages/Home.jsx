import React, { useState, useEffect } from 'react';
import { Clock, CarFront, Contact, Star } from 'lucide-react';
import { initialReviewsData } from '../data/dataReview';

// Import Komponen & Data
import CarCard from '../components/CarCard';
import { carsData } from '../data/carsData'; 
import MotorCard from '../components/MotorCard';
import { motorsData } from '../data/dataMotor';
import imgBannerTour from '../assets/TripLombokTermurah.png'; 
// Import Gambar Hero & Sponsor
import heroImg from '../assets/hero.webp'; 
import sponsor1 from '../assets/sponsor1.webp';
import sponsor2 from '../assets/sponsor2.webp';
import sponsor3 from '../assets/sponsor3.webp';
import sponsor4 from '../assets/sponsor4.webp';
import sponsor5 from '../assets/sponsor5.webp';
import sponsor6 from '../assets/sponsor6.webp';

export default function Home({ navigateTo }) {
  
  // --- TAMBAHKAN KODE INI ---
  const [homeReviews, setHomeReviews] = useState([]);

  useEffect(() => {
    const savedReviews = localStorage.getItem('hartaTransReviews');
    if (savedReviews) {
      setHomeReviews(JSON.parse(savedReviews));
    } else {
      setHomeReviews(initialReviewsData);
    }
  }, []);
  // Ambil maksimal 4 mobil untuk ditampilkan di halaman depan
  const regularCars = carsData.filter(car => car.category === 'regular').slice(0, 4);
  const bisnisCars = carsData.filter(car => car.category === 'bisnis').slice(0, 4);
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* 2. HERO SECTION */}
      <section className="pt-8 md:pt-14 pb-6 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-[1400px]">
          <div className="flex flex-col justify-center text-left lg:pr-6">
            <p className="text-[#F59E0B] font-bold text-[10px] md:text-xs tracking-[0.15em] mb-3 uppercase">
              Eksklusivitas & Kenyamanan
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4 text-[#0B7A3E] font-serif">
              Jelajahi Keindahan Dengan <br className="hidden md:block" />
              <span className="text-[#F59E0B] italic font-serif">Harta Trans</span>
            </h1>
            <p className="text-sm md:text-base text-[#0B7A3E] mb-8 font-medium max-w-lg">
              Sewa mobil Lombok di Harta Trans Indonesia murah, mewah dan lengkap
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button onClick={() => navigateTo('sewa')} className="bg-[#F59E0B] text-white px-6 md:px-8 py-3 rounded-lg text-sm font-bold hover:bg-amber-600 transition shadow-sm w-full sm:w-auto">
                PILIH KENDARAAN
              </button>
              <button onClick={() => navigateTo('tour')} className="bg-white border-2 border-[#F59E0B] text-[#F59E0B] px-6 md:px-8 py-3 rounded-lg text-sm font-bold hover:bg-orange-50 transition w-full sm:w-auto">
                LIHAT PAKET TOUR
              </button>
            </div>
          </div>
          <div className="w-full h-[250px] sm:h-[350px] lg:h-[450px] rounded-2xl md:rounded-[2rem] shadow-xl overflow-hidden relative">
             <img src={heroImg} alt="Armada Harta Trans" className="absolute inset-0 w-full h-[112%] object-cover object-center -translate-y-[2%]" />
          </div>
        </div>
      </section>

      {/* 3. LOGO SPONSOR */}
      <section className="py-8 md:py-12">
        <div className="container px-4 sm:px-6 lg:px-12 mx-auto max-w-[1400px]">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 px-4">
            <img src={sponsor1} alt="Sponsor" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor2} alt="Sponsor" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor3} alt="Sponsor" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor4} alt="Sponsor" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor5} alt="Sponsor" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor6} alt="Sponsor" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
          </div>
        </div>
      </section>

      {/* 4. TRUST INDICATORS */}
      <section className="relative w-full mt-4 md:mt-8 mb-20">
        <div className="relative w-full h-[140px] md:h-[180px]">
          <div className="absolute top-[30%] md:top-[35%] bottom-0 left-[20%] right-0 bg-[#A3C7B0] rounded-l-[2rem] md:rounded-l-[3.5rem] z-0"></div>
          <div className="absolute top-0 bottom-[15%] left-0 w-[90%] md:w-[75%] bg-[#0B7A3E] rounded-r-[2rem] md:rounded-r-[4rem] shadow-lg z-10 flex items-center">
             <div className="w-full flex justify-center md:justify-start md:pl-[10%]">
               <div className="grid grid-cols-3 w-full max-w-3xl gap-4 md:gap-10 px-4 md:px-0">
                  <div className="flex flex-col items-center text-center">
                    <CarFront className="text-[#F59E0B] mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="font-bold text-white text-base md:text-2xl mb-1">50+</h3>
                    <p className="text-white text-[9px] md:text-sm leading-tight">Pilihan Armada<br/>Lengkap</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Contact className="text-[#F59E0B] mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="font-bold text-white text-base md:text-2xl mb-1">100%</h3>
                    <p className="text-white text-[9px] md:text-sm leading-tight">Driver Tersertifikasi</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Clock className="text-[#F59E0B] mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="font-bold text-white text-base md:text-2xl mb-1">24/7</h3>
                    <p className="text-white text-[9px] md:text-sm leading-tight">Layanan dan<br/>Transaksi Aman</p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. SEWA MOBIL SERI REGULAR */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
          <div className="mb-10 pl-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sewa Mobil Seri Regular</h2>
            <div className="w-24 md:w-32 h-1.5 bg-[#0B7A3E]"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {regularCars.map((car) => (
              <CarCard key={car.id} car={car} navigateTo={navigateTo} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => navigateTo('sewa')} className="bg-[#F59E0B] text-white px-8 py-3 rounded-md font-bold hover:bg-amber-600 transition shadow-md text-sm tracking-wide">
              PILIHAN LAINNYA
            </button>
          </div>
        </div>
      </section>

      {/* 6. SEWA MOBIL SERI BISNIS */}
      <section className="py-12 bg-white mb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
          <div className="mb-10 pl-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sewa Mobil Seri Bisnis</h2>
            <div className="w-24 md:w-32 h-1.5 bg-[#0B7A3E]"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {bisnisCars.map((car) => (
              <CarCard key={car.id} car={car} navigateTo={navigateTo} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => navigateTo('sewa')} className="bg-[#F59E0B] text-white px-8 py-3 rounded-md font-bold hover:bg-amber-600 transition shadow-md text-sm tracking-wide">
              PILIHAN LAINNYA
            </button>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 7. SEWA MOTOR */}
      {/* ========================================= */}
      <section className="py-8 bg-white mb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
          
          <div className="mb-10 pl-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sewa Motor</h2>
            <div className="w-24 md:w-32 h-1.5 bg-[#0B7A3E]"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Ambil 4 motor pertama untuk di Home */}
            {motorsData.slice(0, 4).map((motor) => (
              <MotorCard key={motor.id} motor={motor} navigateTo={navigateTo} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => navigateTo('sewa')} className="bg-[#F59E0B] text-white px-8 py-3 rounded-md font-bold hover:bg-amber-600 transition shadow-md text-sm tracking-wide">
              PILIHAN LAINNYA
            </button>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 8. BANNER TOUR LOMBOK */}
      {/* ========================================= */}
      <section className="relative w-full overflow-hidden flex flex-col md:flex-row bg-[#0B7A3E] cursor-pointer group" onClick={() => navigateTo('tour')}>
        
        {/* Mobile Display Image */}
        <div className="w-full h-[250px] md:hidden relative z-0">
           <img src={imgBannerTour} alt="Banner Tour" className="w-full h-full object-cover" />
        </div>

        {/* Desktop Left Content Image */}
        <div className="hidden md:flex absolute top-0 bottom-0 left-0 w-[55%] z-0">
           <img src={imgBannerTour} alt="Banner Tour" className="w-full h-full object-cover object-left" />
        </div>

        {/* Desktop Green Diagonal Overlay */}
        {/* Langsung pasang bg hijau, miringkan, dan beri border tanpa bungkus overflow */}
        <div className="hidden md:block absolute -top-10 -bottom-10 left-[48%] w-[60%] bg-[#0B7A3E] z-10 transform -skew-x-[12deg] border-l-[6px] border-white"></div>

        {/* Right Content (Text & CTA) */}
        {/* Tambah 'relative' agar z-20 berfungsi sempurna menumpuk di atas hijau */}
        <div className="relative w-full md:w-[50%] flex flex-col justify-center text-center md:text-right py-14 px-6 md:pr-10 lg:pr-16 z-20 md:ml-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#F59E0B] mb-6 leading-tight font-serif">
            Paket Tour Lombok <br/> Trip Harian
          </h2>
          
          <p className="text-white text-sm md:text-base lg:text-[17px] max-w-xl mx-auto md:ml-auto md:mr-0 mb-8 leading-relaxed">
            Trip Harian Lombok istimewa bersama kami, menjelajah pulau lombok yang idah dan eksotis dengan alam <span className="underline underline-offset-4 decoration-1">pantai</span>, <span className="underline underline-offset-4 decoration-1">gunung</span>, <span className="underline underline-offset-4 decoration-1">air terjun</span> dan banyak lagi, saatnya liburan di Indonesia aja, gak kalah cantik. Liburan bersama kami anda akan mendapatkan transportasi dan BBm gratis selama trip anda.
          </p>
          
          <button className="bg-[#F59E0B] text-white px-8 py-4 rounded-md font-bold group-hover:bg-amber-600 transition shadow-lg text-xs md:text-[15px] self-center md:self-end tracking-wide">
            CARI TOUR LOMBOK YANG COCOK BUAT KAMU
          </button>
        </div>
      </section>

      {/* ========================================= */}
      {/* 9. TEKS PENUTUP */}
      {/* ========================================= */}
      <section className="w-full bg-white pt-16 pb-8">
         <h3 className="text-center text-[#0B7A3E] text-base md:text-xl lg:text-2xl font-normal px-4">
           Jadikan setiap perjalanan anda lebih istimewa selama di Lombok
         </h3>
      </section>
      
      {/* ========================================= */}
      {/* 9. ULASAN PELANGGAN */}
      {/* ========================================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
          <h2 className="text-center text-[#F59E0B] text-xl md:text-2xl font-bold tracking-[0.15em] mb-12 uppercase">
            Ulasan Pelanggan
          </h2>

          {/* Grid Review Dinamis (Menampilkan maksimal 4 review terbaru) */}
          {/* Grid Review Dinamis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeReviews.slice(0, 4).map((review) => ( // <-- GANTI DI SINI
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col">
                <h4 className="font-bold text-gray-900 text-[17px]">{review.name}</h4>
                <p className="text-xs text-gray-400 mb-4">{review.date}</p>
                
                <div className="flex gap-1 mb-4">
                  {/* Looping bintang sesuai rating */}
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-200 fill-gray-200"} 
                    />
                  ))}
                </div>
                
                <p className="text-[15px] text-gray-700 leading-relaxed italic line-clamp-4">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#F59E0B] text-white px-8 py-3.5 rounded-md font-bold hover:bg-amber-600 transition shadow-md text-[14px] tracking-wide">
              TULIS REVIEW
            </button>
          </div>
        </div>
      </section>
      
      
    </div>
    
  );
}