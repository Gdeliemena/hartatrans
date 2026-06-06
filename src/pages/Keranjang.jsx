import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';

export default function Keranjang({ navigateTo, cart = [], removeFromCart }) {
  
  // Format mata uang Rupiah
  const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);

  // Hitung total belanjaan secara otomatis dari array cart
  const totalPesananPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const biayaLayanan = 0; // Sesuai figma: "Gratis"
  const totalBayar = totalPesananPrice + biayaLayanan;

  // Fungsi otomatis untuk menyusun teks invoice rapi ke WhatsApp Admin
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let textMessage = `Halo Harta Trans Indonesia, saya ingin memesan layanan berikut:\n\n`;
    
    cart.forEach((item, index) => {
      textMessage += `${index + 1}. *${item.name}*\n`;
      textMessage += `   - Tanggal: ${item.tanggal}\n`;
      if (item.kendaraan) textMessage += `   - Kendaraan: ${item.kendaraan}\n`;
      if (item.driver) textMessage += `   - Driver: ${item.driver}\n`;
      textMessage += `   - Harga: Rp ${formatPrice(item.price)}\n\n`;
    });

    textMessage += `----------------------------------\n`;
    textMessage += `*Total Pembayaran:* Rp ${formatPrice(totalBayar)}\n\n`;
    textMessage += `Mohon konfirmasi ketersediaan armada dan instruksi pembayaran selanjutnya. Terima kasih!`;

    // Encode teks agar aman dibaca oleh URL WhatsApp
    const urlWA = `https://wa.me/6282339638686?text=${encodeURIComponent(textMessage)}`;
    window.open(urlWA, '_blank');
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1100px]">
        
        {/* JUDUL HALAMAN */}
        <div className="flex items-center gap-3 mb-4">
          <ShoppingCart size={28} className="text-[#0B7A3E]" />
          <h1 className="text-2xl font-bold text-gray-900">Keranjang Pesanan</h1>
        </div>

        {/* GARIS PEMISAH HIJAU KHAS HARTA TRANS */}
        <div className="h-[3px] bg-[#0B7A3E] w-full mb-10"></div>

        {/* LAYOUT UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* KOLOM KIRI: DAFTAR ITEM DI KERANJANG */}
          <div className="lg:col-span-2 space-y-5">
            {cart.length === 0 ? (
              // Tampilan jika keranjang kosong
              <div className="bg-white border border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center shadow-sm min-h-[320px]">
                <ShoppingCart size={48} className="text-gray-300 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-1">Keranjang Kosong</h3>
                <p className="text-sm text-gray-400 mb-8 max-w-sm">
                  Pilih armada atau paket tour untuk memulai perjalanan.
                </p>
                <button 
                  onClick={() => navigateTo('sewa')}
                  className="bg-[#0B7A3E] hover:bg-green-700 text-white font-bold py-3 px-12 rounded-lg transition shadow-sm text-sm w-full max-w-xs"
                >
                  Lihat Sewa Mobil
                </button>
              </div>
            ) : (
              // Tampilan jika keranjang ada isinya (Looping Data Card Sesuai Figma)
              cart.map((item) => (
                <div 
                  key={item.cartId} 
                  className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-5 relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] items-start"
                >
                  {/* FOTO PRODUK (Full Rectangle Lonjong Kebawah Sesuai Gambar) */}
                  <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>

                  {/* DETAIL INFORMASI PRODUK */}
                  <div className="flex flex-col flex-grow pt-1">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">{item.name}</h3>
                    
                    <div className="space-y-1 text-xs md:text-sm text-gray-600 mb-4">
                      <p><span className="font-semibold text-gray-800">Tanggal:</span> {item.tanggal}</p>
                      {item.kendaraan && (
                        <p><span className="font-semibold text-gray-800">Kendaraan:</span> <span className="text-green-700 font-medium">{item.kendaraan}</span></p>
                      )}
                      {item.driver && (
                        <p><span className="font-semibold text-gray-800">Driver:</span> <span className="text-green-700 font-medium">{item.driver}</span></p>
                      )}
                    </div>

                    {/* HARGA ITEM */}
                    <p className="font-bold text-lg text-[#0B7A3E]">
                      Rp. {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* TOMBOL HAPUS (Trash Icon di Pojok Kanan Atas) */}
                  <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="absolute top-5 right-5 text-red-400 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition"
                    title="Hapus Pesanan"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* KOLOM KANAN: RINGKASAN PEMBAYARAN */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Ringkasan Pembayaran</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-400">Total Pesanan</span>
                  <span className="text-gray-900 font-bold">
                    {cart.length === 0 ? '-' : `${cart.length} Item`}
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-gray-400">Biaya Layanan</span>
                  <span className="text-green-600 font-bold">Gratis</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <p className="text-xs text-gray-400 mb-1">Total yang harus dibayar</p>
                  <p className="text-2xl font-bold text-[#0B7A3E]">
                    {cart.length === 0 ? '-' : `Rp. ${formatPrice(totalBayar)}`}
                  </p>
                </div>
              </div>

              {/* TOMBOL CHECKOUT VIA WHATSAPP */}
              <button 
                onClick={handleWhatsAppCheckout}
                disabled={cart.length === 0}
                className={`w-full font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-md mt-8 text-sm ${
                  cart.length === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-[#22C55E] hover:bg-green-600 text-white'
                }`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                </svg>
                Pesan via WhatsApp
              </button>

              <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
                Dengan melanjutkan, Anda akan diarahkan ke WhatsApp Admin untuk mengkonfirmasi ketersediaan dan pembayaran.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}