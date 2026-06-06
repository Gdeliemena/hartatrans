import imgSasak from '../assets/tours/sasak-trip.webp';
import imgGiliTrawangan from '../assets/tours/gili-trawangan.webp';
import imgGiliNanggu from '../assets/tours/gili-nanggu.webp';
import imgGiliKondo from '../assets/tours/gili-kondo.webp';
import imgPinkBeach from '../assets/tours/pink-beach.webp';
import imgWaterfall from '../assets/tours/waterfall-trip.webp';
import imgSembalun from '../assets/tours/sembalun-trip.webp';
import imgWatersport from '../assets/tours/watersport-jetski.webp';
import imgTrail from '../assets/tours/trail-adventure.webp';
import imgScuba from '../assets/tours/scuba-diving.webp';
import imgBike from '../assets/tours/bike-trip.webp';

// Standar Add-ons untuk mayoritas trip
const standardAddons = [
  { id: 'a1', name: 'Poto Kamera DSLR/Mirrorless', price: 500000 },
  { id: 'a2', name: 'Poto & Video Drone (file only)', price: 500000 }
];

export const tripHarianDetails = {
  'th1': {
    id: 'th1', title: 'Sasak Trip', image: imgSasak,
    description: 'Eksplorasi mendalam wisata Lombok mulai dari pantai hingga pegunungan Rinjani (Area kaki gunung).',
    itinerary: ['Penjemputan di Hotel oleh tim Harta Trans', 'Kampung Tenun Sukarara', 'Desa Adat Sade', 'Pantai Kuta Mandalika', 'Bukit Merese & Pantai Tanjung Aan (Pilihan 1)', 'Pantai Mawun & Pantai Selong Belanak (Pilihan 2)', 'Kembali ke Hotel'],
    includes: ['Mobil + BBM', 'Driver (guide)', 'Tiket masuk wisata & Parkir', 'Air Mineral', 'Dokumentasi HP'],
    excludes: ['Kebutuhan pribadi', 'Makan Siang', 'Tip Guide'],
    packageLabel: 'Jumlah Penumpang',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang', '7-8 orang', '9-10 orang'],
    pricing: { '1 orang': 750000, '2 orang': 400000, '3-4 orang': 325000, '5-6 orang': 250000, '7-8 orang': 200000, '9-10 orang': 175000 },
    addons: standardAddons
  },
  'th2': {
    id: 'th2', title: 'Gili Trawangan', image: imgGiliTrawangan,
    description: 'Menikmati pesona 3 Gili eksotis di Lombok Utara dengan aktivitas snorkeling yang tak terlupakan.',
    itinerary: ['Penjemputan di Hotel', 'Villa Hantu', 'Bukit Malimbu', 'Bukit Malaka', 'Pelabuhan', 'Snorkling (Gili Air, Meno, dan Trawangan)', 'Gili Trawangan (Free Activity)', 'Kembali ke hotel'],
    includes: ['Mobil + BBM', 'Sopir + Guide', 'Handuk', 'Glassbottom boat private ke 3 Gili', 'Tiket masuk & Parkir', 'Alat Snorkling', 'Air Mineral', 'Dokumentasi Gopro Underwater & HP'],
    excludes: ['Kebutuhan Pribadi', 'Makan Siang', 'Sepeda dan Andong', 'Tip Guide'],
    packageLabel: 'Jumlah Penumpang',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang', '7-8 orang', '9-10 orang'],
    pricing: { '1 orang': 1650000, '2 orang': 825000, '3-4 orang': 625000, '5-6 orang': 425000, '7-8 orang': 325000, '9-10 orang': 275000 },
    addons: standardAddons
  },
  'th3': {
    id: 'th3', title: 'Gili Nanggu', image: imgGiliNanggu,
    description: 'Berenang bersama ribuan ikan jinak di Gili Nanggu, dilanjutkan santai di Gili Sudak dan Gili Kedis.',
    itinerary: ['Penjemputan di Hotel', 'Pelabuhan tawun', 'Gili nanggu (Snorkling)', 'Gili Sudak', 'Gili Kedis', 'Kembali ke hotel'],
    includes: ['Mobil + BBM', 'Sopir + Guide', 'Handuk', 'Boat private ke 3 Gili', 'Tiket masuk & Parkir', 'Alat Snorkling', 'Air Mineral', 'Dokumentasi Gopro Underwater & HP'],
    excludes: ['Kebutuhan Pribadi', 'Makan Siang', 'Tip Guide'],
    packageLabel: 'Jumlah Penumpang',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang', '7-8 orang', '9-10 orang'],
    pricing: { '1 orang': 1400000, '2 orang': 725000, '3-4 orang': 525000, '5-6 orang': 350000, '7-8 orang': 275000, '9-10 orang': 225000 },
    addons: standardAddons
  },
  'th4': {
    id: 'th4', title: 'Gili Kondo', image: imgGiliKondo,
    description: 'Jelajahi surga tersembunyi di Lombok Timur, hamparan pasir putih dan keindahan bawah laut Gili Kondo.',
    itinerary: ['Penjemputan di Hotel', 'Pelabuhan', 'Mangrove Gili Petagan', 'Snorkling Gili Bidara', 'Pulau Pasir Gili Kapal', 'Gili Kondo', 'Kembali ke Pelabuhan', 'Kembali ke hotel'],
    includes: ['Mobil + BBM', 'Sopir + Guide', 'Handuk', 'Boat private ke semua gili', 'Tiket masuk & Parkir', 'Alat Snorkling', 'Air Mineral', 'Dokumentasi Gopro Underwater & HP'],
    excludes: ['Kebutuhan Pribadi', 'Makan siang', 'Tip Guide'],
    packageLabel: 'Jumlah Penumpang',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang', '7-8 orang', '9-10 orang'],
    pricing: { '1 orang': 2250000, '2 orang': 1550000, '3-4 orang': 775000, '5-6 orang': 650000, '7-8 orang': 500000, '9-10 orang': 425000 },
    addons: standardAddons
  },
  'th5': {
    id: 'th5', title: 'Pink Beach', image: imgPinkBeach,
    description: 'Pesona unik hamparan pasir berwarna merah muda dan keindahan gugusan pulau-pulau kecil sekitarnya.',
    itinerary: ['Penjemputan di Hotel', 'Pelabuhan Tanjung Luar', 'Pantai Pink 3', 'Snorkling Gili Petelu', 'Pantai Pink 1', 'Bukit Tangsi', 'Pulau Pasir', 'Kembali ke hotel'],
    includes: ['Mobil + BBM', 'Sopir + Guide', 'Handuk', 'Boat private', 'Tiket masuk & Parkir', 'Alat Snorkling', 'Air Mineral', 'Dokumentasi Gopro Underwater & HP'],
    excludes: ['Kebutuhan pribadi', 'Makan siang', 'Tip guide'],
    packageLabel: 'Jumlah Penumpang',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang', '7-8 orang', '9-10 orang'],
    pricing: { '1 orang': 1700000, '2 orang': 950000, '3-4 orang': 650000, '5-6 option': 500000, '7-8 orang': 450000, '9-10 orang': 300000 },
    addons: standardAddons
  },
  'th6': {
    id: 'th6', title: 'Waterfall Trip', image: imgWaterfall,
    description: 'Menembus sejuknya udara pegunungan Rinjani menuju dua air terjun megah di utara Lombok.',
    itinerary: ['Penjemputan di Hotel', 'Air Terjun Sendang Gile', 'Air Terjun Tiu Kelep', 'Kembali ke Hotel'],
    includes: ['Mobil + BBM', 'Driver (guide)', 'Tiket masuk wisata & Parkir', 'Air Mineral', 'Dokumentasi HP'],
    excludes: ['Kebutuhan pribadi', 'Makan siang', 'Tip guide'],
    packageLabel: 'Jumlah Penumpang',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang', '7-8 orang', '9-10 orang'],
    pricing: { '1 orang': 1400000, '2 orang': 725000, '3-4 orang': 525000, '5-6 orang': 350000, '7-8 orang': 275000, '9-10 orang': 225000 },
    addons: standardAddons
  },
  'th7': {
    id: 'th7', title: 'Sembalun Trip', image: imgSembalun,
    description: 'Sensasi udara dingin khas pegunungan dan panorama agrowisata yang memanjakan mata di lembah Rinjani.',
    itinerary: ['Penjemputan di Hotel', 'Puncak Sembalun', 'Kebun Strawberry', 'Taman Bunga', 'Kedai Sawah', 'Bukit Selong', 'Kembali ke Hotel'],
    includes: ['Mobil + BBM', 'Driver (guide)', 'Tiket masuk wisata & Parkir', 'Air Mineral', 'Dokumentasi HP'],
    excludes: ['Kebutuhan pribadi', 'Makan siang', 'Tip guide'],
    packageLabel: 'Jumlah Penumpang',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang', '7-8 orang', '9-10 orang'],
    pricing: { '1 orang': 1250000, '2 orang': 500000, '3-4 orang': 350000, '5-6 orang': 300000, '7-8 orang': 250000, '9-10 orang': 200000 },
    addons: standardAddons
  },
  'th8': {
    id: 'th8', title: 'Watersport Jetski', image: imgWatersport,
    description: 'Pacu adrenalinmu dengan deru mesin Jetski dan serunya wahana air di lepas pantai Senggigi.',
    itinerary: ['Bertemu di Lokasi (Pantai Senggigi)', 'Briefing Keselamatan', 'Mulai Aktivitas Watersport', 'Selesai'],
    includes: ['Wahana (Jetski / Banana / Donut)', 'Instructor', 'Life Jacket'],
    excludes: ['Transportasi ke Lokasi', 'Kebutuhan Pribadi', 'Makan'],
    packageLabel: 'Pilihan Paket Watersport',
    options: ['Jetski 15 Menit', 'Jetski 30 Menit', 'Jetski 1 Jam', '1 Day Jetski Sekotong', 'Banana Boat 15 Menit', 'Banana Boat 30 Menit', 'Donut Boat 15 Menit', 'Donut Boat 30 Menit'],
    pricing: { 
      'Jetski 15 Menit': 500000, 'Jetski 30 Menit': 900000, 'Jetski 1 Jam': 1600000, '1 Day Jetski Sekotong': 6500000,
      'Banana Boat 15 Menit': 750000, 'Banana Boat 30 Menit': 1200000,
      'Donut Boat 15 Menit': 750000, 'Donut Boat 30 Menit': 1200000
    },
    addons: []
  },
  'th9': {
    id: 'th9', title: 'Trail Adventure', image: imgTrail,
    description: 'Jelajah bebas rintangan alam Lombok menggunakan motor trail menembus hutan, sungai, dan perbukitan.',
    itinerary: ['Meeting Point di Basecamp Trail', 'Briefing & Persiapan Gear', 'Mulai Trabas Jalur', 'Istirahat di Checkpoint', 'Kembali ke Basecamp'],
    includes: ['Motor Trail (KLX 150/CRF 150)', 'Helm & Boots', 'BBM 1 Liter', 'Jersey', 'Leader jalur', 'Air Mineral'],
    excludes: ['Kebutuhan Pribadi', 'Makan Siang'],
    packageLabel: 'Pilihan Track',
    options: ['Fun Track (6-8 Jam)', 'Standart Track (8-10 jam)', 'Extreme Track (8-12 Jam)'],
    pricing: { 'Fun Track (6-8 Jam)': 700000, 'Standart Track (8-10 jam)': 800000, 'Extreme Track (8-12 Jam)': 900000 },
    addons: standardAddons
  },
  'th11': {
    id: 'th11', title: 'Scuba Diving', image: imgScuba,
    description: 'Menyelam dan nikmati keindahan taman laut Lombok bersama instruktur berpengalaman.',
    itinerary: ['Penjemputan di Hotel', 'Briefing di Blue Marine Dive', 'Season Kolam / Penyeberangan', 'Diving Session', 'Selesai'],
    includes: ['Boat', 'Alat Diving', 'Instructor Diving', 'Tiket Masuk & Parkir', 'Guide', 'Air Mineral', 'Dokumentasi (Gopro)'],
    excludes: ['Kebutuhan Pribadi', 'Makan Siang'],
    packageLabel: 'Jumlah Penyelam (Discover / Fun Dive)',
    options: ['1 orang', '2 orang', '3 orang', '4 orang', '5 orang'],
    pricing: { '1 orang': 1450000, '2 orang': 1300000, '3 orang': 1200000, '4 orang': 1100000, '5 orang': 1000000 },
    addons: []
  },
  'th10': {
    id: 'th10', title: 'Lombok Bike Trip', image: imgBike,
    description: 'Menyatu dengan alam, menyusuri jalanan pedesaan Lombok yang asri dan hijau dengan bersepeda santai.',
    itinerary: ['Penjemputan di Hotel', 'Start Point (Lingsar/Sesaot)', 'Menyusuri Area Persawahan & Pura', 'Istirahat Kopi/Teh', 'Finish Point & Kembali ke Hotel'],
    includes: ['Sepeda Gunung (MTB)', 'Helm & Safety Gear', 'Guide Bersepeda', 'Air Mineral & Snack', 'Mobil Support'],
    excludes: ['Keperluan Pribadi', 'Tips Guide'],
    packageLabel: 'Jumlah Peserta',
    options: ['1 orang', '2 orang', '3-4 orang', '5-6 orang'],
    pricing: { '1 orang': 650000, '2 orang': 450000, '3-4 orang': 350000, '5-6 orang': 300000 },
    addons: standardAddons
  }
};