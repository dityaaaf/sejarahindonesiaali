import { useState } from 'react';
import { Calendar, Users, ChevronRight, X, Clock, Zap } from 'lucide-react';
import { eventsData, HistoricalEvent } from '../data/eventsData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categoryColors: Record<string, string> = {
  Kemerdekaan: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  Revolusi: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  Nasionalisme: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Tragedi Nasional': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  Demokrasi: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
};

function EventModal({ event, isDark, onClose }: { event: HistoricalEvent; isDark: boolean; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`bg-gradient-to-r ${event.bgGradient} p-8 relative overflow-hidden`}>
          {event.image && (
            <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
          )}
          <div className="relative z-10">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-3 inline-block`}>
              {event.category}
            </span>
            <h3 className="text-2xl font-bold text-white drop-shadow-md">{event.title}</h3>
            <div className="flex items-center gap-2 mt-2 text-white/90 font-medium text-sm drop-shadow-md">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{event.summary}</p>

          <div>
            <h4 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <Clock className="w-4 h-4 text-red-500" />
              Kronologi
            </h4>
            <div className="space-y-3">
              {event.chronology.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <Zap className="w-4 h-4 text-red-500" />
              Dampak terhadap Indonesia
            </h4>
            <ul className="space-y-2">
              {event.impact.map((imp, i) => (
                <li key={i} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <ChevronRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  {imp}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <Users className="w-4 h-4 text-red-500" />
              Tokoh Terlibat
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.figures.map((fig) => (
                <span
                  key={fig}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                >
                  {fig}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  isDark: boolean;
  searchQuery: string;
}

export default function EventsSection({ isDark, searchQuery }: Props) {
  const [selected, setSelected] = useState<HistoricalEvent | null>(null);
  const sectionRef = useScrollAnimation();

  const filtered = eventsData.filter(
    (e) =>
      !searchQuery ||
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="peristiwa" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">Momen Bersejarah</span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Peristiwa Penting
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Momen-momen yang mengubah arah perjalanan bangsa Indonesia selamanya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, idx) => (
            <div
              key={event.id}
              className={`rounded-2xl overflow-hidden card-hover cursor-pointer animate-on-scroll ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-sm border border-gray-100'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelected(event)}
            >
              <div className={`bg-gradient-to-r ${event.bgGradient} p-6 relative overflow-hidden group`}>
                {event.image && (
                  <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
                )}
                <div className="relative z-10">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white`}>
                    {event.category}
                  </span>
                  <div className="flex items-center gap-2 mt-4 text-white/90 text-sm font-medium drop-shadow-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2 drop-shadow-md">{event.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {event.summary}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>{event.figures.length} tokoh terlibat</span>
                  </div>
                  <span className="text-red-500 text-xs font-semibold">Baca selengkapnya →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={`text-center py-16 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <p className="text-lg">Tidak ada peristiwa yang cocok dengan pencarian "{searchQuery}"</p>
          </div>
        )}
      </div>

      {selected && (
        <EventModal event={selected} isDark={isDark} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
