import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QRScannerPage from './pages/QRScannerPage';
import { QrCode } from './components/Icons';

export default function App() {
  const [lang, setLang] = useState('en');
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  const handleNavigate = (path) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-black font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-blue-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[45%] -left-60 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-[75%] -right-60 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full" />
      </div>

      <Header 
        lang={lang} 
        setLang={setLang} 
        currentPath={currentPath} 
        onNavigate={handleNavigate} 
      />

      <main className="relative z-10">
        {currentPath === '/plugins/quick-qr-scanner' ? (
          <QRScannerPage lang={lang} onNavigate={handleNavigate} />
        ) : (
          <HomePage lang={lang} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-4">
          <QrCode className="w-5 h-5 text-cyan-400" />
          <span className="font-bold text-white tracking-wider font-mono">SAZONOV PLUGIN STUDIO</span>
        </div>
        <p className="max-w-md mx-auto mb-4">
          Specialized commercial WordPress plugins, WooCommerce checkout accelerators, and high-frequency Telegram integrations.
        </p>
        <p className="mb-2">© 2026 Sazonov Studio. All rights reserved. Powered by Clean PHP 8.3 & React.</p><p><a href="https://freelancehunt.com/freelancer/alex_saz.html" target="_blank" rel="noreferrer" class="text-cyan-400 hover:underline">Freelancehunt Verified Studio Profile (5.0 ⭐)</a></p>
      </footer>
    </div>
  );
}
