import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Download, 
  Zap, 
  Check, 
  ExternalLink, 
  Lock, 
  Layers, 
  Terminal, 
  MessageSquare, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight
} from '../components/Icons';

export default function SazCancelPage({ lang, onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    en: {
      badge: "🎉 OFFICIAL WORDPRESS.ORG RELEASE • SazCancel v1.0.0",
      title: "SazCancel – Auto-Cancel On-Hold Orders for WooCommerce",
      subtitle: "Automatically cancel abandoned On-Hold orders (BACS bank transfers, checks, offline invoices) under merchant-defined rules to safely release stuck inventory back to shelves.",
      btnWpOrg: "View on WordPress.org",
      btnDownload: "Download Official Release (.zip)",
      btnBuyPro: "Get Pro License ($49/yr)",
      downloadsNote: "🔥 Official Plugin Directory Approval • High-Performance Order Storage Ready",
      highlights: [
        { label: "Safety First", val: "Dry Run by Default" },
        { label: "Inventory Recovery", val: "Native WC Restock" },
        { label: "Timing Precision", val: "Strict On-Hold Age" },
        { label: "Architecture", val: "100% HPOS & Action Scheduler" }
      ],
      workflowTitle: "How SazCancel Works: 4-Step Inventory Protection",
      workflowSubtitle: "From stale order detection to native WooCommerce stock restoration without merchant stress.",
      steps: [
        {
          step: "STEP 1",
          title: "Gateway Whitelist & Timeout Rules",
          desc: "Select which payment methods are subject to automatic expiration (e.g., Direct Bank Transfer and Cheque). Set your delay in hours or days (e.g. 48 hours). PayPal, Stripe, and COD orders are never touched.",
          badge: "Merchant Control",
          badgeColor: "cyan",
          img: "/sazcancel/screenshot-1.png",
          features: ["Per-gateway auto-cancellation whitelist", "Flexible expiration delay (hours/days)", "Zero impact on card or instant payment orders"]
        },
        {
          step: "STEP 2",
          title: "Dry Run Simulation Mode (Zero-Disaster Guard)",
          desc: "Upon installation, Simulation Mode is ON by default. SazCancel previews which orders would be cancelled and logs calculations in the Activity Log without modifying real customer orders.",
          badge: "Safe Onboarding",
          badgeColor: "emerald",
          img: "/sazcancel/screenshot-2.png",
          features: ["Risk-free dry run simulation", "Real-time calculation of recoverable stock units", "Instant merchant confidence before going live"]
        },
        {
          step: "STEP 3",
          title: "Action Scheduler Asynchronous Execution",
          desc: "Powered by WooCommerce's native Action Scheduler with duplicate job prevention. Right before cancellation, SazCancel re-validates the order: if it was paid, moved to Processing, or changed, it immediately stands down.",
          badge: "High Performance",
          badgeColor: "purple",
          img: "/sazcancel/screenshot-3.png",
          features: ["Non-blocking asynchronous background queue", "Last-moment status revalidation", "Safe legacy recovery baseline for pre-existing orders"]
        },
        {
          step: "STEP 4",
          title: "Native Stock Restoration & Activity Log",
          desc: "Orders transition to 'Cancelled' via core WooCommerce CRUD. WooCommerce Core automatically returns items to stock. A built-in Activity Log displays the last 30 events directly in your dashboard.",
          badge: "Audit Trail",
          badgeColor: "amber",
          img: "/sazcancel/screenshot-1.png",
          features: ["Native WooCommerce stock restoration", "Transparent 30-event activity audit log", "Full customer privacy: zero PII or external tracking"]
        }
      ],
      architectureTitle: "Engineered for High-Performance WooCommerce",
      architectureSubtitle: "Built according to strict WordPress.org coding standards, zero bloat, and HPOS native storage.",
      features: [
        { title: "Simulation Mode (Dry Run)", desc: "Test your rules safely before touching real orders." },
        { title: "Precise On-Hold Age", desc: "Measures age from the exact moment the order entered On-Hold status." },
        { title: "Gateway Whitelisting", desc: "Target BACS and offline invoices without affecting card payments." },
        { title: "Native WooCommerce Restock", desc: "Relies on core stock restoration routines to prevent double-restocking." },
        { title: "100% HPOS Compatible", desc: "Full compatibility with Custom Order Tables and Cart/Checkout Blocks." },
        { title: "Zero Third-Party Bloat", desc: "100% On-Premise PHP with zero external tracking or SaaS subscriptions." }
      ]
    },
    ua: {
      badge: "🎉 ОФІЦІЙНИЙ РЕЛІЗ НА WORDPRESS.ORG • SazCancel v1.0.0",
      title: "SazCancel – Автоматичне скасування завислих On-Hold замовлень",
      subtitle: "Автоматично скасовуйте неоплачені замовлення у статусі On-Hold (банківські перекази BACS, чеки, рахунки) за вашими правилами та повертайте заблоковані залишки на склад.",
      btnWpOrg: "Сторінка на WordPress.org",
      btnDownload: "Завантажити реліз (.zip)",
      btnBuyPro: "Купити ліцензію Pro ($49/рік)",
      downloadsNote: "🔥 Офіційно схвалено каталогом WordPress.org • Сумісний з WooCommerce HPOS",
      highlights: [
        { label: "Безпека", val: "Режим симуляції (Dry Run)" },
        { label: "Повернення залишків", val: "Нативний ресток WC" },
        { label: "Точність таймінгу", val: "Відлік від статусу On-Hold" },
        { label: "Архітектура", val: "100% HPOS & Action Scheduler" }
      ],
      workflowTitle: "Як працює SazCancel: 4 кроки захисту складу",
      workflowSubtitle: "Від виявлення прострочених замовлень до нативного повернення товарів на полиці магазину.",
      steps: [
        {
          step: "КРОК 1",
          title: "Вибір способів оплати та таймауту",
          desc: "Вкажіть, які саме способи оплати підлягають авто-скасуванню (наприклад, банківський переказ BACS або чек). Встановіть термін очікування в годинах або днях (наприклад, 48 годин). Замовлення з карткою або накладним платежем ніколи не чіпаються.",
          badge: "Повний контроль",
          badgeColor: "cyan",
          img: "/sazcancel/screenshot-1.png",
          features: ["Білий список платіжних шлюзів", "Гнучкий таймаут у годинах та днях", "Захист онлайн-оплат від випадкового скасування"]
        },
        {
          step: "КРОК 2",
          title: "Режим симуляції Dry Run (Захист від помилок)",
          desc: "Одразу після встановлення плагін працює в режимі симуляції. SazCancel розраховує, які замовлення були б скасовані та скільки залишків повернеться, фіксуючи події в журналі без реальної зміни замовлень.",
          badge: "Безпечний старт",
          badgeColor: "emerald",
          img: "/sazcancel/screenshot-2.png",
          features: ["100% безпечне тестування без ризику", "Калькуляція одиниць залишків для повернення", "Повна впевненість адміністратора перед увімкненням"]
        },
        {
          step: "КРОК 3",
          title: "Фонова обробка через Action Scheduler",
          desc: "Плагін використовує нативну чергу Action Scheduler від WooCommerce із захистом від дублікатів. Перед скасуванням статус перевіряється в реальному часі: якщо клієнт уже оплатив, замовлення залишається недоторканим.",
          badge: "Швидкодія",
          badgeColor: "purple",
          img: "/sazcancel/screenshot-3.png",
          features: ["Асинхронна робота без навантаження на базу", "Перевірка статусу в останню секунду перед дією", "Безпечна адаптація для старих замовлень"]
        },
        {
          step: "КРОК 4",
          title: "Нативне відновлення залишків та журнал подій",
          desc: "Замовлення переводяться у статус 'Cancelled' через ядро WooCommerce, яке нативно повертає товари на полиці. Вбудований журнал показує останні 30 подій прямо в адмін-панелі.",
          badge: "Прозорий аудит",
          badgeColor: "amber",
          img: "/sazcancel/screenshot-1.png",
          features: ["Нативне повернення товарів на склад", "Журнал останніх 30 автоматичних дій", "Повна приватність: нуль трекінгу та сторонніх серверів"]
        }
      ],
      architectureTitle: "Створено за стандартами WooCommerce 8+ та HPOS",
      architectureSubtitle: "Суворе дотримання вимог WordPress.org, безпека даних та максимальна швидкодія.",
      features: [
        { title: "Режим симуляції (Dry Run)", desc: "Тестуйте правила без зміни реальних замовлень." },
        { title: "Точний відлік часу On-Hold", desc: "Рахує час від фактичного переходу в статус On-Hold." },
        { title: "Білий список платіжних шлюзів", desc: "Окремі правила для BACS без впливу на Stripe чи PayPal." },
        { title: "Нативний ресток WooCommerce", desc: "Використовує штатний механізм відновлення залишків ядра." },
        { title: "100% сумісність з HPOS", desc: "Повна підтримка Custom Order Tables та блоків чекауту." },
        { title: "100% On-Premise PHP", desc: "Ніяких сторонніх SaaS, трекінгу чи платних підписок для базової версії." }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="relative z-10 pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb / Top Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
        <button 
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          <span>{lang === 'en' ? 'Back to Studio Portfolio' : 'Назад до каталогу студії'}</span>
        </button>
        <span className="text-xs font-mono text-emerald-400 font-bold px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30">
          🟢 {lang === 'en' ? 'Live on WordPress.org' : 'Опубліковано на WordPress.org'}
        </span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {t.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            {t.subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {t.highlights.map((h, i) => (
              <div key={i} className="glass-panel p-3 rounded-xl border border-white/5 bg-slate-900/50">
                <span className="text-[11px] font-mono text-slate-400 block mb-0.5">{h.label}</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">{h.val}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="https://wordpress.org/plugins/sazcancel-auto-cancel-on-hold-orders/" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all">
              <ExternalLink className="w-4 h-4 text-black" />
              <span>{t.btnWpOrg}</span>
            </a>

            <a 
              href="/sazcancel-auto-cancel-on-hold-orders.zip" 
              download
              className="px-5 py-3.5 rounded-xl glass-panel hover:bg-slate-800 border border-white/10 text-white font-bold text-sm flex items-center gap-2 transition-all">
              <Download className="w-4 h-4 text-cyan-400" />
              <span>{t.btnDownload}</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            {t.downloadsNote}
          </p>
        </div>

        {/* Visual Banner Preview */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-950">
            <img 
              src="/sazcancel/banner-772x250.png" 
              alt="SazCancel Banner" 
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold">🟢 Revision r3744432</span>
              <span className="text-slate-400">WooCommerce HPOS Native</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Step Visual Workflow */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'HOW IT WORKS' : 'ЯК ЦЕ ПРАЦЮЄ'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.workflowTitle}
          </h2>
          <p className="text-base text-slate-400 mt-3">
            {t.workflowSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            {t.steps.map((s, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  activeStep === idx 
                    ? 'bg-slate-900/90 border-emerald-500/50 shadow-lg shadow-emerald-500/10' 
                    : 'glass-panel border-white/5 hover:border-white/20'
                }`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">{s.step}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 p-2">
              <img 
                src={t.steps[activeStep].img} 
                alt={t.steps[activeStep].title}
                className="w-full h-auto rounded-xl object-contain max-h-[480px]"
              />
              <div className="p-4 bg-slate-900/90 rounded-b-xl border-t border-slate-800">
                <span className="text-xs font-mono text-emerald-400 font-bold block mb-2">
                  {lang === 'en' ? 'Key Safeguards in this Step:' : 'Ключові запобіжники цього кроку:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                  {t.steps[activeStep].features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'ENTERPRISE RELIABILITY' : 'НАДІЙНІСТЬ ТА АРХІТЕКТУРА'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.architectureTitle}
          </h2>
          <p className="text-base text-slate-400 mt-3">
            {t.architectureSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((f, fi) => (
            <div key={fi} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
