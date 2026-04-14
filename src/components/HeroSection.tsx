import { ChevronDown, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path
            d="M50,300 Q150,250 250,280 Q350,310 450,290 Q550,270 650,295 Q750,320 850,300 Q950,280 1050,305 Q1100,315 1150,300"
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="600" cy="300" r="150" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="600" cy="300" r="250" fill="none" stroke="white" strokeWidth="0.3" />
          <circle cx="600" cy="300" r="350" fill="none" stroke="white" strokeWidth="0.2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="600"
              y1="300"
              x2={600 + 400 * Math.cos((angle * Math.PI) / 180)}
              y2={300 + 400 * Math.sin((angle * Math.PI) / 180)}
              stroke="white"
              strokeWidth="0.2"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Nusantara · 17,000+ Pulau · 270 Juta Jiwa</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
            Sejarah Indonesia
            <span className="block text-red-400 mt-2">dari Masa ke Masa</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">
            Perjalanan panjang sebuah bangsa — dari kerajaan-kerajaan Nusantara, penjajahan, perjuangan kemerdekaan,
            hingga Indonesia yang kita kenal hari ini.
          </p>

          <p className="text-sm text-white/50 max-w-xl mx-auto mb-12 italic">
            "Bangsa yang besar adalah bangsa yang menghormati jasa para pahlawannya." — Bung Karno
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToTimeline}
              className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-900/40 hover:shadow-red-900/60 hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Mulai Jelajahi
            </button>
            <button
              onClick={() => document.getElementById('tokoh')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <BookOpen className="w-5 h-5" />
              Kenali Pahlawan
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-20 max-w-3xl mx-auto">
            {[
              { num: '3.500+', label: 'Tahun Sejarah' },
              { num: '400+', label: 'Kerajaan' },
              { num: '350', label: 'Tahun Dijajah' },
              { num: '78+', label: 'Tahun Merdeka' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.num}</div>
                <div className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTimeline}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white animate-bounce transition-colors"
        aria-label="Scroll ke bawah"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
