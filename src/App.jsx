import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Footer from './components/Footer';
import TourDetail from './pages/TourDetail';
import TripHarianDetail from './pages/TripHarianDetail';
import Sewa from './pages/Sewa';
import SewaDetail from './pages/SewaDetail';
import Driver from './pages/Driver';
import DriverDetail from './pages/DriverDetail';
import Keranjang from './pages/Keranjang'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedId, setSelectedId] = useState('');
  
  // State Keranjang dengan LocalStorage Aman (Anti-Crash)
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('hartaTransCart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Gagal membaca keranjang:", error);
      return [];
    }
  });

  // Simpan ke LocalStorage tiap kali cart berubah
  useEffect(() => {
    localStorage.setItem('hartaTransCart', JSON.stringify(cart));
  }, [cart]);

  // Fungsi Tambah Item
  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now() }]);
    alert('Berhasil ditambahkan ke keranjang!');
  };

  // Fungsi Hapus Item
  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const navigateTo = (page, paramId = '') => {
    setCurrentPage(page);
    if(paramId) setSelectedId(paramId); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 bg-white relative">
      
      <Navbar currentPage={currentPage} navigateTo={navigateTo} cartLength={cart.length} />

      <main className="w-full">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'tour' && <Tour navigateTo={navigateTo} />}
        
        {/* Pass addToCart ke semua halaman Detail */}
        {currentPage === 'tourDetail' && <TourDetail navigateTo={navigateTo} tourId={selectedId} addToCart={addToCart} />}
        {currentPage === 'tripHarianDetail' && <TripHarianDetail navigateTo={navigateTo} tourId={selectedId} addToCart={addToCart} />}
        {currentPage === 'sewa' && <Sewa navigateTo={navigateTo} />}
        {currentPage === 'sewaDetail' && <SewaDetail navigateTo={navigateTo} itemId={selectedId} addToCart={addToCart} />}
        
        {/* Rute Driver */}
        {currentPage === 'driver' && <Driver navigateTo={navigateTo} />}
        {currentPage === 'driverDetail' && <DriverDetail navigateTo={navigateTo} itemId={selectedId} />}
        
        {/* Rute Keranjang */}
        {currentPage === 'keranjang' && <Keranjang navigateTo={navigateTo} cart={cart} removeFromCart={removeFromCart} />}
        
        {/* Proteksi Halaman Belum Dirakit */}
        {currentPage !== 'home' && currentPage !== 'tour' && currentPage !== 'tourDetail' && currentPage !== 'tripHarianDetail' && currentPage !== 'sewa' && currentPage !== 'sewaDetail' && currentPage !== 'driver' && currentPage !== 'driverDetail' && currentPage !== 'keranjang' && (
          <div className="flex flex-col items-center justify-center pt-32 pb-32 px-4 text-center min-h-[70vh]">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Halaman <span className="uppercase text-[#0B7A3E]">{currentPage}</span> belum dirakit! 🚧</h2>
            <button onClick={() => navigateTo('home')} className="bg-[#0B7A3E] text-white px-6 py-2.5 rounded-full font-bold shadow-md">Kembali ke Beranda</button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}