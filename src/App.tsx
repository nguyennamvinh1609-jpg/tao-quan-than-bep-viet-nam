/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Globe, Users, Info, ExternalLink, ChevronRight, Menu, X } from 'lucide-react';
import { CONTENT, HEYZINE_LINK } from './constants';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('jp');
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'jp' ? 'vn' : 'jp');

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'overview', label: t.nav.overview },
    { id: 'flipbook', label: t.nav.flipbook },
    { id: 'team', label: t.nav.team },
  ];

  return (
    <div className="min-h-screen bg-cultural-bg selection:bg-cultural-red selection:text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cultural-red rounded-full flex items-center justify-center text-cultural-gold font-serif text-xl font-bold shadow-lg">
              竈
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-serif font-bold leading-tight text-cultural-red">
                {t.hero.title}
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-cultural-gold font-bold">
                {t.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-sm font-medium hover:text-cultural-red transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-cultural-red/20 hover:bg-cultural-red hover:text-white transition-all group"
            >
              <Globe size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-tighter">
                {lang === 'jp' ? 'Tiếng Việt' : '日本語'}
              </span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleLang} className="p-2 text-cultural-red">
              <Globe size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-cultural-red">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif font-bold text-cultural-red border-b border-cultural-bg pb-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cultural-bg via-cultural-bg/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1920" 
            alt="Vietnam Culture Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-cultural-red text-cultural-gold text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
              {t.hero.group}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-cultural-red leading-none mb-4">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-cultural-gold italic mb-8">
              {t.hero.subtitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#flipbook"
                className="px-8 py-4 bg-cultural-red text-white rounded-full font-bold shadow-xl shadow-cultural-red/20 hover:bg-red-700 transition-all flex items-center gap-2"
              >
                <BookOpen size={20} />
                {t.hero.readButton}
              </a>
              <a 
                href="#overview"
                className="px-8 py-4 bg-white text-cultural-red border border-cultural-red/20 rounded-full font-bold hover:bg-cultural-bg transition-all flex items-center gap-2"
              >
                {t.hero.exploreButton}
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>

            <motion.a 
              href={HEYZINE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring' }}
              className="relative block group"
            >
              <div className="absolute -inset-4 bg-cultural-gold/20 blur-3xl rounded-full group-hover:bg-cultural-gold/30 transition-colors" />
              <div className="relative bg-white p-4 shadow-2xl rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500 min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* This points to the image you upload as 'cover.png' in the public folder */}
                <img 
                  src="/cover.png" 
                  alt="ベトナムの竈神 Book Cover" 
                  className="w-full h-auto rounded shadow-inner"
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/seed/vietnam-book-cover/800/1100";
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 right-8 bg-cultural-red text-cultural-gold p-3 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                  <ExternalLink size={24} />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-cultural-red text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {t.hero.readButton}
                  </div>
                </div>
              </div>
            </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-cultural-red mb-8 relative inline-block">
              {t.about.title}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-cultural-gold/30 rounded-full" />
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "{t.about.description}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Overview Section */}
      <section id="overview" className="py-24 bg-cultural-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-cultural-red mb-4">
              {t.overview.title}
            </h2>
            <div className="w-24 h-1 bg-cultural-gold mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-4 mb-12">
            {(Object.keys(t.overview.sections) as Array<keyof typeof t.overview.sections>).map((key) => {
              const section = t.overview.sections[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`p-6 rounded-2xl transition-all text-left group ${
                    activeSection === key 
                    ? 'bg-cultural-red text-white shadow-xl shadow-cultural-red/20' 
                    : 'bg-white hover:bg-red-50 text-gray-600'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors ${
                    activeSection === key ? 'bg-white/20' : 'bg-cultural-bg group-hover:bg-red-100'
                  }`}>
                    <BookOpen size={20} />
                  </div>
                  <h3 className="font-serif font-bold text-lg leading-tight">
                    {section.title}
                  </h3>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2"
            >
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold text-cultural-red mb-6">
                  {t.overview.sections[activeSection as keyof typeof t.overview.sections].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {t.overview.sections[activeSection as keyof typeof t.overview.sections].summary}
                </p>
                <div className="flex items-center gap-4 text-cultural-gold font-bold uppercase tracking-widest text-[10px]">
                  <div className="w-12 h-px bg-cultural-gold" />
                  詳細を読む / Đọc chi tiết trong sách
                </div>
              </div>
              <div className="min-h-[400px] md:min-h-[600px] relative bg-gray-50">
                <img 
                  src={t.overview.sections[activeSection as keyof typeof t.overview.sections].image} 
                  alt="Section preview" 
                  className="absolute inset-0 w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${activeSection}/800/1000`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Flipbook CTA Section */}
      <section id="flipbook" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cultural-red z-0" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold mb-6 text-cultural-gold">
              {t.flipbook.title}
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              {t.flipbook.description}
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 mb-12">

              <a 
                href={HEYZINE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-cultural-gold text-cultural-red rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-black/20"
              >
                <BookOpen size={24} />
                {t.flipbook.button}
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-cultural-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-cultural-red mb-4">
              {t.team.title}
            </h2>
            <p className="text-cultural-gold font-bold uppercase tracking-widest">
              {t.team.group}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {t.team.members.map((member, i) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-cultural-gold/10 hover:border-cultural-red/30 transition-colors"
              >
                <p className="font-serif font-bold text-lg text-gray-800">{member}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-cultural-ink text-white/60 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-cultural-red rounded-full flex items-center justify-center text-cultural-gold font-serif text-sm font-bold">
              竈
            </div>
            <span className="text-white font-serif font-bold">{t.hero.title}</span>
          </div>
          <p className="text-sm mb-4">
            {t.footer.rights}
          </p>
          <a 
            href="mailto:tinnguongongtao@gmail.com" 
            className="text-xs font-mono text-cultural-gold hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            tinnguongongtao@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
