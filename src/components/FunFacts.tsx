import { Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  isDark: boolean;
}

const facts = [
  {
    emoji: '🏝️',
    fact: 'Indonesia memiliki lebih dari 17.000 pulau, namun hanya sekitar 7.000 yang berpenghuni.',
  },
  {
    emoji: '🌋',
    fact: 'Indonesia adalah negara dengan jumlah gunung berapi aktif terbanyak di dunia — lebih dari 130 gunung.',
  },
  {
    emoji: '📜',
    fact: 'Bahasa Indonesia termasuk bahasa termudah di dunia karena tidak mengenal konjugasi kata kerja seperti bahasa Eropa.',
  },
  {
    emoji: '🛕',
    fact: 'Borobudur adalah candi Buddha terbesar di dunia, dibangun menggunakan sekitar 2 juta blok batu vulkanik tanpa menggunakan semen.',
  },
  {
    emoji: '👘',
    fact: 'Batik Indonesia diakui UNESCO sebagai Warisan Budaya Tak Benda Kemanusiaan pada 2 Oktober 2009.',
  },
  {
    emoji: '🌶️',
    fact: 'Pada era VOC, rempah-rempah Indonesia seperti pala dan cengkeh lebih mahal dari emas di pasar Eropa.',
  },
  {
    emoji: '🎵',
    fact: 'Lagu "Indonesia Raya" dikumandangkan pertama kali oleh W.R. Supratman pada 28 Oktober 1928 menggunakan biola.',
  },
  {
    emoji: '🌊',
    fact: 'Indonesia memiliki garis pantai terpanjang kedua di dunia, mencapai sekitar 54.000 km.',
  },
];

export default function FunFacts({ isDark }: Props) {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-red-600'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
            <Lightbulb className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-sm">Tahukah Kamu?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Fakta Unik Indonesia
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 animate-on-scroll ${
                isDark
                  ? 'bg-gray-700/50 border border-gray-600'
                  : 'bg-white/10 border border-white/20 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${idx * 0.07}s` }}
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-white/90'}`}>
                {item.fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
