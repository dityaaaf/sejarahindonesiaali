export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: 'Pada tanggal berapa Indonesia memproklamasikan kemerdekaannya?',
    options: ['15 Agustus 1945', '17 Agustus 1945', '18 Agustus 1945', '20 Agustus 1945'],
    correctIndex: 1,
    explanation: 'Proklamasi Kemerdekaan Indonesia dibacakan oleh Soekarno-Hatta pada 17 Agustus 1945 pukul 10.00 WIB di Jalan Pegangsaan Timur No. 56, Jakarta.',
    category: 'Kemerdekaan',
  },
  {
    id: 2,
    question: 'Siapa yang menjadi Presiden pertama Republik Indonesia?',
    options: ['Mohammad Hatta', 'Soeharto', 'Soekarno', 'Sjahrir'],
    correctIndex: 2,
    explanation: 'Ir. Soekarno menjadi Presiden pertama Republik Indonesia, sementara Mohammad Hatta menjadi Wakil Presiden pertama.',
    category: 'Tokoh',
  },
  {
    id: 3,
    question: 'Kerajaan Hindu tertua di Indonesia adalah...',
    options: ['Majapahit', 'Sriwijaya', 'Kutai', 'Tarumanegara'],
    correctIndex: 2,
    explanation: 'Kerajaan Kutai di Kalimantan Timur adalah kerajaan Hindu tertua di Indonesia, berdiri sekitar abad ke-4 Masehi.',
    category: 'Kerajaan',
  },
  {
    id: 4,
    question: 'Peristiwa Rengasdengklok terjadi pada tanggal...',
    options: ['14 Agustus 1945', '15 Agustus 1945', '16 Agustus 1945', '17 Agustus 1945'],
    correctIndex: 2,
    explanation: 'Peristiwa Rengasdengklok terjadi pada 16 Agustus 1945, sehari sebelum proklamasi kemerdekaan.',
    category: 'Proklamasi',
  },
  {
    id: 5,
    question: 'Sumpah Pemuda diikrarkan pada tahun...',
    options: ['1926', '1927', '1928', '1930'],
    correctIndex: 2,
    explanation: 'Sumpah Pemuda diikrarkan pada 28 Oktober 1928 dalam Kongres Pemuda II di Batavia (Jakarta).',
    category: 'Nasionalisme',
  },
  {
    id: 6,
    question: 'VOC (Vereenigde Oost-Indische Compagnie) didirikan pada tahun...',
    options: ['1595', '1602', '1619', '1650'],
    correctIndex: 1,
    explanation: 'VOC didirikan pada 20 Maret 1602 oleh pemerintah Belanda untuk mengatur perdagangan di Asia.',
    category: 'Penjajahan',
  },
  {
    id: 7,
    question: 'Siapakah yang menulis lagu "Indonesia Raya"?',
    options: ['Soekarno', 'Muhammad Yamin', 'W.R. Supratman', 'Ismail Marzuki'],
    correctIndex: 2,
    explanation: 'W.R. Supratman (Wage Rudolf Supratman) menciptakan lagu "Indonesia Raya" yang pertama kali dikumandangkan pada Kongres Pemuda II tanggal 28 Oktober 1928.',
    category: 'Budaya',
  },
  {
    id: 8,
    question: 'Konferensi Asia-Afrika berlangsung di kota...',
    options: ['Jakarta', 'Surabaya', 'Bandung', 'Yogyakarta'],
    correctIndex: 2,
    explanation: 'Konferensi Asia-Afrika berlangsung di Bandung pada 18–24 April 1955, diprakarsai oleh Presiden Soekarno.',
    category: 'Diplomasi',
  },
  {
    id: 9,
    question: 'Soeharto mengundurkan diri sebagai Presiden Indonesia pada...',
    options: ['12 Mei 1998', '18 Mei 1998', '21 Mei 1998', '25 Mei 1998'],
    correctIndex: 2,
    explanation: 'Soeharto mengundurkan diri pada 21 Mei 1998 setelah 32 tahun berkuasa, di tengah gelombang demonstrasi reformasi.',
    category: 'Reformasi',
  },
  {
    id: 10,
    question: 'Pancasila sebagai dasar negara Indonesia pertama kali dirumuskan oleh...',
    options: ['Muhammad Yamin', 'Soepomo', 'Soekarno', 'Mohammad Hatta'],
    correctIndex: 2,
    explanation: 'Soekarno pertama kali mengemukakan nama "Pancasila" beserta rumusannya dalam pidato di sidang BPUPK pada 1 Juni 1945.',
    category: 'Ideologi',
  },
];
