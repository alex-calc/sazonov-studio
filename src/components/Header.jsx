import React from 'react';
import { QrCode, Send, ArrowLeft } from './Icons';

export default function Header({ lang, setLang, currentPath, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/5 bg-[#090d16]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Back navigation */}
        <div className="flex items-center gap-4">
          {currentPath !== '/' && (
            <button 
              onClick={() => onNavigate('/')}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all flex items-center gap-1.5 text-xs font-mono">
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">{lang === 'en' ? 'All Plugins' : 'Всі плагіни'}</span>
            </button>
          )}

          <div 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <QrCode className="w-6 h-6 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                SAZONOV <span className="text-cyan-400 font-mono text-sm px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">STUDIO</span>
              </span>
              <p className="text-[11px] text-slate-400 font-mono">WordPress Micro-SaaS & Custom Plugins</p>
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button onClick={() => onNavigate('/')} className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'Studio Hub' : 'Головна'}
          </button>
          <button onClick={() => onNavigate('/plugins/quick-qr-scanner')} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span>{lang === 'en' ? 'QR Ticket Scanner' : 'QR Сканер'}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono font-bold border border-emerald-500/30">v2.0</span>
          </button>
          <button onClick={() => onNavigate('/#services')} className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'B2B Services' : 'Послуги'}
          </button>
          <button onClick={() => onNavigate('/#contact')} className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'Custom Quote' : 'Замовити'}
          </button>
        </nav>

        {/* Right CTA & Lang Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button 
              onClick={() => setLang('en')} 
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${lang === 'en' ? 'bg-cyan-500 text-black shadow-sm' : 'text-slate-400 hover:text-white'}`}>
              EN
            </button>
            <button 
              onClick={() => setLang('ua')} 
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${lang === 'ua' ? 'bg-cyan-500 text-black shadow-sm' : 'text-slate-400 hover:text-white'}`}>
              UA
            </button>
          </div>

          <a 
            href="https://t.me/saz7771" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/20">
            <Send className="w-3.5 h-3.5" />
            <span>@saz7771</span>
          </a>
        </div>

      </div>
    </header>
  );
}
