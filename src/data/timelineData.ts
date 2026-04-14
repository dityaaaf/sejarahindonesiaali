export interface TimelineEvent {
  id: string;
  era: string;
  period: string;
  title: string;
  description: string;
  facts: string[];
  figures: string[];
  color: string;
  icon: string;
}

export const timelineData: TimelineEvent[] = [
  {
    id: 'hindu-buddha',
    era: 'Kerajaan Hindu-Buddha',
    period: '400 – 1500 M',
    title: 'Masa Kerajaan Hindu-Buddha',
    description:
      'Periode ini ditandai dengan masuk dan berkembangnya pengaruh Hindu dan Buddha dari India ke Nusantara. Kerajaan-kerajaan besar bermunculan, meninggalkan jejak budaya yang masih bisa kita rasakan hingga hari ini.',
    facts: [
      'Kerajaan Kutai (Kalimantan) adalah kerajaan Hindu tertua di Indonesia, berdiri sekitar abad ke-4 M.',
      'Kerajaan Sriwijaya (Sumatera) menjadi pusat perdagangan dan penyebaran agama Buddha di Asia Tenggara.',
      'Majapahit mencapai puncak kejayaan di bawah Raja Hayam Wuruk dan Patih Gajah Mada (1293–1527).',
      'Sumpah Palapa oleh Gajah Mada bertujuan menyatukan seluruh Nusantara di bawah panji Majapahit.',
      'Borobudur dibangun oleh Dinasti Syailendra pada abad ke-8 M, merupakan candi Buddha terbesar di dunia.',
    ],
    figures: ['Gajah Mada', 'Hayam Wuruk', 'Ken Arok'],
    color: 'amber',
    icon: 'Temple',
  },
  {
    id: 'islam',
    era: 'Masa Islam',
    period: '1300 – 1700 M',
    title: 'Penyebaran Islam di Nusantara',
    description:
      'Islam masuk ke Nusantara melalui jalur perdagangan dari Arab, Gujarat (India), dan Persia. Peran para pedagang Muslim dan Wali Songo sangat besar dalam penyebaran Islam secara damai dan akulturatif.',
    facts: [
      'Kesultanan Samudra Pasai (Aceh) adalah kerajaan Islam pertama di Indonesia, berdiri sekitar abad ke-13.',
      'Wali Songo adalah sembilan ulama yang menyebarkan Islam di Pulau Jawa dengan pendekatan budaya.',
      'Kesultanan Demak (1475) menjadi kerajaan Islam pertama di Pulau Jawa.',
      'Sunan Kalijaga menggunakan wayang kulit sebagai media dakwah, menciptakan akulturasi budaya unik.',
      'Masjid Agung Demak adalah salah satu masjid bersejarah tertua di Indonesia.',
    ],
    figures: ['Sunan Kalijaga', 'Raden Patah', 'Sultan Agung'],
    color: 'emerald',
    icon: 'Moon',
  },
  {
    id: 'belanda',
    era: 'Penjajahan Belanda',
    period: '1602 – 1942',
    title: 'Era Penjajahan Belanda (VOC & Hindia Belanda)',
    description:
      'Belanda hadir pertama kali melalui VOC (Vereenigde Oost-Indische Compagnie) pada tahun 1602. Selama lebih dari 3 abad, rakyat Indonesia mengalami penderitaan akibat sistem tanam paksa, monopoli perdagangan, dan penindasan.',
    facts: [
      'VOC didirikan pada 20 Maret 1602, mendapat hak monopoli perdagangan dari pemerintah Belanda.',
      'Sistem Tanam Paksa (Cultuurstelsel, 1830–1870) memaksa rakyat menanam 1/5 lahan untuk Belanda.',
      'Perang Diponegoro (1825–1830) adalah perang terbesar melawan Belanda, menelan korban 200.000 jiwa.',
      'Hak Van den Bosch diterapkan untuk mengatasi kebangkrutan VOC yang terjadi pada 1799.',
      'Kebijakan Politik Etis (1901) memperkenalkan pendidikan, irigasi, dan transmigrasi untuk rakyat.',
    ],
    figures: ['Pangeran Diponegoro', 'Cut Nyak Dien', 'Teuku Umar'],
    color: 'orange',
    icon: 'Ship',
  },
  {
    id: 'jepang',
    era: 'Penjajahan Jepang',
    period: '1942 – 1945',
    title: 'Pendudukan Jepang',
    description:
      'Jepang masuk ke Indonesia pada Maret 1942, mengusir Belanda dengan cepat. Awalnya disambut sebagai pembebas, namun penjajahan Jepang terbukti lebih kejam dengan romusha (kerja paksa) dan eksploitasi sumber daya alam.',
    facts: [
      'Jepang menduduki Indonesia pada 8 Maret 1942 setelah Belanda menyerah di Kalijati.',
      'Sistem Romusha memaksa jutaan rakyat Indonesia menjadi buruh paksa untuk keperluan militer Jepang.',
      'Jepang membentuk PETA (Pembela Tanah Air), cikal bakal TNI Indonesia.',
      'Bahasa Indonesia dipromosikan Jepang untuk menggeser bahasa Belanda sebagai bahasa resmi.',
      'Bom Hiroshima dan Nagasaki (6 & 9 Agustus 1945) menjadi titik balik kemerdekaan Indonesia.',
    ],
    figures: ['Soekarno', 'Mohammad Hatta', 'Sutan Sjahrir'],
    color: 'red',
    icon: 'Sword',
  },
  {
    id: 'proklamasi',
    era: 'Proklamasi & Revolusi',
    period: '1945 – 1950',
    title: 'Proklamasi Kemerdekaan & Revolusi Nasional',
    description:
      'Puncak perjuangan bangsa Indonesia terwujud pada 17 Agustus 1945 dengan dibacakannya teks proklamasi kemerdekaan. Namun perjuangan belum selesai — Indonesia harus mempertahankan kemerdekaannya dari upaya kembalinya Belanda.',
    facts: [
      'Proklamasi dibacakan Soekarno-Hatta di Jalan Pegangsaan Timur No. 56, Jakarta, pukul 10.00 WIB.',
      'Peristiwa Rengasdengklok (16 Agustus 1945) membawa Soekarno-Hatta oleh golongan muda untuk segera memproklamasikan kemerdekaan.',
      'Pertempuran Surabaya (10 November 1945) menjadi hari terbesar perjuangan rakyat Indonesia.',
      'Agresi Militer Belanda I (1947) dan II (1948) gagal mengembalikan kekuasaan Belanda.',
      'Konferensi Meja Bundar (1949) mengakui kedaulatan Indonesia secara penuh.',
    ],
    figures: ['Soekarno', 'Mohammad Hatta', 'Jenderal Sudirman'],
    color: 'red',
    icon: 'Flag',
  },
  {
    id: 'orde-lama',
    era: 'Orde Lama',
    period: '1945 – 1966',
    title: 'Orde Lama (Era Soekarno)',
    description:
      'Era kepemimpinan Presiden Soekarno ditandai dengan percobaan berbagai sistem pemerintahan: dari demokrasi parlementer, hingga Demokrasi Terpimpin. Indonesia aktif dalam gerakan Non-Blok dan menjadi suara negara-negara berkembang.',
    facts: [
      'Indonesia menyelenggarakan Konferensi Asia-Afrika di Bandung pada 18–24 April 1955.',
      'Dekrit Presiden 5 Juli 1959 mengakhiri demokrasi liberal dan kembali ke UUD 1945.',
      'Indonesia keluar dari PBB pada 7 Januari 1965 sebagai protes atas masuknya Malaysia ke DK PBB.',
      'Gerakan Non-Blok yang dipelopori Soekarno mengumpulkan negara-negara yang tidak memihak Blok Barat maupun Timur.',
      'Pertumbuhan ekonomi stagnan dan inflasi tinggi mengganggu stabilitas Indonesia di akhir era Orde Lama.',
    ],
    figures: ['Soekarno', 'Moh. Hatta', 'Sri Sultan Hamengkubuwono IX'],
    color: 'blue',
    icon: 'Globe',
  },
  {
    id: 'orde-baru',
    era: 'Orde Baru',
    period: '1966 – 1998',
    title: 'Orde Baru (Era Soeharto)',
    description:
      'Soeharto mengambil alih kekuasaan pasca G30S 1965 dan memimpin Indonesia selama 32 tahun. Era ini ditandai stabilitas ekonomi dan pembangunan infrastruktur, namun juga korupsi, kolusi, dan nepotisme (KKN) serta pelanggaran HAM.',
    facts: [
      'Soeharto resmi menjadi presiden pada 27 Maret 1968 menggantikan Soekarno.',
      'Program Repelita (Rencana Pembangunan Lima Tahun) berhasil meningkatkan ketahanan pangan.',
      'Indonesia mencapai swasembada beras pada tahun 1984.',
      'Kebebasan pers sangat dibatasi; 3 media (Tempo, Editor, DeTik) dibredel pada 1994.',
      'Krisis ekonomi 1997 memukul rupiah hingga Rp16.000/USD dari semula Rp2.500/USD.',
    ],
    figures: ['Soeharto', 'Try Sutrisno', 'B.J. Habibie'],
    color: 'slate',
    icon: 'Building',
  },
  {
    id: 'reformasi',
    era: 'Reformasi',
    period: '1998 – 2004',
    title: 'Era Reformasi',
    description:
      'Krisis ekonomi 1997–1998 memicu gelombang demonstrasi mahasiswa yang berujung pada mundurnya Soeharto pada 21 Mei 1998. Era Reformasi membawa kebebasan pers, pemilihan umum langsung, dan desentralisasi kekuasaan.',
    facts: [
      'Soeharto mengundurkan diri pada 21 Mei 1998 setelah 32 tahun berkuasa.',
      'B.J. Habibie menjadi presiden pertama era Reformasi dan menyelenggarakan pemilu bebas pada 1999.',
      'Timor-Timur memilih merdeka melalui referendum pada 30 Agustus 1999.',
      'Pemilu 1999 diikuti 48 partai politik, menandai kembalinya demokrasi multipartai.',
      'Amandemen UUD 1945 dilakukan empat kali (1999–2002) untuk memperkuat demokrasi.',
    ],
    figures: ['B.J. Habibie', 'Abdurrahman Wahid', 'Megawati Soekarnoputri'],
    color: 'teal',
    icon: 'Users',
  },
  {
    id: 'modern',
    era: 'Indonesia Modern',
    period: '2004 – Sekarang',
    title: 'Indonesia Modern',
    description:
      'Era pemilihan presiden langsung dimulai pada 2004. Indonesia tumbuh menjadi ekonomi terbesar ke-16 di dunia, aktif dalam G20, dan terus berkembang dengan bonus demografi dan revolusi digital.',
    facts: [
      'Pemilu presiden langsung pertama diadakan pada 5 Juli 2004, dimenangkan Susilo Bambang Yudhoyono.',
      'Indonesia bergabung dalam G20 sebagai satu-satunya wakil Asia Tenggara.',
      'PDB Indonesia mencapai lebih dari 1 triliun USD, masuk 20 besar ekonomi dunia.',
      'Indonesia memiliki lebih dari 200 juta pengguna internet aktif pada 2023.',
      'Pemindahan ibu kota ke Nusantara (Kalimantan Timur) direncanakan menjadi simbol Indonesia abad ke-21.',
    ],
    figures: ['SBY', 'Joko Widodo', 'Prabowo Subianto'],
    color: 'green',
    icon: 'Rocket',
  },
];
