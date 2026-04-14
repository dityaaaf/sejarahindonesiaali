import { ArrowUp } from 'lucide-react';
import logoImg from '../assets/indonesialogo.png';

interface Props {
  isDark: boolean;
}

const navLinks = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'tokoh', label: 'Tokoh' },
  { id: 'peristiwa', label: 'Peristiwa' },
  { id: 'bukti', label: 'Bukti Sejarah' },
  { id: 'modern', label: 'Indonesia Kini' },
  { id: 'quiz', label: 'Kuis' },
];

export default function Footer({ isDark }: Props) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`pt-16 pb-8 ${isDark ? 'bg-gray-950 border-t border-gray-800' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 p-1.5 rounded-xl">
                <img src={logoImg} alt="Logo Sejarah Indonesia" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">Sejarah Indonesia</span>
                <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">Dari Masa ke Masa</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Website edukasi sejarah Indonesia yang informatif dan berbasis fakta valid,
              dirancang untuk pelajar SMP, SMA, dan SMK.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-8 h-5 flex flex-col rounded overflow-hidden">
                <div className="flex-1 bg-red-600" />
                <div className="flex-1 bg-white" />
              </div>
              <span className="text-gray-400 text-xs">Merah Putih — Sang Saka Bangsa</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Sumber Referensi</h3>
            <ul className="space-y-2">
              {[
                'Buku Sejarah Indonesia, Kemendikbud',
                'Arsip Nasional Republik Indonesia',
                'Encyclopaedia Britannica Indonesia',
                'Museum Nasional Indonesia',
                'Perpustakaan Nasional RI',
              ].map((src) => (
                <li key={src} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-gray-400 text-sm">{src}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-700'} pt-6 flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Aditama Putra Prabaswara
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors group"
          >
            Kembali ke atas
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
