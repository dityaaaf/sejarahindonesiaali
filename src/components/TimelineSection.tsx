import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Clock } from 'lucide-react';
import { timelineData } from '../data/timelineData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const eraColors: Record<string, string> = {
  amber: 'bg-amber-500',
  emerald: 'bg-emerald-500',
  orange: 'bg-orange-500',
  red: 'bg-red-600',
  blue: 'bg-blue-500',
  slate: 'bg-slate-500',
  teal: 'bg-teal-500',
  green: 'bg-green-500',
};

const eraBorders: Record<string, string> = {
  amber: 'border-amber-400',
  emerald: 'border-emerald-400',
  orange: 'border-orange-400',
  red: 'border-red-500',
  blue: 'border-blue-400',
  slate: 'border-slate-400',
  teal: 'border-teal-400',
  green: 'border-green-400',
};

const eraBg: Record<string, string> = {
  amber: 'bg-amber-50 dark:bg-amber-900/10',
  emerald: 'bg-emerald-50 dark:bg-emerald-900/10',
  orange: 'bg-orange-50 dark:bg-orange-900/10',
  red: 'bg-red-50 dark:bg-red-900/10',
  blue: 'bg-blue-50 dark:bg-blue-900/10',
  slate: 'bg-slate-50 dark:bg-slate-900/10',
  teal: 'bg-teal-50 dark:bg-teal-900/10',
  green: 'bg-green-50 dark:bg-green-900/10',
};

interface Props {
  isDark: boolean;
}

export default function TimelineSection({ isDark }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section id="timeline" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className={`text-red-500 text-sm font-semibold tracking-widest uppercase`}>
            Perjalanan Waktu
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Timeline Sejarah Indonesia
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Telusuri setiap era yang membentuk bangsa Indonesia — dari kerajaan kuno hingga era digital modern.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-green-500 transform sm:-translate-x-px" />

          <div className="space-y-8">
            {timelineData.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              const isOpen = expanded === event.id;
              const colorDot = eraColors[event.color] || 'bg-red-600';
              const colorBorder = eraBorders[event.color] || 'border-red-400';
              const colorBg = eraBg[event.color] || 'bg-red-50';

              return (
                <div
                  key={event.id}
                  className={`relative flex items-start gap-4 sm:gap-8 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } animate-on-scroll`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 mt-6 z-10">
                    <div
                      className={`w-4 h-4 rounded-full ${colorDot} border-2 border-white dark:border-gray-900 timeline-dot cursor-pointer`}
                      onClick={() => setExpanded(isOpen ? null : event.id)}
                    />
                  </div>

                  <div className={`w-full pl-14 sm:pl-0 ${isLeft ? 'sm:pr-8 sm:w-1/2 sm:text-right' : 'sm:pl-8 sm:w-1/2 sm:ml-auto'}`}>
                    <div
                      className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-5 shadow-sm border ${
                        isDark ? 'border-gray-700' : 'border-gray-100'
                      } card-hover cursor-pointer`}
                      onClick={() => setExpanded(isOpen ? null : event.id)}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="text-red-500 text-xs font-bold">{event.period}</span>
                      </div>
                      <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {event.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {event.description}
                      </p>

                      <button className={`flex items-center gap-1 mt-3 text-xs font-semibold text-red-500 hover:text-red-600 transition-colors ${isLeft ? 'sm:ml-auto' : ''}`}>
                        {isOpen ? (
                          <>Tutup <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <>Selengkapnya <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>

                      {isOpen && (
                        <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-100'} space-y-4`}>
                          <div className={`rounded-xl p-4 ${colorBg}`}>
                            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${isLeft ? 'sm:justify-end' : ''} ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              <Star className="w-3.5 h-3.5 text-red-500" />
                              Fakta Penting
                            </h4>
                            <ul className={`space-y-2 ${isLeft ? 'sm:text-right' : ''}`}>
                              {event.facts.map((fact, i) => (
                                <li key={i} className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'} flex items-start gap-2 ${isLeft ? 'sm:flex-row-reverse' : ''}`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${colorDot} mt-1.5 shrink-0`} />
                                  {fact}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${isLeft ? 'sm:justify-end' : ''} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              <Users className="w-3.5 h-3.5 text-red-500" />
                              Tokoh Terkait
                            </h4>
                            <div className={`flex flex-wrap gap-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                              {event.figures.map((fig) => (
                                <span
                                  key={fig}
                                  className={`text-xs px-3 py-1 rounded-full font-medium border ${colorBorder} ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                >
                                  {fig}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
