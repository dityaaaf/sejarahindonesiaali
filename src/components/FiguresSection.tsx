import { useState } from 'react';
import { X, Star, Calendar, Lightbulb } from 'lucide-react';
import { figuresData, HistoricalFigure } from '../data/figuresData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  isDark: boolean;
  searchQuery: string;
}

function FigureModal({ figure, isDark, onClose }: { figure: HistoricalFigure; isDark: boolean; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-32 flex items-center justify-center relative" style={{ backgroundColor: figure.bgColor }}>
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
            <span className="text-white text-3xl font-bold">{figure.initial}</span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="p-6">
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{figure.name}</h3>
          <p className="text-red-500 font-semibold text-sm mt-1">{figure.title}</p>

          <div className={`flex items-center gap-2 mt-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Calendar className="w-3.5 h-3.5" />
            <span>{figure.years}</span>
          </div>

          <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {figure.biography}
          </p>

          <div className="mt-5">
            <h4 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <Star className="w-4 h-4 text-red-500" />
              Kontribusi Utama
            </h4>
            <ul className="space-y-2">
              {figure.contributions.map((c, i) => (
                <li key={i} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className={`mt-5 p-4 rounded-xl ${isDark ? 'bg-yellow-900/20 border border-yellow-700/30' : 'bg-yellow-50 border border-yellow-200'}`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mb-2 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
              <Lightbulb className="w-3.5 h-3.5" />
              Fakta Unik
            </h4>
            <p className={`text-sm leading-relaxed italic ${isDark ? 'text-yellow-300' : 'text-yellow-800'}`}>
              {figure.funFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FiguresSection({ isDark, searchQuery }: Props) {
  const [selected, setSelected] = useState<HistoricalFigure | null>(null);
  const sectionRef = useScrollAnimation();

  const filtered = figuresData.filter((f) =>
    !searchQuery ||
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.era.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="tokoh" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">Pahlawan Bangsa</span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Tokoh Penting Sejarah
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Mereka yang menorehkan tinta emas dalam lembaran sejarah Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((figure, idx) => (
            <div
              key={figure.id}
              className={`rounded-2xl overflow-hidden border card-hover cursor-pointer animate-on-scroll ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelected(figure)}
            >
              <div className="h-36 flex flex-col items-center justify-end pb-4 relative" style={{ backgroundColor: figure.bgColor }}>
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%), radial-gradient(circle at 70% 20%, white 0%, transparent 50%)'
                  }} />
                </div>
                <div className="relative w-16 h-16 rounded-full bg-white/25 border-3 border-white/40 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{figure.initial}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{figure.name}</h3>
                <p className="text-red-500 text-sm font-semibold mt-0.5">{figure.title}</p>
                <p className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>{figure.era}</p>
                <p className={`text-sm mt-3 leading-relaxed line-clamp-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {figure.biography}
                </p>
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700">
                  <span className={`text-xs font-semibold text-red-500 hover:text-red-600`}>
                    Lihat profil lengkap →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={`text-center py-16 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <p className="text-lg">Tidak ada tokoh yang cocok dengan pencarian "{searchQuery}"</p>
          </div>
        )}
      </div>

      {selected && (
        <FigureModal figure={selected} isDark={isDark} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
