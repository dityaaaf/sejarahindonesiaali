export interface HistoricalFigure {
  id: string;
  name: string;
  title: string;
  era: string;
  years: string;
  role: string;
  biography: string;
  contributions: string[];
  funFact: string;
  initial: string;
  bgColor: string;
}

export const figuresData: HistoricalFigure[] = [
  {
    id: 'soekarno',
    name: 'Ir. Soekarno',
    title: 'Proklamator & Presiden RI Pertama',
    era: 'Proklamasi & Orde Lama',
    years: '6 Juni 1901 – 21 Juni 1970',
    role: 'Presiden Pertama Republik Indonesia',
    biography:
      'Soekarno lahir di Blitar, Jawa Timur. Ia menyelesaikan pendidikan di Technische Hoogeschool (kini ITB) Bandung pada 1926. Dikenal sebagai orator ulung, Soekarno memimpin gerakan kemerdekaan Indonesia dan bersama Hatta memproklamasikan kemerdekaan RI pada 17 Agustus 1945.',
    contributions: [
      'Memproklamasikan kemerdekaan Indonesia bersama Mohammad Hatta',
      'Menggagas dan merumuskan Pancasila sebagai dasar negara',
      'Menginisiasi Konferensi Asia-Afrika (1955) di Bandung',
      'Memimpin gerakan Non-Blok bersama pemimpin dunia',
      'Mencetuskan slogan "Jas Merah" (jangan sekali-kali melupakan sejarah)',
    ],
    funFact:
      'Soekarno bisa berbicara dalam 8 bahasa: Indonesia, Inggris, Belanda, Prancis, Jerman, Arab, Jepang, dan Jawa.',
    initial: 'S',
    bgColor: '#DC2626',
  },
  {
    id: 'hatta',
    name: 'Drs. Mohammad Hatta',
    title: 'Proklamator & Wakil Presiden RI Pertama',
    era: 'Proklamasi & Orde Lama',
    years: '12 Agustus 1902 – 14 Maret 1980',
    role: 'Wakil Presiden Pertama Republik Indonesia',
    biography:
      'Mohammad Hatta lahir di Bukittinggi, Sumatera Barat. Ia menempuh pendidikan di Belanda dan aktif dalam organisasi mahasiswa Indonesia di Eropa. Hatta dikenal sebagai "Bung Hatta" yang disegani karena kejujuran dan integritasnya yang tinggi.',
    contributions: [
      'Memproklamasikan kemerdekaan Indonesia bersama Soekarno',
      'Menandatangani teks proklamasi kemerdekaan RI',
      'Menggagas koperasi sebagai soko guru perekonomian Indonesia',
      'Memimpin delegasi Indonesia dalam Konferensi Meja Bundar 1949',
      'Menulis banyak buku dan pemikiran ekonomi kerakyatan',
    ],
    funFact:
      'Hatta dikenal sangat sederhana. Ia punya kebiasaan mencatat setiap pengeluaran, bahkan sampai satu sen pun.',
    initial: 'H',
    bgColor: '#1d4ed8',
  },
  {
    id: 'sudirman',
    name: 'Jenderal Sudirman',
    title: 'Panglima Besar TNI Pertama',
    era: 'Revolusi Nasional',
    years: '24 Januari 1916 – 29 Januari 1950',
    role: 'Panglima Besar Tentara Nasional Indonesia',
    biography:
      'Sudirman lahir di Purbalingga, Jawa Tengah. Ia bergabung dengan PETA bentukan Jepang dan menjadi salah satu komandan terbaik. Meski menderita TBC berat, Sudirman memimpin perang gerilya melawan Belanda dari atas tandu.',
    contributions: [
      'Memimpin Pertempuran Ambarawa (1945), mengusir Sekutu dari Ambarawa',
      'Memimpin perang gerilya melawan Agresi Militer Belanda',
      'Mempertahankan semangat perlawanan meski sakit keras',
      'Menolak menyerah meski Yogyakarta diduduki Belanda pada 1948',
      'Menjadi simbol nasionalisme dan semangat juang militer Indonesia',
    ],
    funFact:
      'Sudirman memimpin perang gerilya selama 7 bulan sambil ditandu karena penyakit paru-parunya yang parah. Ia menempuh jarak ratusan kilometer di hutan Jawa.',
    initial: 'SD',
    bgColor: '#065f46',
  },
  {
    id: 'kartini',
    name: 'R.A. Kartini',
    title: 'Pahlawan Emansipasi Wanita',
    era: 'Kolonial Belanda',
    years: '21 April 1879 – 17 September 1904',
    role: 'Pelopor Emansipasi Wanita Indonesia',
    biography:
      'Raden Adjeng Kartini lahir di Jepara, Jawa Tengah, sebagai putri Bupati Jepara. Meski hanya sempat sekolah hingga usia 12 tahun karena adat pingitan, ia terus belajar mandiri dan menulis surat-surat kritis tentang kondisi perempuan kepada sahabat penanya di Belanda.',
    contributions: [
      'Mendirikan sekolah perempuan pertama di Jepara untuk kaum wanita',
      'Menulis surat-surat yang kemudian dibukukan sebagai "Door Duisternis tot Licht" (Habis Gelap Terbitlah Terang)',
      'Menginspirasi gerakan emansipasi wanita di Indonesia',
      'Memperkenalkan pentingnya pendidikan bagi perempuan Indonesia',
      'Tanggal lahirnya, 21 April, diperingati sebagai Hari Kartini',
    ],
    funFact:
      'Kartini belajar bahasa Belanda secara mandiri dan surat-suratnya kepada Rosa Abendanon dan Stella Zeehandelaar menjadi bukti kecerdasan dan keberaniannya.',
    initial: 'K',
    bgColor: '#9d174d',
  },
  {
    id: 'diponegoro',
    name: 'Pangeran Diponegoro',
    title: 'Pahlawan Perang Jawa',
    era: 'Penjajahan Belanda',
    years: '11 November 1785 – 8 Januari 1855',
    role: 'Pemimpin Perang Jawa (1825–1830)',
    biography:
      'Pangeran Diponegoro adalah putra Sultan Hamengkubuwono III dari Kesultanan Yogyakarta. Ia memimpin Perang Jawa yang berlangsung selama 5 tahun (1825–1830), yang menjadi perang paling mahal bagi Belanda di Nusantara.',
    contributions: [
      'Memimpin Perang Jawa (1825–1830) selama 5 tahun melawan Belanda',
      'Menginspirasi semangat perlawanan rakyat Jawa dan Nusantara',
      'Perangnya menyebabkan Belanda kehilangan 15.000 tentara dan menguras kas negara',
      'Menjadi simbol nasionalisme dan perlawanan terhadap penjajahan',
      'Wajahnya diabadikan dalam pecahan uang kertas Rp50.000',
    ],
    funFact:
      'Belanda menawarkan hadiah 50.000 gulden bagi siapa pun yang bisa menangkap Diponegoro — jumlah yang sangat besar pada masa itu.',
    initial: 'DP',
    bgColor: '#92400e',
  },
  {
    id: 'cut-nyak-dien',
    name: 'Cut Nyak Dien',
    title: 'Pahlawan Nasional dari Aceh',
    era: 'Penjajahan Belanda',
    years: '1848 – 6 November 1908',
    role: 'Pejuang Perang Aceh Melawan Belanda',
    biography:
      'Cut Nyak Dien adalah seorang pahlawan nasional dari Aceh yang berjuang melawan penjajahan Belanda. Setelah suaminya, Teuku Umar, gugur dalam pertempuran, ia terus memimpin perlawanan meski mengidap penyakit encok dan rabun.',
    contributions: [
      'Memimpin perlawanan gerilya di hutan Aceh melawan Belanda',
      'Berjuang bersama suaminya, Teuku Umar, dalam Perang Aceh',
      'Menolak menyerah meski kondisi fisik semakin lemah',
      'Menjadi simbol keberanian dan semangat juang perempuan Indonesia',
      'Dinobatkan sebagai Pahlawan Nasional pada 2 Mei 1964',
    ],
    funFact:
      'Cut Nyak Dien ditangkap Belanda pada 1905 dalam kondisi sakit parah, namun ia menolak diperlakukan sebagai tawanan biasa. Ia wafat dalam pengasingan di Sumedang, Jawa Barat.',
    initial: 'CN',
    bgColor: '#7c3aed',
  },
];
