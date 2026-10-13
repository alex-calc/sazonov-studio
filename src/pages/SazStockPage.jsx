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

export default function SazStockPage({ lang, onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    en: {
      badge: "🎉 OFFICIAL WORDPRESS.ORG RELEASE • SazStock v1.0.0",
      title: "SazStock – Stock Alerts & Control for WooCommerce",
      subtitle: "Prevent surprise stockouts, protect warehouse reserves, and eliminate lost revenue with real-time inventory threshold alerts, automated safety buffers, and instant Telegram dispatches.",
      btnWpOrg: "View on WordPress.org",
      btnDownload: "Download Official Release (.zip)",
      btnBuyPro: "Get Pro License ($49/yr)",
      downloadsNote: "🔥 Official Plugin Directory Release • WooCommerce HPOS Compatible",
      highlights: [
        { label: "Alert Latency", val: "<1s Real-time" },
        { label: "Notification Channels", val: "Email & Telegram" },
        { label: "Threshold Control", val: "Global & Per-Item" },
        { label: "WooCommerce Engine", val: "100% HPOS Native" }
      ],
      workflowTitle: "How SazStock Works: 4-Step Inventory Protection",
      workflowSubtitle: "From checkout deduction to instant pocket alarms for store managers.",
      steps: [
        {
          step: "STEP 1",
          title: "Custom Low-Stock Thresholds",
          desc: "Define global critical threshold rules (e.g. alert when < 3 units remaining) or set surgical custom thresholds for fast-moving VIP products directly on the product edit screen.",
          badge: "Threshold Matrix",
          badgeColor: "cyan",
          img: "/sazstock/screenshot-1.png",
          features: ["Global and product-level critical levels", "Custom out-of-stock safety buffers", "Simple and variation product support"]
        },
        {
          step: "STEP 2",
          title: "Atomic Stock Deduction Hook",
          desc: "Whenever an order is placed or stock levels change, SazStock evaluates remaining inventory immediately via native WooCommerce hooks without heavy periodic database scans.",
          badge: "Real-time Hook",
          badgeColor: "emerald",
          img: "/sazstock/screenshot-2.png",
          features: ["Immediate trigger on WooCommerce stock reduction", "Zero database polling overhead", "Race condition-safe atomic calculations"]
        },
        {
          step: "STEP 3",
          title: "Instant Telegram & Email Dispatches",
          desc: "Receive instant notifications in your manager or warehouse Telegram chat with SKU, product title, remaining units, and a direct 1-tap link to restock.",
          badge: "Pocket Alerts",
          badgeColor: "purple",
          img: "/sazstock/screenshot-3.png",
          features: ["Instant Telegram push alerts", "HTML email dispatches with stock badges", "Direct link to WooCommerce product restock"]
        },
        {
          step: "STEP 4",
          title: "Inventory Health Dashboard",
          desc: "View low-stock and critical items directly in a unified dashboard table inside WordPress Admin. Spot replenishment bottlenecks before customers hit an Out of Stock error.",
          badge: "Stock Radar",
          badgeColor: "amber",
          img: "/sazstock/screenshot-1.png",
          features: ["Unified low-stock radar overview", "Instant CSV export for supplier reorders", "100% On-Premise: zero third-party cloud data leak"]
        }
      ],
      architectureTitle: "Engineered for High-Frequency WooCommerce Stores",
      architectureSubtitle: "Built on clean PHP, Action Scheduler queues, and native High-Performance Order Storage.",
      features: [
        { title: "Real-Time Stock Monitoring", desc: "Hooks directly into WooCommerce stock mutations for instant alerts." },
        { title: "Instant Telegram Dispatch", desc: "Never miss a sold-out item while away from the office desk." },
        { title: "Per-Variation Control", desc: "Set individual low-stock thresholds for each size and color variation." },
        { title: "100% HPOS Native", desc: "Full compatibility with WooCommerce Custom Order Tables and HPOS." },
        { title: "Zero Database Bloat", desc: "Lightweight architecture that never slows down your checkout." },
        { title: "100% On-Premise Privacy", desc: "Your inventory data never leaves your WordPress server." }
      ]
    },
    ua: {
      badge: "🎉 ОФІЦІЙНИЙ РЕЛІЗ НА WORDPRESS.ORG • SazStock v1.0.0",
      title: "SazStock – Контроль залишків та сповіщення для WooCommerce",
      subtitle: "Запобігайте неочікуваному закінченню товарів, захищайте складські буфери та отримуйте миттєві сповіщення про критичні залишки у Telegram та на Email.",
      btnWpOrg: "Сторінка на WordPress.org",
      btnDownload: "Завантажити реліз (.zip)",
      btnBuyPro: "Купити ліцензію Pro ($49/рік)",
      downloadsNote: "🔥 Офіційно опубліковано на WordPress.org • Сумісний з WooCommerce HPOS",
      highlights: [
        { label: "Швидкість сповіщення", val: "<1 сек Реальний час" },
        { label: "Канали сповіщень", val: "Email та Telegram" },
        { label: "Контроль порогів", val: "Глобальний та для товарів" },
        { label: "Движок WooCommerce", val: "100% HPOS Native" }
      ],
      workflowTitle: "Як працює SazStock: 4 кроки контролю складу",
      workflowSubtitle: "Від списання товару при замовленні до миттєвого повідомлення у кишеню менеджера.",
      steps: [
        {
          step: "КРОК 1",
          title: "Налаштування критичних порогів залишків",
          desc: "Встановіть загальне правило (наприклад, сповіщати, коли лишилося менше 3 шт.) або задайте індивідуальні пороги для топових товарів прямо в картці товару.",
          badge: "Матриця порогів",
          badgeColor: "cyan",
          img: "/sazstock/screenshot-1.png",
          features: ["Глобальні та індивідуальні критичні рівні", "Буфер захисту від пересорту", "Підтримка простих та варіативних товарів"]
        },
        {
          step: "КРОК 2",
          title: "Миттєвий перехоплювач списання залишків",
          desc: "Щойно клієнт оформлює замовлення, плагін аналізує залишок через штатний хук WooCommerce без важких періодичних сканувань бази даних.",
          badge: "Реальний час",
          badgeColor: "emerald",
          img: "/sazstock/screenshot-2.png",
          features: ["Спрацьовує одразу при списанні залишку", "Нуль навантаження на базу даних", "Атомарний підрахунок без стану гонки"]
        },
        {
          step: "КРОК 3",
          title: "Миттєві сповіщення в Telegram та на Email",
          desc: "Отримуйте сповіщення у робочий чат або канал Telegram із зазначенням SKU, назви товару, залишку та прямого посилання на замовлення у постачальника.",
          badge: "Пуші в Telegram",
          badgeColor: "purple",
          img: "/sazstock/screenshot-3.png",
          features: ["Миттєві пуш-сповіщення у Telegram", "Форматовані Email-листи з бейджами залишків", "Пряме посилання на поповнення складу"]
        },
        {
          step: "КРОК 4",
          title: "Зведений радар стану складу",
          desc: "Зручна зведена таблиця всіх товарів, що закінчуються, прямо в адмінці WordPress. Помічайте дефіцит до того, як клієнт побачить напис 'Немає в наявності'.",
          badge: "Радар складу",
          badgeColor: "amber",
          img: "/sazstock/screenshot-1.png",
          features: ["Зручний огляд дефіцитних позицій", "Швидкий експорт для замовлення у постачальника", "100% On-Premise: дані про залишки захищені"]
        }
      ],
      architectureTitle: "Створено для активних інтернет-магазинів",
      architectureSubtitle: "Чистий PHP, черги Action Scheduler та повна підтримка High-Performance Order Storage.",
      features: [
        { title: "Моніторинг у реальному часі", desc: "Миттєва реакція на зміни залишків у замовленнях WooCommerce." },
        { title: "Миттєвий Telegram-бот", desc: "Будьте в курсі дефіциту товарів навіть за межами робочого місця." },
        { title: "Контроль кожної варіації", desc: "Окремі пороги для кожного розміру та кольору варіативного товару." },
        { title: "100% сумісність з HPOS", desc: "Повна підтримка нових швидкісних таблиць замовлень WooCommerce." },
        { title: "Нуль зайвого коду", desc: "Легка архітектура без сторонніх бібліотек, що не уповільнює сайт." },
        { title: "100% конфіденційність", desc: "Ваші комерційні дані ніколи не передаються на зовнішні хмари." }
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
              href="https://wordpress.org/plugins/sazstock-stock-alerts-for-woocommerce/" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all">
              <ExternalLink className="w-4 h-4 text-black" />
              <span>{t.btnWpOrg}</span>
            </a>

            <a 
              href="/sazstock-stock-alerts-for-woocommerce.zip" 
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
              src="/sazstock/banner-772x250.png" 
              alt="SazStock Banner" 
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold">🟢 Active on WordPress.org</span>
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
                  {lang === 'en' ? 'Key Safeguards in this Step:' : 'Ключові переваги цього кроку:'}
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
