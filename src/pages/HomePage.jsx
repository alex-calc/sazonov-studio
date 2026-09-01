import React, { useState } from 'react';
import { 
  QrCode, 
  Send, 
  Smartphone, 
  Zap, 
  Layers, 
  ExternalLink, 
  Download, 
  MessageSquare, 
  Terminal, 
  Lock, 
  ChevronRight, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2 
} from '../components/Icons';

export default function HomePage({ lang, onNavigate }) {
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', contact: '', service: 'Quick QR Ticket Scanner Pro Setup', details: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const content = {
    en: {
      hero: {
        badge: "⚡ COMMERCIAL WORDPRESS MICRO-SAAS STUDIO • 2026",
        titleStart: "Engineering High-Velocity",
        titleHighlight: "WordPress Plugins",
        titleEnd: "& Access Automation",
        subtitle: "We build razor-sharp, zero-bloat WordPress & WooCommerce extensions, instant Telegram messenger dispatchers, and mobile laser QR turnstiles for event organizers and B2B enterprises.",
        ctaPrimary: "Explore Flagship Plugins",
        ctaSecondary: "Order Custom Plugin ($300 - $1,500)",
        metrics: [
          { label: "Freelancehunt Rating", value: "5.0 ⭐" },
          { label: "Active Project Fliks", value: "554 Fliks" },
          { label: "Safe Escrow Delivery", value: "100%" },
          { label: "Hardware Support", value: "iOS / Android" }
        ]
      },
      workflowTitle: "How It Works: 4-Step Access Automation",
      workflowSubtitle: "From selling tickets online to instant duplicate fraud alarm at the door.",
      steps: [
        {
          step: "STEP 1",
          title: "Issue & Sell Tickets (WP Admin & WooCommerce)",
          desc: "Customer buys a ticket on WooCommerce or manager generates a VIP pass manually (e.g. Elon Musk, 50 EUR). The plugin creates a unique SVG QR code and dispatches a branded email pass.",
          badge: "WordPress Admin",
          img: "/step1_admin.jpg",
          features: ["WooCommerce order auto-hook", "Manual VIP ticket generator", "Dynamic live status ledger (🟢 Valid / 🔴 Used)"]
        },
        {
          step: "STEP 2",
          title: "Gate Check-In (Bouncer Smartphone)",
          desc: "Security bouncer opens a private web link on any phone. Screen Wake Lock keeps the screen continuously on. Scanning takes under 1 second: emerald 'ACCESS GRANTED' hologram + sound chime.",
          badge: "0 App Downloads",
          img: "/step2_scan_success.jpg",
          features: ["Always-on W3C Screen Wake Lock", "Cyberpunk laser reticle HUD", "Auto-rearms in 2.5s for next guest"]
        },
        {
          step: "STEP 3",
          title: "Anti-Fraud Duplicate Detection",
          desc: "If a guest screenshots or forwards their QR ticket to friends, the second scan triggers a full-screen RED warning shield, vibration, and loud security alarm. The ticket cannot be reused.",
          badge: "Security Alarm",
          img: "/step3_scan_alarm.jpg",
          features: ["Exact previous entry timestamp", "Full-screen red visual alert", "Haptic vibration + audio siren"]
        },
        {
          step: "STEP 4",
          title: "Instant Telegram Push Notifications",
          desc: "Organizer receives instant real-time Telegram messages in their pocket: new ticket sales, live entrance check-ins, and immediate alarm alerts with the duplicate code.",
          badge: "Live Pocket Alerts",
          img: "/step4_telegram.jpg",
          features: ["Issued ticket notification with price", "Gate check-in confirmation", "Security alarm push with guest name"]
        }
      ],
      productsTitle: "Commercial Plugin Suite",
      productsSubtitle: "Each plugin features dedicated architectural documentation, live test sandboxes, and clean PHP 8.3 & React codebases.",
      products: [
        {
          id: "quick-qr-scanner",
          name: "Quick QR Ticket Scanner & Gate Pass Pro",
          badge: "Ready v2.0.0",
          badgeColor: "emerald",
          category: "Events & Access Control",
          desc: "Full-cycle digital entry control with mobile laser viewfinder, W3C Screen Wake Lock, instant Telegram gate check-ins, and anti-counterfeit ledger.",
          price: "$49 / year",
          link: "/plugins/quick-qr-scanner"
        },
        {
          id: "messenger-dispatcher",
          name: "Instant Messenger Order Dispatcher Pro",
          badge: "Releasing Sept 15",
          badgeColor: "cyan",
          category: "E-Commerce Automation",
          desc: "Automated WooCommerce order dispatching directly to Telegram & WhatsApp with interactive 1-click status change buttons and courier routing.",
          price: "$39 / year",
          link: "/plugins/quick-qr-scanner"
        },
        {
          id: "deposit-payments",
          name: "Self-Hosted Partial Deposit & Booking Payments",
          badge: "Releasing Oct 1",
          badgeColor: "purple",
          category: "Fintech & Bookings",
          desc: "Eliminate 5% SaaS booking fees. Direct partial deposit and balance collection with Stripe, Apple Pay, PayPal & Monobank.",
          price: "$59 / year",
          link: "/plugins/quick-qr-scanner"
        },
        {
          id: "volume-discounts",
          name: "Smart Tiered B2B Volume Discount Table",
          badge: "Releasing Oct 15",
          badgeColor: "amber",
          category: "B2B Wholesale",
          desc: "Dynamic live tier pricing matrix on product pages with instant AJAX subtotal recalculation for wholesale bulk orders.",
          price: "$45 / year",
          link: "/plugins/quick-qr-scanner"
        }
      ],
      servicesTitle: "Turnkey Studio Development Services",
      servicesSubtitle: "Need bespoke turnstiles, private CRM sync, or custom plugin engineering? We build high-load solutions under 100% Safe Escrow protection.",
      services: [
        {
          title: "Custom WooCommerce & Plugin Engineering",
          desc: "Architecture of bespoke plugins, HPOS custom database tables, payment gateway adapters, and REST API microservices.",
          price: "from $300"
        },
        {
          title: "Telegram & WhatsApp Business Dispatchers",
          desc: "Direct bot integration for warehouse staff, courier routing, managers, and live order approvals without opening WP-Admin.",
          price: "from $250"
        },
        {
          title: "SERM & Competitor Doorway Network Audits",
          desc: "Technical reverse-engineering of competitor spam networks, duplicate location footprints, and official Google complaint dossiers.",
          price: "from $200"
        },
        {
          title: "CRM & ERP High-Speed Sync (1C / KeyCRM / SalesDrive)",
          desc: "Real-time non-blocking order, stock, and customer deduplication pipelines with Action Scheduler asynchronous queues.",
          price: "from $350"
        }
      ]
    },
    ua: {
      hero: {
        badge: "⚡ СТУДІЯ КОМЕРЦІЙНИХ ПЛАГІНІВ WORDPRESS • 2026",
        titleStart: "Інженерія Швидкісних",
        titleHighlight: "Плагінів WordPress",
        titleEnd: "та Автоматизації Доступу",
        subtitle: "Ми розробляємо бездоганні комерційні розширення для WordPress та WooCommerce, миттєві Telegram-диспетчери замовлень та мобільні лазерні турнікети для організаторів подій та B2B бізнесу.",
        ctaPrimary: "Каталог флагманських плагінів",
        ctaSecondary: "Замовити кастомну розробку ($300 - $1,500)",
        metrics: [
          { label: "Рейтинг на Freelancehunt", value: "5.0 ⭐" },
          { label: "Активні фліки", value: "554 Fliks" },
          { label: "Виконання через Сейф", value: "100%" },
          { label: "Підтримка пристроїв", value: "iOS / Android" }
        ]
      },
      workflowTitle: "Як це працює: 4 прості кроки",
      workflowSubtitle: "Зрозуміло і надійно: від продажу квитка на сайті до захисту від зайців на вході та звітів у Telegram.",
      steps: [
        {
          step: "КРОК 1",
          title: "Виписка або продаж квитка (Адмінка WP та WooCommerce)",
          desc: "Клієнт купує квиток на сайті через WooCommerce або адміністратор створює VIP-проходку вручну (наприклад, Elon Musk, 50 EUR). Плагін миттєво генерує унікальний захищений SVG QR-код та надсилає квиток на email.",
          badge: "Панель WordPress",
          img: "/step1_admin.jpg",
          features: ["Автоматична видача при оплаті", "Форма ручного створення VIP-гостей", "Жива таблиця статусів (🟢 Valid / 🔴 Used)"]
        },
        {
          step: "КРОК 2",
          title: "Контроль на вході (Смартфон охорони)",
          desc: "Охоронець відкриває секретне посилання в Safari або Chrome. Екран не засинає (W3C Wake Lock). Сканування займає менше 1 секунди: загоряється смарагдовий щит 'ПРОХІД ДОЗВОЛЕНО' та лунає приємний звук.",
          badge: "0 МБ додатків",
          img: "/step2_scan_success.jpg",
          features: ["Незасинаючий екран охорони", "Лазерний приціл HUD", "Авто-готовність через 2.5с до наступного гостя"]
        },
        {
          step: "КРОК 3",
          title: "Захист від дублікатів та пересилки скріншотів",
          desc: "Якщо гість переслав скріншот свого квитка другу — при повторній спробі сканування телефон охорони спалахує червоним кольором, вмикається сирена тривоги та вібрація. Повторний вхід заблоковано!",
          badge: "Сирена безпеки",
          img: "/step3_scan_alarm.jpg",
          features: ["Фіксація точного часу першого входу", "Повноекранне червоне попередження", "Звукова сирена тривоги"]
        },
        {
          step: "КРОК 4",
          title: "Миттєві сповіщення в Telegram організатора",
          desc: "Організатор заходу отримує всі дані прямо в кишеню: виписані квитки з ціною, сповіщення про кожен успішний вхід та термінову тривогу при спробі пройти по дублікату.",
          badge: "Пуші в Telegram",
          img: "/step4_telegram.jpg",
          features: ["Сповіщення про продані квитки", "Звіт про прохід гостя на вході", "Сигнал тривоги з ім'ям гостя та кодом"]
        }
      ],
      productsTitle: "Комерційна Лінійка Плагінів",
      productsSubtitle: "Для кожного плагіна ми створюємо окрему сторінку з детальною архітектурою, живими демо та чистим кодом PHP 8.3.",
      products: [
        {
          id: "quick-qr-scanner",
          name: "Quick QR Ticket Scanner & Gate Pass Pro",
          badge: "Готово v2.0.0",
          badgeColor: "emerald",
          category: "Події та Контроль Входу",
          desc: "Повний цикл цифрового контролю входу з лазерним прицілом, незасинаючим екраном Screen Wake Lock та миттєвими звітами у Telegram.",
          price: "$49 / рік",
          link: "/plugins/quick-qr-scanner"
        },
        {
          id: "messenger-dispatcher",
          name: "Instant Messenger Order Dispatcher Pro",
          badge: "Реліз 15 вересня",
          badgeColor: "cyan",
          category: "E-Commerce Автоматизація",
          desc: "Автоматична відправка замовлень з WooCommerce у Telegram та WhatsApp з інтерактивними кнопками зміни статусів.",
          price: "$39 / рік",
          link: "/plugins/quick-qr-scanner"
        },
        {
          id: "deposit-payments",
          name: "Self-Hosted Partial Deposit & Booking Payments",
          badge: "Реліз 1 жовтня",
          badgeColor: "purple",
          category: "Фінтех та Бронювання",
          desc: "Економія 5% комісій сторонніх сервісів. Прийом передоплати та решти через Stripe, Apple Pay, PayPal та Monobank.",
          price: "$59 / рік",
          link: "/plugins/quick-qr-scanner"
        },
        {
          id: "volume-discounts",
          name: "Smart Tiered B2B Volume Discount Table",
          badge: "Реліз 15 жовтня",
          badgeColor: "amber",
          category: "B2B Опт",
          desc: "Динамічна таблиця оптових знижок на сторінці товару з миттєвим AJAX-перерахунком вартості партії.",
          price: "$45 / рік",
          link: "/plugins/quick-qr-scanner"
        }
      ],
      servicesTitle: "Послуги Студії Під Ключ",
      servicesSubtitle: "Потрібна інтеграція з турнікетами, підключення CRM або кастомний плагін? Розробляємо високонавантажені системи зі 100% гарантією Сейфу.",
      services: [
        {
          title: "Кастомні плагіни WooCommerce та розширення",
          desc: "Архітектура плагінів, власні таблиці HPOS, кастомні платіжні шлюзи та мікросервіси REST API.",
          price: "від $300"
        },
        {
          title: "Telegram та WhatsApp боти-диспетчери",
          desc: "Пряма інтеграція ботів для складів, кур'єрів та менеджерів без необхідності заходити в адмінку сайту.",
          price: "від $250"
        },
        {
          title: "SERM та технічний аудит спам-мереж конкурентів",
          desc: "Реверс-інжиніринг сіток дорвеїв конкурентів, доказова база дублікатів та офіційні пакети претензій до Google.",
          price: "від $200"
        },
        {
          title: "Високошвидкісна синхронізація з CRM (1C / KeyCRM / SalesDrive)",
          desc: "Неблокуючі пайплайни обміну замовленнями, залишками та дедуплікації на базі черг Action Scheduler.",
          price: "від $350"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-wide mb-8">
          <Zap className="w-3.5 h-3.5 animate-pulse" />
          <span>{t.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          {t.hero.titleStart}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            {t.hero.titleHighlight}
          </span>{" "}
          {t.hero.titleEnd}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={() => onNavigate('/plugins/quick-qr-scanner')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-base shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all">
            <Smartphone className="w-5 h-5 text-black" />
            <span>{lang === 'en' ? 'Open Flagship Scanner Page' : 'Відкрити сторінку QR-сканера'}</span>
          </button>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel hover:bg-slate-800/80 border border-white/10 text-white font-bold text-base flex items-center justify-center gap-2 transition-all">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {t.hero.metrics.map((m, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-2xl border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 font-mono">{m.value}</div>
              <div className="text-xs text-slate-400 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 4-STEP VISUAL STORYBOARD TOUR (Real Screenshots & Step-by-Step Breakdown) */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.workflowTitle}
          </h2>
          <p className="text-base text-slate-400 mt-2">
            {t.workflowSubtitle}
          </p>
        </div>

        {/* Step Navigation Tabs (Compact & Responsive) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {t.steps.map((s, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all ${
                activeStep === idx 
                  ? 'bg-slate-800/95 border-cyan-500 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-500/40' 
                  : 'glass-panel border-white/5 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}>
              <div className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 mb-0.5 sm:mb-1">{s.step}</div>
              <div className="text-xs sm:text-sm font-bold text-white truncate">{s.tab || s.title.split('(')[0]}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card (Mobile-First Visual Flow) */}
        <div className="glass-panel p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] border border-cyan-500/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-mono font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {t.steps[activeStep].step}
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-slate-800 text-slate-300">
                  {t.steps[activeStep].badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                {t.steps[activeStep].title}
              </h3>

              {/* 📱 Mobile-Only Screenshot Preview: Displayed directly under title on smartphones! */}
              <div className="block lg:hidden my-3">
                <div className="relative w-full h-[220px] sm:h-[280px] flex items-center justify-center p-2 rounded-xl overflow-hidden border border-cyan-500/30 shadow-xl bg-[#020617]">
                  <img 
                    src={t.steps[activeStep].img} 
                    alt={t.steps[activeStep].title} 
                    className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                  />
                  <div className="absolute bottom-1.5 left-2 right-2 text-[10px] font-mono text-cyan-400 bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800 flex items-center justify-between pointer-events-none">
                    <span>📷 Real Field Capture</span>
                    <span className="text-slate-300 font-bold">{t.steps[activeStep].badge}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                {t.steps[activeStep].desc}
              </p>

              <div className="space-y-2 pt-1">
                {t.steps[activeStep].features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button 
                  onClick={() => onNavigate('/plugins/quick-qr-scanner')}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20">
                  <span>{lang === 'en' ? 'Open Full Scanner Page' : 'Детальна сторінка плагіну'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 💻 Desktop-Only Screenshot Frame (Side-by-Side) */}
            <div className="hidden lg:flex lg:col-span-6 justify-center">
              <div className="relative w-full max-w-[520px] h-[380px] flex items-center justify-center p-3 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-[#020617] group">
                <img 
                  src={t.steps[activeStep].img} 
                  alt={t.steps[activeStep].title} 
                  className="max-h-full max-w-full object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-4 right-4 text-[11px] font-mono text-cyan-400 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800 flex items-center justify-between pointer-events-none">
                  <span>📷 Real Field Capture</span>
                  <span className="text-slate-300 font-bold">{t.steps[activeStep].badge}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Flagship Showroom Preview Section with Video */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="glass-panel p-8 sm:p-12 rounded-[36px] border border-cyan-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
                <span>FEATURED PRODUCT • v2.0.0 PRO READY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Quick QR Ticket Scanner & Gate Pass Pro
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'Complete access control suite for events, VIP parties, and exhibitions. Works on any mobile phone browser with W3C Screen Wake Lock and live Telegram check-in reporting.'
                  : 'Повна система контролю доступу для фестивалів, VIP-вечірок та семінарів. Працює в будь-якому мобільному браузері з незасинаючим екраном та звітами в Telegram.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate('/plugins/quick-qr-scanner')}
                  className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all">
                  <span>{lang === 'en' ? 'View Dedicated Landing Page' : 'Окрема сторінка плагіну'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="/quick-qr-ticket-scanner.zip" 
                  download
                  className="px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800 border border-white/10 text-white font-bold text-sm flex items-center gap-2 transition-all">
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'en' ? 'Direct .ZIP Download' : 'Завантажити .ZIP'}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
                <div className="absolute -inset-3 bg-cyan-500/20 rounded-[36px] blur-xl opacity-75" />
                <div className="relative bg-[#020617] p-2.5 rounded-[32px] border-2 border-slate-700 shadow-2xl">
                  <div className="rounded-[24px] overflow-hidden aspect-[9/19] bg-slate-950">
                    <video 
                      src="/scanner-demo.mp4" 
                      poster="/scanner-poster.jpg"
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Individual Plugin Cards Section */}
      <section id="products" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'CATALOG' : 'КАТАЛОГ'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.productsTitle}
          </h2>
          <p className="text-base text-slate-400 mt-3">
            {t.productsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.products.map((prod) => (
            <div 
              key={prod.id} 
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {prod.category}
                  </span>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
                    prod.badgeColor === 'emerald' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' :
                    prod.badgeColor === 'cyan' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' :
                    prod.badgeColor === 'purple' ? 'bg-purple-950 text-purple-400 border border-purple-500/30' :
                    'bg-amber-950 text-amber-400 border border-amber-500/30'
                  }`}>
                    {prod.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {prod.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {prod.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Pro License</span>
                  <span className="text-lg font-bold text-white font-mono">{prod.price}</span>
                </div>
                <button 
                  onClick={() => onNavigate('/plugins/quick-qr-scanner')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-black text-sm font-bold text-cyan-400 transition-all">
                  <span>{lang === 'en' ? 'Open Product Page' : 'Окрема сторінка'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'B2B SERVICES' : 'ПОСЛУГИ'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-base text-slate-400 mt-3">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.map((svc, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                  <span className="text-sm font-bold text-emerald-400 font-mono bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30 shrink-0 ml-2">
                    {svc.price}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">100% Safe Escrow Guarantee</span>
                <a href="#contact" className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1">
                  <span>{lang === 'en' ? 'Request Proposal' : 'Замовити розрахунок'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
        <div className="glass-panel p-8 sm:p-12 rounded-[32px] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold mb-3">
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'DIRECT INQUIRY' : 'ПРЯМА ЗАЯВКА'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'en' ? "Let's Build Your Next Project" : 'Обговоримо ваш проєкт'}
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              {lang === 'en' 
                ? 'Submit your project details or message on Telegram. All projects backed by 100% Safe Escrow protection.' 
                : 'Заповніть форму або напишіть нам у Telegram. Всі угоди захищені 100% гарантією Сейфу.'}
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Inquiry Dispatched Successfully!</h3>
              <p className="text-sm text-slate-300">We will respond within 15 minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">{lang === 'en' ? 'Your Name' : "Ваше ім'я"}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. John Miller" 
                    className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">{lang === 'en' ? 'Telegram @handle or Email' : 'Telegram @нік або Email'}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    placeholder="@telegram_handle or name@company.com" 
                    className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">{lang === 'en' ? 'Project Type' : 'Напрямок проєкту'}</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors">
                  <option value="Quick QR Tickets Pro Setup">🎟️ Quick QR Ticket Scanner Pro Setup ($49 - $300)</option>
                  <option value="Instant Messenger Order Dispatcher">⚡ Instant Messenger Order Dispatcher ($250 - $450)</option>
                  <option value="Custom WooCommerce Plugin Engineering">🛠️ Custom WooCommerce Plugin Engineering ($300 - $1,500)</option>
                  <option value="CRM & ERP Synchronization">🔄 CRM & ERP Synchronization (KeyCRM / 1C / SalesDrive)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">{lang === 'en' ? 'Project Details' : 'Деталі задачі'}</label>
                <textarea 
                  rows={4} 
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  placeholder="Share details about your site, event date, or custom feature request..." 
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm tracking-wide shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
                <Send className="w-4 h-4 text-black" />
                <span>{lang === 'en' ? 'Send Project Inquiry' : 'Надіслати запит на розрахунок'}</span>
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Safe Escrow Protected</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Avg Response Time: &lt; 15 mins</span>
            </span>
            <a 
              href="https://t.me/saz7771" 
              target="_blank" 
              rel="noreferrer" 
              className="text-cyan-400 hover:underline font-mono">
              {lang === 'en' ? 'Direct Telegram Support' : 'Прямий зв’язок у Telegram'}
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
