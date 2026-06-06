  // Import semua gambar di bagian atas
  // Pastikan nama file sesuai dengan yang kamu simpan di folder assets/cars/
  import imgBrio from '../assets/cars/honda-brio.webp';
  import imgAgya from '../assets/cars/toyota-agya.webp';
  import imgPickUp from '../assets/cars/pick-up.webp';
  import imgGranmax from '../assets/cars/granmax.webp';
  import imgYaris from '../assets/cars/all-new-yaris.webp';
  import imgXl7 from '../assets/cars/suzuki-xl7.webp';
  import imgAvanza from '../assets/cars/new-avanza.webp';
  import imgRaize from '../assets/cars/toyota-raize.webp';
  import imgInnovaReborn from '../assets/cars/innova-reborn.webp';
  import imgVeloz from '../assets/cars/new-veloz.webp';
  import imgExpander from '../assets/cars/mitsubishi-expander.webp';
  import imgJazz from '../assets/cars/honda-jazz.webp';
  import imgTerios from '../assets/cars/new-terios.webp';
  import imgRush from '../assets/cars/new-rush.webp';
  import imgZenix from '../assets/cars/innova-zenix.webp';
  import imgFortuner from '../assets/cars/toyota-fortuner.webp';
  import imgPajero from '../assets/cars/pajero-sport.webp';
  import imgAlphard from '../assets/cars/toyota-alphard.webp';
  import imgCommuter from '../assets/cars/hiace-commuter.webp';
  import imgPremio from '../assets/cars/hiace-premio.webp';
  import imgMediumBus from '../assets/cars/medium-bus.webp';
  import imgBigBus from '../assets/cars/big-bus.webp';

  // Array Data Mobil
  export const carsData = [
  // --- KATEGORI REGULAR ---
  { id: 'c1', category: 'regular', name: 'Honda Brio', img: imgBrio, transmission: 'Automatic/Manual', seats: 5, lepasKunci: 350000, bbmDriver: 600000 },
  { id: 'c2', category: 'regular', name: 'Toyota Agya', img: imgAgya, transmission: 'Automatic/Manual', seats: 5, lepasKunci: 325000, bbmDriver: 600000 },
  { id: 'c3', category: 'regular', name: 'Pick Up', img: imgPickUp, transmission: 'Manual', seats: 2, lepasKunci: 300000, bbmDriver: 600000 },
  { id: 'c4', category: 'regular', name: 'Granmax', img: imgGranmax, transmission: 'Manual', seats: 8, lepasKunci: 300000, bbmDriver: 600000 },
  { id: 'c5', category: 'regular', name: 'All New Yaris', img: imgYaris, transmission: 'Automatic', seats: 5, lepasKunci: 370000, bbmDriver: 600000 },
  { id: 'c6', category: 'regular', name: 'Suzuki XL-7', img: imgXl7, transmission: 'Automatic/Manual', seats: 7, lepasKunci: 450000, bbmDriver: 600000 },
  { id: 'c7', category: 'regular', name: 'New Avanza', img: imgAvanza, transmission: 'Automatic/Manual', seats: 7, lepasKunci: 350000, bbmDriver: 750000 },
  { id: 'c8', category: 'regular', name: 'Toyota Raize', img: imgRaize, transmission: 'Automatic/Manual', seats: 5, lepasKunci: 450000, bbmDriver: 750000 },
  { id: 'c9', category: 'regular', name: 'New Veloz', img: imgVeloz, transmission: 'Automatic/Manual', seats: 7, lepasKunci: 350000, bbmDriver: 850000 },
  { id: 'c10', category: 'regular', name: 'Mitsubishi Expander', img: imgExpander, transmission: 'Automatic/Manual', seats: 7, lepasKunci: 450000, bbmDriver: 750000 },
  { id: 'c11', category: 'regular', name: 'Honda Jazz', img: imgJazz, transmission: 'Automatic/Manual', seats: 5, lepasKunci: 400000, bbmDriver: 600000 },
  { id: 'c12', category: 'regular', name: 'New Terios', img: imgTerios, transmission: 'Automatic/Manual', seats: 7, lepasKunci: 450000, bbmDriver: 800000 },
  { id: 'c13', category: 'regular', name: 'New Rush', img: imgRush, transmission: 'Automatic/Manual', seats: 7, lepasKunci: 450000, bbmDriver: 800000 },

  // --- KATEGORI BISNIS / PREMIUM / ROMBONGAN ---
  { id: 'c14', category: 'bisnis', name: 'Innova Reborn', img: imgInnovaReborn, transmission: 'Automatic/Manual', seats: 7, lepasKunci: 500000, bbmDriver: 950000 },
  { id: 'c15', category: 'bisnis', name: 'Toyota Innova Zenix', img: imgZenix, transmission: 'Automatic', seats: 7, lepasKunci: 800000, bbmDriver: 1300000 },
  { id: 'c16', category: 'bisnis', name: 'Toyota Fortuner', img: imgFortuner, transmission: 'Automatic', seats: 7, lepasKunci: 1200000, bbmDriver: 1700000 },
  { id: 'c17', category: 'bisnis', name: 'Pajero Sport', img: imgPajero, transmission: 'Automatic', seats: 7, lepasKunci: 1200000, bbmDriver: 1700000 },
  { id: 'c18', category: 'bisnis', name: 'Toyota Alphard', img: imgAlphard, transmission: 'Automatic', seats: 7, lepasKunci: 'Unavailable', bbmDriver: 3500000 },
  { id: 'c19', category: 'bisnis', name: 'Hiace Commuter', img: imgCommuter, transmission: 'Manual', seats: 15, lepasKunci: 1200000, bbmDriver: 1700000 },
  { id: 'c20', category: 'bisnis', name: 'Hiace Premio', img: imgPremio, transmission: 'Manual', seats: 12, lepasKunci: 'Unavailable', bbmDriver: 2300000 },
  { id: 'c21', category: 'bisnis', name: 'Medium Bus', img: imgMediumBus, transmission: 'Manual', seats: 31, lepasKunci: 'Unavailable', bbmDriver: 1700000 },
  { id: 'c22', category: 'bisnis', name: 'Big Bus', img: imgBigBus, transmission: 'Manual', seats: 50, lepasKunci: 'Unavailable', bbmDriver: 3000000 },
];