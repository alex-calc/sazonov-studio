import React, { useState } from 'react';
import { QrCode, Sparkles, CheckCircle2, AlertTriangle, RefreshCw, Volume2, ShieldCheck, Zap, ArrowRight } from './Icons';

export default function InteractiveLiveDemo({ lang }) {
  const [ticketState, setTicketState] = useState({
    code: 'TKT-VIP-9821',
    guestName: 'Sarah Connor',
    ticketType: 'VIP All-Access Pass',
    price: '75 EUR',
    status: 'valid', // 'valid' | 'used'
    usedAt: null,
    scanCount: 0
  });

  const [scannerState, setScannerState] = useState('idle'); // 'idle' | 'scanning' | 'success' | 'duplicate'
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Synthesize Web Audio Chimes
  const playSound = (type) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (type === 'success') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } else if (type === 'alarm') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(120, audioCtx.currentTime + 0.25);
        osc.frequency.setValueAtTime(320, audioCtx.currentTime + 0.26);
        osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.55);
        gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.55);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.55);
      }
    } catch (e) {}
  };

  const handleScan = () => {
    if (scannerState === 'scanning') return;
    setScannerState('scanning');

    setTimeout(() => {
      if (ticketState.status === 'valid') {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        playSound('success');
        setTicketState(prev => ({
          ...prev,
          status: 'used',
          usedAt: timeString,
          scanCount: prev.scanCount + 1
        }));
        setScannerState('success');

        setTimeout(() => {
          setScannerState('idle');
        }, 3200);
      } else {
        playSound('alarm');
        setTicketState(prev => ({
          ...prev,
          scanCount: prev.scanCount + 1
        }));
        setScannerState('duplicate');

        setTimeout(() => {
          setScannerState('idle');
        }, 3600);
      }
    }, 600);
  };

  const handleReset = () => {
    const randomCode = 'TKT-VIP-' + Math.floor(1000 + Math.random() * 9000);
    setTicketState({
      code: randomCode,
      guestName: Math.random() > 0.5 ? 'Sarah Connor' : 'Elon Musk',
      ticketType: 'VIP All-Access Pass',
      price: '75 EUR',
      status: 'valid',
      usedAt: null,
      scanCount: 0
    });
    setScannerState('idle');
  };

  const isUa = lang === 'ua';

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(ticketState.code)}`;

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold mb-3 shadow-lg shadow-cyan-500/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isUa ? 'ІНТЕРАКТИВНЕ ДЕМО ЗА 15 СЕКУНД' : 'INTERACTIVE LIVE TESTBENCH'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isUa ? 'Спробуйте роботу сканера прямо зараз' : 'Test the Gate Scanner Live in 15 Seconds'}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2">
          {isUa 
            ? 'Натисніть кнопку симуляції або проскануйте QR-код камерою свого смартфона без встановлення будь-яких додатків.' 
            : 'Click the simulation trigger below or scan this QR with your phone camera to experience instant zero-app validation.'}
        </p>
      </div>

      {/* Main Interactive Testbench Grid */}
      <div className="glass-panel p-6 sm:p-10 rounded-[32px] border border-cyan-500/30 relative overflow-hidden shadow-2xl bg-gradient-to-b from-slate-900/90 to-[#060a12]/95">
        
        {/* Audio control bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{isUa ? 'Тестовий стенд активний' : 'Live Testbench Engine Active'}</span>
          </div>
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors">
            <Volume2 className={`w-3.5 h-3.5 ${soundEnabled ? 'text-cyan-400' : 'text-slate-500'}`} />
            <span>{soundEnabled ? (isUa ? 'Звук: УВІМК' : 'Audio: ON') : (isUa ? 'Звук: ВИМК' : 'Audio: OFF')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT: LIVE DIGITAL E-TICKET PASS                          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[360px] bg-slate-950/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-center">
              
              {/* Event Header */}
              <div className="text-[11px] font-mono font-bold text-cyan-400 tracking-wider uppercase mb-1">
                GLOBAL TECH SUMMIT 2026
              </div>
              <h3 className="text-xl font-black text-white mb-1">{ticketState.guestName}</h3>
              <div className="inline-block px-3 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold mb-4">
                {ticketState.ticketType} • {ticketState.price}
              </div>

              {/* Scannable QR Graphic Frame */}
              <div className="bg-white p-4 rounded-2xl inline-block shadow-xl mb-4 relative group">
                <img 
                  src={qrUrl} 
                  alt="Live Scannable QR Pass" 
                  className="w-[180px] h-[180px] block mx-auto image-rendering-pixelated"
                />
                {ticketState.status === 'used' && (
                  <div className="absolute inset-0 bg-red-950/80 backdrop-blur-[2px] rounded-2xl flex flex-col items-center justify-center p-3 border-2 border-red-500 animate-pop">
                    <span className="text-2xl mb-1">🔴</span>
                    <span className="text-xs font-mono font-extrabold text-white tracking-wide uppercase bg-red-600 px-2 py-0.5 rounded">
                      {isUa ? 'ПОГАШЕНО' : 'USED PASS'}
                    </span>
                    <span className="text-[10px] font-mono text-red-200 mt-1">
                      {ticketState.usedAt}
                    </span>
                  </div>
                )}
              </div>

              {/* Ticket Status Bar */}
              <div className="flex items-center justify-between bg-slate-900/90 px-3.5 py-2.5 rounded-xl border border-slate-800 text-xs font-mono mb-2">
                <span className="text-slate-400 font-bold">{ticketState.code}</span>
                {ticketState.status === 'valid' ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {isUa ? '🟢 Дійсний' : '🟢 Valid'}
                  </span>
                ) : (
                  <span className="text-rose-400 font-bold flex items-center gap-1">
                    <span>🔴</span>
                    {isUa ? `Погашено (${ticketState.usedAt})` : `Used (${ticketState.usedAt})`}
                  </span>
                )}
              </div>

              <p className="text-[11px] text-slate-500">
                {isUa ? 'Наведіть камеру смартфона на цей QR-код' : 'Point any smartphone camera at this QR'}
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: SMARTPHONE HUD SCANNER SIMULATOR                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[340px] bg-[#020617] border-2 border-slate-700/80 rounded-[36px] p-3.5 shadow-2xl shadow-cyan-950/40 relative">
              
              {/* Phone Speaker & Camera Notch */}
              <div className="flex justify-center mb-2">
                <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                  <div className="w-8 h-1 bg-slate-800 rounded-full" />
                </div>
              </div>

              {/* Scanner Screen Viewport */}
              <div className="aspect-square bg-slate-950 rounded-[24px] border border-slate-800 relative overflow-hidden flex items-center justify-center">
                
                {/* Background optical reticle */}
                <div className="absolute inset-4 border border-dashed border-cyan-500/30 rounded-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

                {/* Laser scan line */}
                {scannerState === 'scanning' && (
                  <div className="absolute left-4 right-4 h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee,_0_0_30px_#06b6d4] animate-pulse z-20 top-1/2 -translate-y-1/2" />
                )}

                {/* IDLE VIEWPORT */}
                {scannerState === 'idle' && (
                  <div className="text-center p-6 space-y-2 z-10">
                    <QrCode className="w-12 h-12 text-cyan-400/60 mx-auto animate-pulse stroke-[1.5]" />
                    <div className="text-xs font-mono font-bold text-slate-300">
                      {isUa ? 'ENTRY PASS SCANNER' : 'ENTRY PASS SCANNER'}
                    </div>
                    <p className="text-[11px] text-slate-500 max-w-[200px] mx-auto">
                      {isUa ? 'Готовий до миттєвого зчитування квитка' : 'Ready for instantaneous gate check-in'}
                    </p>
                  </div>
                )}

                {/* SCANNING STATE */}
                {scannerState === 'scanning' && (
                  <div className="text-center p-6 space-y-2 z-10">
                    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
                    <div className="text-xs font-mono font-bold text-cyan-300">
                      {isUa ? 'ВЕРИФІКАЦІЯ У БАЗІ...' : 'VERIFYING PASS...'}
                    </div>
                  </div>
                )}

                {/* 🟢 SUCCESS OVERLAY CARD */}
                {scannerState === 'success' && (
                  <div className="absolute inset-0 bg-emerald-950/95 border-4 border-emerald-500 flex flex-col items-center justify-center p-4 text-center z-30 animate-pop">
                    <span className="text-5xl mb-2">✅</span>
                    <h4 className="text-xl font-black text-white tracking-tight uppercase">
                      ACCESS GRANTED
                    </h4>
                    <div className="mt-2 bg-black/40 px-3.5 py-2 rounded-xl border border-emerald-500/30 text-xs text-emerald-100">
                      <strong className="text-white text-sm block">{ticketState.guestName}</strong>
                      <span>{ticketState.ticketType}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-300 mt-2">
                      {isUa ? '● Прохід дозволено • Звіт у Telegram' : '● Entry Approved • Telegram Logged'}
                    </span>
                  </div>
                )}

                {/* 🔴 DUPLICATE REJECTION OVERLAY CARD */}
                {scannerState === 'duplicate' && (
                  <div className="absolute inset-0 bg-rose-950/95 border-4 border-rose-500 flex flex-col items-center justify-center p-4 text-center z-30 animate-shake shadow-[inset_0_0_50px_rgba(244,63,94,0.6)]">
                    <span className="text-5xl mb-1">⛔</span>
                    <h4 className="text-xl font-black text-white tracking-tight uppercase">
                      ALREADY USED!
                    </h4>
                    <div className="mt-1.5 bg-black/50 px-3.5 py-2 rounded-xl border border-rose-500/40 text-xs text-rose-100">
                      <strong className="text-rose-300 block mb-0.5">
                        {isUa ? '⚠️ ПОВТОРНИЙ ВХІД ЗАБОРОНЕНО' : '⚠️ ACCESS STRICTLY DENIED'}
                      </strong>
                      <span className="text-slate-300 text-[11px] block">{ticketState.guestName}</span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {isUa ? `Перший вхід: ${ticketState.usedAt}` : `First Entry: ${ticketState.usedAt}`}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-rose-400 mt-1.5 flex items-center gap-1">
                      <span>🚨</span>
                      <span>{isUa ? 'СИГНАЛ ТРИВОГИ В TELEGRAM' : 'TELEGRAM ALARM DISPATCHED'}</span>
                    </span>
                  </div>
                )}

              </div>

              {/* Screen Wake Lock Status footer */}
              <div className="text-center mt-2.5">
                <span className="text-[10px] font-mono text-emerald-400">
                  🟢 Screen Wake Lock Active (0 MB App)
                </span>
              </div>
            </div>

            {/* Simulation Action Controls */}
            <div className="w-full max-w-[340px] mt-4 space-y-2">
              <button 
                onClick={handleScan}
                disabled={scannerState === 'scanning'}
                className={`w-full py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${
                  ticketState.status === 'valid'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white shadow-rose-500/25'
                }`}>
                <Zap className="w-4 h-4" />
                <span>
                  {ticketState.status === 'valid'
                    ? (isUa ? '▶️ Симулювати 1-й скан (Успішний прохід)' : '▶️ Simulate 1st Scan (Access Granted)')
                    : (isUa ? '🚨 Симулювати повторний скан (Скріншот друга)' : '🚨 Simulate 2nd Scan (Duplicate Alarm)')}
                </span>
              </button>

              <button 
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 border border-slate-700/80 transition-all">
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isUa ? 'Скинути та згенерувати новий квиток' : 'Reset & Generate Fresh Ticket'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
