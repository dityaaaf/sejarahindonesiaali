import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy, ChevronRight, Brain } from 'lucide-react';
import { quizData } from '../data/quizData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  isDark: boolean;
}

export default function QuizSection({ isDark }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const sectionRef = useScrollAnimation();

  const question = quizData[current];
  const score = answers.filter(Boolean).length;
  const total = quizData.length;

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    setAnswers([...answers, idx === question.correctIndex]);
  };

  const handleNext = () => {
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
    setShowExplanation(false);
  };

  const getOptionClass = (idx: number) => {
    const base = `quiz-option w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-3`;
    if (selected === null) {
      return `${base} ${isDark ? 'border-gray-600 text-gray-200 hover:border-red-500 hover:bg-red-900/10' : 'border-gray-200 text-gray-700 hover:border-red-300 hover:bg-red-50'}`;
    }
    if (idx === question.correctIndex) {
      return `${base} border-green-500 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300`;
    }
    if (idx === selected && idx !== question.correctIndex) {
      return `${base} border-red-500 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300`;
    }
    return `${base} ${isDark ? 'border-gray-700 text-gray-500' : 'border-gray-100 text-gray-400'}`;
  };

  const getScoreColor = () => {
    const pct = (score / total) * 100;
    if (pct >= 80) return 'text-green-500';
    if (pct >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  const getScoreMessage = () => {
    const pct = (score / total) * 100;
    if (pct >= 90) return 'Luar biasa! Kamu benar-benar kuasai sejarah Indonesia!';
    if (pct >= 70) return 'Bagus! Pengetahuanmu tentang sejarah Indonesia cukup baik.';
    if (pct >= 50) return 'Lumayan! Terus belajar untuk hasil yang lebih baik.';
    return 'Jangan menyerah! Baca ulang materi dan coba lagi.';
  };

  return (
    <section id="quiz" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">Uji Pemahamanmu</span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Kuis Sejarah Indonesia
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Seberapa jauh kamu mengenal sejarah bangsamu?
          </p>
        </div>

        <div className={`rounded-2xl overflow-hidden shadow-sm animate-on-scroll ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`}>
          {!finished ? (
            <>
              <div className="hero-gradient px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-white/70" />
                    <span className="text-white/70 text-sm">Pertanyaan {current + 1} dari {total}</span>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full bg-white/20 text-white font-medium`}>
                    {question.category}
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5">
                  <div
                    className="bg-white h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${((current + (selected !== null ? 1 : 0)) / total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-lg font-bold mb-6 leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {question.question}
                </h3>

                <div className="space-y-3">
                  {question.options.map((opt, idx) => (
                    <button
                      key={idx}
                      className={getOptionClass(idx)}
                      onClick={() => handleSelect(idx)}
                      disabled={selected !== null}
                    >
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        selected === null
                          ? isDark ? 'bg-gray-700' : 'bg-gray-100'
                          : idx === question.correctIndex
                          ? 'bg-green-500 text-white'
                          : idx === selected
                          ? 'bg-red-500 text-white'
                          : isDark ? 'bg-gray-700 text-gray-500' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {selected !== null && idx === question.correctIndex && (
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      )}
                      {selected !== null && idx === selected && idx !== question.correctIndex && (
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <div className={`mt-5 p-4 rounded-xl ${
                    answers[answers.length - 1]
                      ? isDark ? 'bg-green-900/20 border border-green-700/30' : 'bg-green-50 border border-green-200'
                      : isDark ? 'bg-red-900/20 border border-red-700/30' : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className={`flex items-center gap-2 mb-2 font-semibold text-sm ${answers[answers.length - 1] ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {answers[answers.length - 1] ? (
                        <><CheckCircle className="w-4 h-4" /> Jawaban Benar!</>
                      ) : (
                        <><XCircle className="w-4 h-4" /> Jawaban Salah</>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {question.explanation}
                    </p>
                  </div>
                )}

                {selected !== null && (
                  <button
                    onClick={handleNext}
                    className="mt-5 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
                  >
                    {current + 1 >= total ? (
                      <><Trophy className="w-4 h-4" /> Lihat Hasil</>
                    ) : (
                      <>Pertanyaan Berikutnya <ChevronRight className="w-4 h-4" /></>
                    )}
                  </button>
                )}

                <div className="flex gap-2 mt-4">
                  {quizData.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i < answers.length
                          ? answers[i]
                            ? 'bg-green-500'
                            : 'bg-red-500'
                          : i === current
                          ? 'bg-red-400'
                          : isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="p-10 text-center">
              <Trophy className={`w-16 h-16 mx-auto mb-4 ${getScoreColor()}`} />
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Kuis Selesai!
              </h3>
              <div className={`text-6xl font-bold my-4 ${getScoreColor()}`}>
                {score}<span className={`text-2xl ${isDark ? 'text-gray-500' : 'text-gray-300'}`}>/{total}</span>
              </div>
              <p className={`text-base mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{getScoreMessage()}</p>
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Akurasi: {Math.round((score / total) * 100)}%
              </p>
              <div className="flex gap-2 justify-center mt-6">
                {answers.map((correct, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${correct ? 'bg-green-500' : 'bg-red-500'}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <button
                onClick={handleReset}
                className="mt-8 flex items-center gap-2 mx-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
