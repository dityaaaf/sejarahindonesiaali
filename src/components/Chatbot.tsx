import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatbotProps {
  isDark: boolean;
}

interface Message {
  role: 'user' | 'model';
  content: string;
}

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

const SYSTEM_PROMPT = `Anda adalah seorang asisten AI yang ahli mengenai Sejarah Indonesia bernama "Aksa". 
Tujuan Anda adalah membantu pengguna belajar dan memahami kejadian penting, pahlawan, budaya, dan berbagai hal tentang sejarah bangsa Indonesia.
Jawab dengan informatif, antusias, sopan, dan dalam bahasa Indonesia. Jika ada pertanyaan yang sangat menyimpang atau di luar topik Sejarah,
tolong ingatkan pengguna untuk kembali ke topik sejarah Indonesia. Jangan menjelaskan ini pada setiap respons, respon secukupnya saja jangan terlalu panjang, dan bertele tele mengatakan hal yang tidak penting, langsung saja bekerja sesuai instruksi.`;

const Chatbot: React.FC<ChatbotProps> = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Halo! Saya Aksa, asisten AI untuk Sejarah Indonesia. Ada yang ingin kamu pelajari hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    if (!API_KEY || API_KEY === 'your_api_key_here') {
      setMessages(prev => [
        ...prev,
        { role: 'user', content: input },
        { role: 'model', content: 'Mohon maaf, API Key Google Gemini belum diatur di file `.env`. Silakan tambahkan `VITE_GEMINI_API_KEY` terlebih dahulu.' }
      ]);
      setInput('');
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const historyContents = messages.slice(1).map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));

      let finalUserMessage = userMessage;
      if (messages.length === 1) {
        finalUserMessage = `[Instruksi Sistem: ${SYSTEM_PROMPT}]\n\nPertanyaan: ${userMessage}`;
      }

      historyContents.push({
        role: 'user',
        parts: [{ text: finalUserMessage }]
      });

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY
        },
        body: JSON.stringify({
          contents: historyContents
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak bisa membalas saat ini.";

      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [
        ...prev,
        { role: 'model', content: 'Maaf, terjadi kesalahan saat menghubungi AI. Pastikan layanan API berfungsi dengan baik.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`mb-4 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[80vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            } border`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <h3 className="font-semibold text-sm">Aksa - Asisten Sejarah</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 ${message.role === 'user'
                    ? 'bg-red-600 text-white rounded-br-none'
                    : isDark
                      ? 'bg-gray-800 text-gray-200 rounded-bl-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                    }`}
                >
                  {message.role === 'model' ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none text-sm break-words">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm">{message.content}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`rounded-2xl px-4 py-3 rounded-bl-none ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800 border border-gray-200 shadow-sm'}`}>
                  <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`p-3 border-t ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'}`}>
            <div className={`flex items-center space-x-2 rounded-full px-4 py-2 border ${isDark ? 'border-gray-700 bg-gray-900 focus-within:border-red-500' : 'border-gray-300 bg-gray-50 focus-within:border-red-500 max-h-[48px]'}`}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tanya tentang sejarah..."
                className={`flex-1 bg-transparent border-none focus:outline-none text-sm ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'}`}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${input.trim() && !isLoading
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600'
                  }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          } w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Chatbot;
