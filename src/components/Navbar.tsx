import { useState, useEffect } from 'react';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import logoImg from '../assets/indonesialogo.png';

interface NavbarProps {
  isDark: boolean;
  onToggleDark: () => void;
  activeSection: string;
  onSearch: (q: string) => void;
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

export default function Navbar({ isDark, onToggleDark, activeSection, onSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchVal);
    setSearchOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('beranda')}
            className="flex items-center gap-2 group"
          >
            <div className={`w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105 ${isDark ? 'bg-white/10 p-1 rounded-md' : ''}`}>
              <img 
                src={logoImg} 
                alt="Logo Sejarah Indonesia" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className={`font-bold text-lg leading-none ${scrolled || menuOpen ? (isDark ? 'text-white' : 'text-gray-900') : 'text-white'}`}>
                Sejarah
              </span>
              <span className="text-red-600 font-bold text-lg leading-none">
                Indonesia
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-link px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-red-500'
                    : scrolled
                    ? isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
                } ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-1">
                <input
                  autoFocus
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Cari sejarah..."
                  className={`text-sm px-3 py-1.5 rounded-lg border outline-none w-44 transition-all ${
                    isDark
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className={`p-1.5 rounded-md ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onToggleDark}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={`lg:hidden border-t ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                    : isDark
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
