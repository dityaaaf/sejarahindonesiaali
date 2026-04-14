import { FileText, MapPin, ExternalLink, Landmark } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  isDark: boolean;
}

const documents = [
  {
    id: 'proklamasi-text',
    title: 'Teks Proklamasi Kemerdekaan',
    type: 'Dokumen Resmi',
    description:
      'Teks proklamasi yang diketik oleh Sayuti Melik dan ditandatangani Soekarno-Hatta. Naskah asli disimpan di Arsip Nasional RI.',
    content:
      '"Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia. Hal-hal jang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan dengan tjara saksama dan dalam tempoh jang sesingkat-singkatnja. Djakarta, hari 17 boelan 8 tahoen 05. Atas nama bangsa Indonesia: Soekarno/Hatta"',
    icon: FileText,
    color: 'red',
    year: '1945',
  },
  {
    id: 'sumpah-pemuda-text',
    title: 'Ikrar Sumpah Pemuda',
    type: 'Ikrar Historis',
    description:
      'Tiga butir ikrar yang diucapkan pada Kongres Pemuda II, 28 Oktober 1928, menjadi fondasi persatuan bangsa Indonesia.',
    content:
      '"Pertama: Kami poetra dan poetri Indonesia, mengakoe bertoempah darah jang satoe, tanah air Indonesia. Kedoea: Kami poetra dan poetri Indonesia, mengakoe berbangsa jang satoe, bangsa Indonesia. Ketiga: Kami poetra dan poetri Indonesia, mendjoendjoeng bahasa persatoean, bahasa Indonesia."',
    icon: FileText,
    color: 'blue',
    year: '1928',
  },
];

const museums = [
  {
    id: 'museum-nasional',
    name: 'Museum Nasional Indonesia',
    location: 'Jakarta',
    description: 'Museum tertua di Indonesia (1778) yang menyimpan lebih dari 140.000 koleksi prasejarah, arkeologi, dan etnografi.',
    collections: ['Arca Hindu-Buddha', 'Koleksi numismatik', 'Artefak prasejarah'],
  },
  {
    id: 'museum-proklamasi',
    name: 'Monumen Proklamasi & Museum Perumusan Naskah',
    location: 'Jakarta',
    description: 'Berada di Jl. Imam Bonjol No. 1, lokasi di mana teks proklamasi dirumuskan di rumah Laksamana Maeda.',
    collections: ['Ruang perumusan naskah proklamasi', 'Arsip proklamasi', 'Dokumen kemerdekaan'],
  },
  {
    id: 'museum-sumpah-pemuda',
    name: 'Museum Sumpah Pemuda',
    location: 'Jakarta',
    description: 'Berlokasi di Gedung Indonesische Clubhuis yang menjadi tempat Kongres Pemuda II berlangsung.',
    collections: ['Biola W.R. Supratman', 'Foto kongres pemuda', 'Dokumen sejarah pergerakan'],
  },
  {
    id: 'candi-borobudur',
    name: 'Candi Borobudur',
    location: 'Magelang, Jawa Tengah',
    description: 'Dibangun abad ke-8–9 M, merupakan candi Buddha terbesar di dunia dan warisan budaya UNESCO.',
    collections: ['2.672 panel relief', '504 arca Buddha', '72 stupa berlubang'],
  },
  {
    id: 'candi-prambanan',
    name: 'Candi Prambanan',
    location: 'Yogyakarta',
    description: 'Kompleks candi Hindu terbesar di Indonesia, dibangun pada abad ke-9 M di era Kerajaan Mataram Kuno.',
    collections: ['Candi Trimurti', 'Relief Ramayana', '240 candi kecil'],
  },
  {
    id: 'benteng-rotterdam',
    name: 'Benteng Rotterdam',
    location: 'Makassar, Sulawesi Selatan',
    description: 'Peninggalan VOC abad ke-17 yang dahulunya menjadi pusat perdagangan rempah-rempah di Indonesia Timur.',
    collections: ['Arsip kolonial', 'Koleksi senjata', 'Museum La Galigo'],
  },
];

const colorMap: Record<string, string> = {
  red: 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800',
  blue: 'bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800',
};

const iconBg: Record<string, string> = {
  red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
};

export default function EvidenceSection({ isDark }: Props) {
  const sectionRef = useScrollAnimation();

  return (
    <section id="bukti" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">Warisan Nyata</span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Bukti Sejarah
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Dokumen asli, peninggalan bersejarah, dan museum yang menjadi saksi bisu perjalanan bangsa.
          </p>
        </div>

        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 animate-on-scroll ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <FileText className="w-6 h-6 text-red-500" />
            Dokumen & Teks Bersejarah
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {documents.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={doc.id}
                  className={`rounded-2xl border p-6 animate-on-scroll ${colorMap[doc.color] || colorMap.red}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg[doc.color] || iconBg.red}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                          {doc.type}
                        </span>
                        <span className="text-xs text-gray-400">{doc.year}</span>
                      </div>
                      <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{doc.title}</h4>
                      <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{doc.description}</p>
                    </div>
                  </div>
                  <blockquote className={`mt-4 p-4 rounded-xl text-sm italic leading-relaxed border-l-4 border-red-400 ${isDark ? 'bg-gray-800/50 text-gray-300' : 'bg-white/70 text-gray-700'}`}>
                    {doc.content}
                  </blockquote>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 animate-on-scroll ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <Landmark className="w-6 h-6 text-red-500" />
            Museum & Peninggalan Bersejarah
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {museums.map((museum, idx) => (
              <div
                key={museum.id}
                className={`rounded-2xl p-5 card-hover animate-on-scroll ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100 shadow-sm'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-1 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{museum.location}</span>
                </div>
                <h4 className={`font-bold text-base mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{museum.name}</h4>
                <p className={`text-sm mt-2 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{museum.description}</p>
                <div className="mt-4">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Koleksi Unggulan:</p>
                  <ul className="space-y-1">
                    {museum.collections.map((col) => (
                      <li key={col} className={`text-xs flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        {col}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-12 p-6 rounded-2xl text-center animate-on-scroll ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-red-50 border border-red-100'}`}>
          <ExternalLink className="w-8 h-8 text-red-500 mx-auto mb-3" />
          <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Sumber Referensi Terpercaya
          </h4>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Seluruh informasi dalam website ini bersumber dari buku sejarah resmi Kemendikbud, Arsip Nasional RI,
            dan literatur akademis yang telah diverifikasi. Tidak ada informasi hoax di sini.
          </p>
        </div>
      </div>
    </section>
  );
}
