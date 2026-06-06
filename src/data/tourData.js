// ==========================================
// 1. IMPORT GAMBAR PAKET HEMAT (TRIP LENGKAP)
// Pastikan file tersimpan di folder src/assets/tours/
// ==========================================
import img3D2N from '../assets/tours/3d2n.webp';
import img4D3N from '../assets/tours/4d3n.webp';
import img5D4N from '../assets/tours/5d4n.webp';

// ==========================================
// 2. IMPORT GAMBAR TRIP HARIAN
// ==========================================
import imgSasak from '../assets/tours/sasak-trip.webp';
import imgGiliTrawangan from '../assets/tours/gili-trawangan.webp';
import imgGiliNanggu from '../assets/tours/gili-nanggu.webp';
import imgGiliKondo from '../assets/tours/gili-kondo.webp';
import imgPinkBeach from '../assets/tours/pink-beach.webp';
import imgWaterfall from '../assets/tours/waterfall-trip.webp';
import imgSembalun from '../assets/tours/sembalun-trip.webp';
import imgWatersport from '../assets/tours/watersport-jetski.webp';
import imgTrail from '../assets/tours/trail-adventure.webp';
import imgBike from '../assets/tours/bike-trip.webp';
import imgScuba from '../assets/tours/scuba-diving.webp';

// ==========================================
// DATA PAKET HEMAT
// ==========================================
export const paketHematData = [
  {
    id: 'ph1',
    title: 'Trip Lombok 3D2N',
    duration: '3 Hari 2 Malam',
    price: 1500000,
    img: img3D2N,
  },
  {
    id: 'ph2',
    title: 'Trip Lombok 4D3N',
    duration: '4 Hari 3 Malam',
    price: 2500000,
    img: img4D3N,
  },
  {
    id: 'ph3',
    title: 'Trip Lombok 5D4N',
    duration: '5 Hari 4 Malam',
    price: 3500000,
    img: img5D4N,
  }
];

// ==========================================
// DATA TRIP HARIAN
// ==========================================
export const tripHarianData = [
  { id: 'th1', title: 'Sasak Trip', price: 1500000, img: imgSasak },
  { id: 'th2', title: 'Gili Trawangan', price: 650000, img: imgGiliTrawangan },
  { id: 'th3', title: 'Gili Nanggu', price: 550000, img: imgGiliNanggu },
  { id: 'th4', title: 'Gili Kondo', price: 1500000, img: imgGiliKondo },
  { id: 'th5', title: 'Pink Beach', price: 650000, img: imgPinkBeach },
  { id: 'th6', title: 'Waterfall Trip', price: 550000, img: imgWaterfall },
  // Catatan: Harga di bawah ini adalah harga dummy sementara, silakan disesuaikan!
  { id: 'th7', title: 'Sembalun Trip', price: 650000, img: imgSembalun },
  { id: 'th8', title: 'Watersport Jetski', price: 850000, img: imgWatersport },
  { id: 'th9', title: 'Trail Adventure', price: 950000, img: imgTrail },
  { id: 'th10', title: 'Bike Trip', price: 350000, img: imgBike },
  { id: 'th11', title: 'Scuba Diving', price: 1200000, img: imgScuba }
];