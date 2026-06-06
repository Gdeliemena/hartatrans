import img3D2N from '../assets/tours/3d2n.webp';
import img4D3N from '../assets/tours/4d3n.webp';
import img5D4N from '../assets/tours/5d4n.webp';

const includesList = ['Mobil + Sopir + BBM', 'Hotel', 'Air mineral', 'Private Boat', 'Alat Snorkling', 'Guide', 'Makan Selama Trip', 'Tiket masuk semua wisata', 'Dokumentasi'];
const paxList = ['2-3 PAX', '4-5 PAX', '6-10 PAX', '11-13 PAX', '14-20 PAX', '21-30 PAX', '31-50 PAX'];

export const detailedTours = {
  // ==========================
  // PAKET 3D2N
  // ==========================
  'ph1': {
    id: 'ph1', title: 'Trip Lombok 3D2N', image: img3D2N, duration: '3 Hari 2 Malam',
    description: 'Eksplorasi mendalam wisata Lombok mulai dari pantai hingga pegunungan Rinjani (Area kaki gunung).',
    includes: includesList, paxOptions: paxList,
    itinerary: [
      {
        day: 'Hari 1',
        base: ['Penjemputan di Bandara', 'Desa Adat Sukerare', 'Desa Adat Sade', 'Pantai Kuta'],
        options: {
          'Pilihan 1 (Merese & Tg Aan)': ['Bukit Merese', 'Pantai Tanjung Aan'],
          'Pilihan 2 (Mawun & Selong)': ['Pantai Mawun', 'Pantai Selong Belanak']
        }
      },
      {
        day: 'Hari 2',
        options: {
          'Hari 2 A (Gili Trawangan)': ['Villa Hantu', 'Bukit Malimbu', 'Bukit Malaka', 'Pantai Kecinan', 'Gili Air, Meno, dan Trawangan (Snorkling)'],
          'Hari 2 B (Gili Nanggu)': ['Gili Nanggu', 'Gili Sudak', 'Gili Kedis'],
          'Hari 2 C (Pantai Pink)': ['Pantai Pink 3', 'Snorkling', 'Pantai Pink 1', 'Bukit Tangsi', 'Pulau Pasir'],
          'Hari 2 D (Sembalun)': ['Rest Area', 'Bukit Selong', 'Kedai Sawah', 'Kebun Strawberry', 'Puncak Sembalun'],
          'Hari 2 E (Air Terjun)': ['Bukit Malimbu', 'Bukit Malaka', 'Air Terjun Tiu Kelep', 'Air Terjun Sendang Gile']
        }
      },
      { day: 'Hari 3', activities: ['Pusat Oleh Oleh', 'Masjid Islamic Centre NTB', 'Desa Banyumulek', 'Pengantaran Ke Bandara / Pelabuhan'] }
    ],
    pricing: {
      'TANPA HOTEL': { '2-3 PAX': 2200000, '4-5 PAX': 2150000, '6-10 PAX': 2100000, '11-13 PAX': 2050000, '14-20 PAX': 2000000, '21-30 PAX': 1950000, '31-50 PAX': 1900000 },
      'CENTRAL INN (HOTEL *2)': { '2-3 PAX': 2500000, '4-5 PAX': 1800000, '6-10 PAX': 1750000, '11-13 PAX': 1700000, '14-20 PAX': 1650000, '21-30 PAX': 1600000, '31-50 PAX': 1550000 },
      'DIVA LOMBOK (HOTEL *3)': { '2-3 PAX': 2700000, '4-5 PAX': 2000000, '6-10 PAX': 1950000, '11-13 PAX': 1900000, '14-20 PAX': 1850000, '21-30 PAX': 1800000, '31-50 PAX': 1750000 },
      'ARUNA SENGGIGI (HOTEL *4)': { '2-3 PAX': 2900000, '4-5 PAX': 2200000, '6-10 PAX': 2150000, '11-13 PAX': 2100000, '14-20 PAX': 2050000, '21-30 PAX': 2000000, '31-50 PAX': 1950000 },
      'MERUMATTA (HOTEL *5)': { '2-3 PAX': 3400000, '4-5 PAX': 2700000, '6-10 PAX': 2650000, '11-13 PAX': 2600000, '14-20 PAX': 2550000, '21-30 PAX': 2500000, '31-50 PAX': 2450000 },
      'SVARGA (RESORT)': { '2-3 PAX': 3100000, '4-5 PAX': 2400000, '6-10 PAX': 2350000, '11-13 PAX': 2300000, '14-20 PAX': 2250000, '21-30 PAX': 2200000, '31-50 PAX': 2150000 },
      'JEEVA SANTAI (VILLA)': { '2-3 PAX': 3500000, '4-5 PAX': 2800000, '6-10 PAX': 2750000, '11-13 PAX': 2700000, '14-20 PAX': 2650000, '21-30 PAX': 2600000, '31-50 PAX': 2550000 }
    }
  },

  // ==========================
  // PAKET 4D3N
  // ==========================
  'ph2': {
    id: 'ph2', title: 'Trip Lombok 4D3N', image: img4D3N, duration: '4 Hari 3 Malam',
    description: 'Petualangan 4 hari menjelajahi keindahan tersembunyi pulau Lombok.',
    includes: includesList, paxOptions: paxList,
    itinerary: [
      {
        day: 'Hari 1',
        base: ['Penjemputan di Bandara', 'Desa Adat Sukerare', 'Desa Adat Sade', 'Pantai Kuta'],
        options: {
          'Pilihan 1 (Merese & Tg Aan)': ['Bukit Merese', 'Pantai Tanjung Aan'],
          'Pilihan 2 (Mawun & Selong)': ['Pantai Mawun', 'Pantai Selong Belanak']
        }
      },
      { day: 'Hari 2', activities: ['Villa Hantu', 'Bukit Malimbu', 'Bukit Malaka', 'Pantai Kecinan', 'Gili Air, Meno, dan Trawangan (Snorkling)'] },
      {
        day: 'Hari 3',
        options: {
          'Hari 3 A (Air Terjun)': ['Air Terjun Tiu Kelep', 'Air Terjun Sendang Gile'],
          'Hari 3 B (Sembalun)': ['Rest Area', 'Bukit Selong', 'Kedai Sawah', 'Kebun Strawberry', 'Puncak Sembalun'],
          'Hari 3 C (Gili Nanggu)': ['Gili Nanggu', 'Gili Sudak', 'Gili Kedis'],
          'Hari 3 D (Pantai Pink)': ['Pantai Pink 3', 'Snorkling', 'Pantai Pink 1', 'Bukit Tangsi', 'Pulau Pasir']
        }
      },
      { day: 'Hari 4', activities: ['Pusat Oleh Oleh', 'Masjid Islamic Centre NTB', 'Desa Banyumulek', 'Pengantaran Ke Bandara / Pelabuhan'] }
    ],
    pricing: {
      'TANPA HOTEL': { '2-3 PAX': 2900000, '4-5 PAX': 2500000, '6-10 PAX': 2450000, '11-13 PAX': 2350000, '14-20 PAX': 2300000, '21-30 PAX': 2250000, '31-50 PAX': 2200000 },
      'CENTRAL INN (HOTEL *2)': { '2-3 PAX': 3500000, '4-5 PAX': 2800000, '6-10 PAX': 2750000, '11-13 PAX': 2700000, '14-20 PAX': 2650000, '21-30 PAX': 2600000, '31-50 PAX': 2550000 },
      'DIVA LOMBOK (HOTEL *3)': { '2-3 PAX': 3750000, '4-5 PAX': 3050000, '6-10 PAX': 3000000, '11-13 PAX': 2950000, '14-20 PAX': 2900000, '21-30 PAX': 2850000, '31-50 PAX': 2800000 },
      'ARUNA SENGGIGI (HOTEL *4)': { '2-3 PAX': 4100000, '4-5 PAX': 3400000, '6-10 PAX': 3350000, '11-13 PAX': 3300000, '14-20 PAX': 3250000, '21-30 PAX': 3200000, '31-50 PAX': 3150000 },
      'MERUMATTA (HOTEL *5)': { '2-3 PAX': 4500000, '4-5 PAX': 3800000, '6-10 PAX': 3750000, '11-13 PAX': 3700000, '14-20 PAX': 3650000, '21-30 PAX': 3600000, '31-50 PAX': 3550000 },
      'SVARGA (RESORT)': { '2-3 PAX': 3900000, '4-5 PAX': 3200000, '6-10 PAX': 3150000, '11-13 PAX': 3100000, '14-20 PAX': 3050000, '21-30 PAX': 3000000, '31-50 PAX': 2950000 },
      'JEEVA SANTAI (VILLA)': { '2-3 PAX': 4600000, '4-5 PAX': 3900000, '6-10 PAX': 3850000, '11-13 PAX': 3800000, '14-20 PAX': 3750000, '21-30 PAX': 3700000, '31-50 PAX': 3650000 }
    }
  },

  // ==========================
  // PAKET 5D4N
  // ==========================
  'ph3': {
    id: 'ph3', title: 'Trip Lombok 5D4N', image: img5D4N, duration: '5 Hari 4 Malam',
    description: 'Rencana perjalanan 5 hari terlengkap yang paling banyak dipilih wisatawan.',
    includes: includesList, paxOptions: paxList,
    itinerary: [
      {
        day: 'Hari 1',
        base: ['Penjemputan di Bandara', 'Desa Adat Sukerare', 'Desa Adat Sade', 'Pantai Kuta'],
        options: {
          'Pilihan 1 (Merese & Tg Aan)': ['Bukit Merese', 'Pantai Tanjung Aan'],
          'Pilihan 2 (Mawun & Selong)': ['Pantai Mawun', 'Pantai Selong Belanak']
        }
      },
      {
        day: 'Hari 2',
        options: {
          'Hari 2 A (Gili Trawangan)': ['Villa Hantu', 'Bukit Malimbu', 'Bukit Malaka', 'Pantai Kecinan', 'Gili Air, Meno, dan Trawangan (Snorkling)'],
          'Hari 2 B (Gili Nanggu)': ['Gili Nanggu', 'Gili Sudak', 'Gili Kedis'],
          'Hari 2 C (Gili Bidara dst)': ['Gili Bidara', 'Gili Petagan', 'Gili Kapal', 'Gili Kondo']
        }
      },
      {
        day: 'Hari 3',
        options: {
          'Hari 3 A (Sembalun)': ['Rest Area', 'Bukit Selong', 'Kedai Sawah', 'Kebun Strawberry', 'Puncak Sembalun'],
          'Hari 3 B (Air Terjun)': ['Bukit Malimbu', 'Bukit Malaka', 'Air Terjun Tiu Kelep', 'Air Terjun Sendang Gile']
        }
      },
      { day: 'Hari 4', activities: ['Pantai Pink 3', 'Snorkling', 'Pantai Pink 1', 'Bukit Tangsi', 'Pulau Pasir'] },
      { day: 'Hari 5', activities: ['Pusat Oleh Oleh', 'Masjid Islamic Centre NTB', 'Desa Banyumulek', 'Pengantaran Ke Bandara / Pelabuhan'] }
    ],
    pricing: {
      'TANPA HOTEL': { '2-3 PAX': 3575000, '4-5 PAX': 3175000, '6-10 PAX': 3125000, '11-13 PAX': 3025000, '14-20 PAX': 2975000, '21-30 PAX': 2925000, '31-50 PAX': 2875000 },
      'CENTRAL INN (HOTEL *2)': { '2-3 PAX': 4200000, '4-5 PAX': 3500000, '6-10 PAX': 3450000, '11-13 PAX': 3400000, '14-20 PAX': 3350000, '21-30 PAX': 3300000, '31-50 PAX': 3250000 },
      'DIVA LOMBOK (HOTEL *3)': { '2-3 PAX': 4675000, '4-5 PAX': 3975000, '6-10 PAX': 3925000, '11-13 PAX': 3875000, '14-20 PAX': 3825000, '21-30 PAX': 3775000, '31-50 PAX': 3725000 },
      'ARUNA SENGGIGI (HOTEL *4)': { '2-3 PAX': 5125000, '4-5 PAX': 4425000, '6-10 PAX': 4375000, '11-13 PAX': 4325000, '14-20 PAX': 4275000, '21-30 PAX': 4225000, '31-50 PAX': 4175000 },
      'MERUMATTA (HOTEL *5)': { '2-3 PAX': 5775000, '4-5 PAX': 5075000, '6-10 PAX': 5025000, '11-13 PAX': 4975000, '14-20 PAX': 4925000, '21-30 PAX': 4875000, '31-50 PAX': 4825000 },
      'SVARGA (RESORT)': { '2-3 PAX': 4785000, '4-5 PAX': 4085000, '6-10 PAX': 4035000, '11-13 PAX': 3985000, '14-20 PAX': 3935000, '21-30 PAX': 3885000, '31-50 PAX': 3835000 },
      'JEEVA SANTAI (VILLA)': { '2-3 PAX': 5775000, '4-5 PAX': 5075000, '6-10 PAX': 5025000, '11-13 PAX': 4975000, '14-20 PAX': 4925000, '21-30 PAX': 4875000, '31-50 PAX': 4825000 }
    }
  }
};