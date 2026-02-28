import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">Portfolio</a>

        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-blue-400 transition">Главная</a>
          <a href="#projects" className="hover:text-blue-400 transition">Проекты</a>
          <a href="#contacts" className="hover:text-blue-400 transition">Контакты</a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#hero" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Главная</a>
              <a href="#projects" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Проекты</a>
              <a href="#contacts" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};