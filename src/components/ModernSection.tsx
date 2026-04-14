import { Globe, Users, TrendingUp, Cpu, Award, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  isDark: boolean;
}

const achievements = [
  {
    icon: TrendingUp,
    title: 'Ekonomi Terbesar ke-16',
    desc: 'PDB Indonesia melampaui USD 1,3 triliun (2023), menjadikannya ekonomi terbesar di ASEAN.',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/10',
  },
  {
    icon: Users,
    title: '277 Juta Penduduk',
    desc: 'Indonesia adalah negara berpenduduk terbesar keempat di dunia dengan keberagaman 1.340 suku bangsa.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/10',
  },
  {
    icon: Globe,
    title: 'Anggota G20',
    desc: 'Indonesia adalah satu-satunya wakil ASEAN di G20, memimpin presidensi G20 pada 2022.',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/10',
  },
  {
    icon: Cpu,
    title: 'Digital Economy Hub',
    desc: 'Memiliki lebih dari 200 juta pengguna internet dan ekosistem startup terbesar di Asia Tenggara.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/10',
  },
  {
    icon: Award,
    title: 'Warisan Budaya UNESCO',
    desc: '9 warisan budaya UNESCO, termasuk Borobudur, Prambanan, dan Batik yang diakui dunia.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/10',
  },
  {
    icon: Building2,
    title: 'Ibu Kota Baru: Nusantara',
    desc: 'Pemindahan ibu kota ke Kalimantan Timur sebagai simbol Indonesia masa depan yang berkelanjutan.',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-900/10',
  },
];

const milestones = [
  { year: '2004', event: 'Pemilu presiden langsung pertama' },
  { year: '2008', event: 'Reformasi birokrasi dan hukum besar-besaran' },
  { year: '2014', event: 'Jokowi terpilih, era pembangunan infrastruktur masif' },
  { year: '2019', event: 'Rencana pemindahan ibu kota ke Kalimantan Timur diumumkan' },
  { year: '2022', event: 'Indonesia pimpin G20 di Bali' },
  { year: '2024', event: 'Prabowo Subianto terpilih sebagai Presiden RI ke-8' },
];

export default function ModernSection({ isDark }: Props) {
  const sectionRef = useScrollAnimation();

  return (
    <section id="modern" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">Masa Kini</span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Indonesia Saat Ini
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Dari bangsa terjajah menjadi negara berdaulat yang disegani dunia — Indonesia terus melangkah maju.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className={`lg:col-span-1 rounded-2xl p-8 animate-on-scroll-left ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-sm border border-gray-100'}`}>
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tonggak Indonesia Modern
            </h3>
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-red-500 font-bold text-sm w-12 shrink-0 pt-0.5">{m.year}</span>
                  <div>
                    <div className={`w-full h-px ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mb-3`} />
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 card-hover animate-on-scroll-right border ${
                    isDark ? 'bg-gray-800 border-gray-700' : `${item.bg} border-transparent`
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className={`w-7 h-7 ${item.color} mb-3`} />
                  <h4 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`rounded-2xl overflow-hidden animate-on-scroll`}>
          <div className="hero-gradient p-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Indonesia Menuju 2045
            </h3>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Tepat 100 tahun kemerdekaan, Indonesia memiliki visi menjadi negara maju dengan PDB terbesar ke-5 di dunia,
              penduduk sejahtera, dan teknologi yang memimpin Asia.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { val: 'Top 5', label: 'Ekonomi Dunia' },
                { val: 'Zero', label: 'Kemiskinan Ekstrem' },
                { val: '100%', label: 'Literasi Digital' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{s.val}</div>
                  <div className="text-white/60 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
