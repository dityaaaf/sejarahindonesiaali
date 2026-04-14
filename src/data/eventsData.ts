import proklamasiImg from '../assets/image/proklamasi.png';
import rengasdengklokImg from '../assets/image/rengasdengklok.png';
import sumpahPemudaImg from '../assets/image/sumpahpemuda.png';
import g30Img from '../assets/image/g30.png';
import reformasiImg from '../assets/reformasi.png';

export interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  chronology: string[];
  impact: string[];
  figures: string[];
  bgGradient: string;
  image?: string;
}

export const eventsData: HistoricalEvent[] = [
  {
    id: 'proklamasi',
    title: 'Proklamasi Kemerdekaan Indonesia',
    date: '17 Agustus 1945',
    category: 'Kemerdekaan',
    summary:
      'Puncak perjuangan rakyat Indonesia yang telah berlangsung berabad-abad. Pada hari yang bersejarah ini, Soekarno dan Hatta atas nama bangsa Indonesia memproklamasikan kemerdekaan kepada dunia.',
    chronology: [
      '6 Agustus 1945: Bom atom dijatuhkan di Hiroshima, Jepang',
      '9 Agustus 1945: Bom atom kedua jatuh di Nagasaki',
      '15 Agustus 1945: Jepang menyatakan menyerah kepada Sekutu',
      '16 Agustus 1945: Peristiwa Rengasdengklok — Soekarno-Hatta "diamankan" golongan muda',
      '16 Agustus malam: Teks proklamasi dirumuskan di rumah Laksamana Maeda, Menteng',
      '17 Agustus 1945 pukul 10.00 WIB: Proklamasi dibacakan di Jl. Pegangsaan Timur No. 56',
      'Berita proklamasi disiarkan lewat radio dan disebarkan ke seluruh nusantara',
    ],
    impact: [
      'Indonesia resmi menjadi negara merdeka dan berdaulat',
      'Membangkitkan semangat nasionalisme di seluruh nusantara',
      'Mendorong terbentuknya lembaga-lembaga negara dalam waktu singkat',
      'Menjadi inspirasi bagi bangsa-bangsa Asia dan Afrika untuk meraih kemerdekaan',
    ],
    figures: ['Soekarno', 'Mohammad Hatta', 'Latief Hendraningrat', 'Sukarni'],
    bgGradient: 'from-red-900 to-red-700',
    image: proklamasiImg,
  },
  {
    id: 'rengasdengklok',
    title: 'Peristiwa Rengasdengklok',
    date: '16 Agustus 1945',
    category: 'Revolusi',
    summary:
      'Sehari sebelum proklamasi, sejumlah pemuda nasionalis "menculik" Soekarno dan Hatta ke Rengasdengklok, Karawang. Tujuannya menjauhkan kedua tokoh dari pengaruh Jepang dan mendesak agar proklamasi segera dilakukan.',
    chronology: [
      'Malam 15 Agustus: Golongan muda (Chairul Saleh, Wikana, Sukarni) rapat di Asrama Baperpi',
      'Dinihari 16 Agustus: Soekarno dan Hatta "diamankan" ke Rengasdengklok, Karawang',
      'Di Rengasdengklok: Para pemuda mendesak proklamasi segera dilakukan',
      'Sore 16 Agustus: Ahmad Subarjo bernegosiasi dengan golongan muda',
      'Malam 16 Agustus: Soekarno-Hatta kembali ke Jakarta',
      'Di rumah Laksamana Maeda: Teks proklamasi dirumuskan bersama',
    ],
    impact: [
      'Mempercepat pelaksanaan proklamasi kemerdekaan Indonesia',
      'Menunjukkan peran penting golongan muda dalam sejarah Indonesia',
      'Membuktikan bahwa proklamasi murni dari bangsa Indonesia, bukan pemberian Jepang',
    ],
    figures: ['Soekarno', 'Mohammad Hatta', 'Sukarni', 'Chairul Saleh', 'Ahmad Subarjo'],
    bgGradient: 'from-orange-900 to-orange-700',
    image: rengasdengklokImg,
  },
  {
    id: 'sumpah-pemuda',
    title: 'Sumpah Pemuda',
    date: '28 Oktober 1928',
    category: 'Nasionalisme',
    summary:
      'Kongres Pemuda II menghasilkan ikrar bersejarah yang menegaskan satu tanah air, satu bangsa, dan satu bahasa: Indonesia. Peristiwa ini menjadi tonggak penting persatuan bangsa Indonesia.',
    chronology: [
      '27 Oktober 1928: Kongres Pemuda II dibuka di Batavia (Jakarta)',
      'Peserta: utusan dari Jong Java, Jong Sumatra, Jong Ambon, dan organisasi pemuda lainnya',
      '28 Oktober 1928: Ikrar Sumpah Pemuda dibacakan',
      'Lagu "Indonesia Raya" pertama kali dikumandangkan oleh W.R. Supratman',
      'Peserta berkumpul di Gedung Indonesische Clubhuis (kini Museum Sumpah Pemuda)',
    ],
    impact: [
      'Mempersatukan pemuda dari berbagai suku dan daerah dalam satu identitas nasional',
      'Menjadikan Bahasa Indonesia sebagai bahasa persatuan bangsa',
      'Memperkuat semangat perjuangan untuk meraih kemerdekaan',
      'Tanggal 28 Oktober diperingati sebagai Hari Sumpah Pemuda setiap tahun',
    ],
    figures: ['W.R. Supratman', 'Sugondo Djojopuspito', 'Muhammad Yamin'],
    bgGradient: 'from-blue-900 to-blue-700',
    image: sumpahPemudaImg,
  },
  {
    id: 'g30s',
    title: 'G30S / PKI 1965',
    date: '30 September – 1 Oktober 1965',
    category: 'Tragedi Nasional',
    summary:
      'Peristiwa malam 30 September 1965 menjadi salah satu halaman paling kelam dalam sejarah Indonesia. Tujuh perwira TNI AD diculik dan dibunuh. Kejadian ini mengubah lanskap politik Indonesia secara drastis.',
    chronology: [
      'Malam 30 September 1965: Gerakan dipimpin Letkol Untung bergerak',
      '6 perwira senior TNI AD diculik dan dibawa ke Lubang Buaya',
      '1 Oktober 1965 dini hari: Para perwira dibunuh dan dimasukkan ke sumur',
      '1 Oktober siang: Mayor Jenderal Soeharto mengambil alih komando',
      '2 Oktober: Sumur Lubang Buaya ditemukan, jenazah perwira dievakuasi',
      'Oktober–November 1965: Pemburuan dan pembunuhan massal anggota PKI',
    ],
    impact: [
      'Menjadi alasan Soeharto mengambil alih kekuasaan dari Soekarno',
      'PKI dibubarkan dan komunisme dilarang di Indonesia',
      'Memicu transisi dari Orde Lama ke Orde Baru',
      'Meninggalkan luka mendalam dalam sejarah dan masyarakat Indonesia',
    ],
    figures: ['Soeharto', 'Soekarno', 'Letkol Untung', 'Jenderal Ahmad Yani'],
    bgGradient: 'from-gray-900 to-gray-700',
    image: g30Img,
  },
  {
    id: 'reformasi',
    title: 'Reformasi 1998',
    date: '21 Mei 1998',
    category: 'Demokrasi',
    summary:
      'Didorong oleh krisis ekonomi dan ketidakpuasan rakyat atas 32 tahun kekuasaan Soeharto, gelombang demonstrasi mahasiswa meletus dan berujung pada jatuhnya Orde Baru. Sebuah babak baru demokrasi Indonesia pun dimulai.',
    chronology: [
      'Juli 1997: Krisis moneter Asia melanda, rupiah melemah drastis',
      'Januari–April 1998: Demo mahasiswa mulai meluas di berbagai kota',
      '12 Mei 1998: Tragedi Trisakti — 4 mahasiswa ditembak aparat',
      '13–15 Mei 1998: Kerusuhan besar melanda Jakarta dan beberapa kota',
      '18–19 Mei 1998: Ribuan mahasiswa menduduki Gedung DPR/MPR',
      '21 Mei 1998: Soeharto mengundurkan diri, B.J. Habibie dilantik jadi presiden',
    ],
    impact: [
      'Mengakhiri 32 tahun kekuasaan Soeharto dan Orde Baru',
      'Membuka era demokrasi multipartai yang bebas',
      'Kebebasan pers dan kebebasan berpendapat dipulihkan',
      'Otonomi daerah diperkuat melalui desentralisasi kekuasaan',
    ],
    figures: ['Soeharto', 'B.J. Habibie', 'Amien Rais', 'Megawati'],
    bgGradient: 'from-teal-900 to-teal-700',
    image: reformasiImg,
  },
];
