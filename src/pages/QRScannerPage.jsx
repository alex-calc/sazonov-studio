import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Download, 
  Smartphone, 
  Send, 
  Zap, 
  Check, 
  ExternalLink, 
  Lock, 
  Star, 
  Layers, 
  Terminal, 
  MessageSquare,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2
} from '../components/Icons';

export default function QRScannerPage({ lang, onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    en: {
      badge: "OFFICIAL PLUGIN RELEASE • v2.0.0 PRO ALL-IN-ONE",
      title: "Quick QR Ticket Scanner & Telegram Gate Notifier",
      subtitle: "Turn any smartphone camera into a laser-guided access gate for clubs, VIP festivals, seminars, and exhibitions. Features W3C Screen Wake Lock, instant Telegram entrance check-ins, and anti-counterfeit duplicate alarm.",
      btnDownload: "Download Free Plugin (.zip)",
      btnBuyPro: "Get Pro License ($49/yr)",
      highlights: [
        { label: "Check-in Speed", val: "< 0.3 sec" },
        { label: "Hardware Support", val: "iOS & Android" },
        { label: "App Download", val: "0 MB (Web Camera)" },
        { label: "Anti-Fraud Alarm", val: "Real-time LED/Vibe" }
      ],
      workflowTitle: "How It Works: 4-Step Access Automation",
      workflowSubtitle: "Crystal clear architecture: from online ticket sale to instant anti-fraud protection at the event doors.",
      steps: [
        {
          step: "STEP 1",
          title: "Issue & Sell Tickets (WP Admin & WooCommerce)",
          desc: "Customer buys a ticket on WooCommerce or manager generates a VIP pass manually (e.g. Elon Musk, 50 EUR). The plugin creates a unique SVG QR code and dispatches a branded email pass.",
          badge: "WordPress Admin",
          badgeColor: "cyan",
          img: "/step1_admin.jpg",
          features: ["WooCommerce order auto-hook", "Manual VIP ticket generator", "Dynamic live status ledger (🟢 Valid / 🔴 Used)"]
        },
        {
          step: "STEP 2",
          title: "Gate Check-In (Bouncer Smartphone)",
          desc: "Security bouncer opens a private web link on any phone. Screen Wake Lock keeps the screen continuously on. Scanning takes under 1 second: emerald 'ACCESS GRANTED' hologram + sound chime.",
          badge: "0 App Downloads",
          badgeColor: "emerald",
          img: "/step2_scan_success.jpg",
          features: ["Always-on W3C Screen Wake Lock", "Cyberpunk laser reticle HUD", "Auto-rearms in 2.5s for the next guest"]
        },
        {
          step: "STEP 3",
          title: "Anti-Fraud Duplicate Detection",
          desc: "If a guest screenshots or forwards their QR ticket to friends, the second scan triggers a full-screen RED warning shield, vibration, and loud security alarm. The ticket cannot be reused.",
          badge: "Security Alarm",
          badgeColor: "rose",
          img: "/step3_scan_alarm.jpg",
          features: ["Exact previous entry timestamp", "Full-screen red visual alert", "Haptic vibration + audio siren"]
        },
        {
          step: "STEP 4",
          title: "Instant Telegram Push Notifications",
          desc: "Organizer receives instant real-time Telegram messages in their pocket: new ticket sales, live entrance check-ins, and immediate alarm alerts with the duplicate code.",
          badge: "Live Pocket Alerts",
          badgeColor: "purple",
          img: "/step4_telegram.jpg",
          features: ["Issued ticket notification with price", "Gate check-in confirmation", "Security alarm push with guest name"]
        }
      ],
      featuresTitle: "Engineered for High-Pressure Event Gates",
      features: [
        {
          title: "⚡ W3C Screen Wake Lock API",
          desc: "The phone screen never turns off, dims, or falls asleep while security staff is on duty. Continuous always-on readiness."
        },
        {
          title: "💬 Instant Telegram Gate Reports",
          desc: "Receives real-time entrance confirmations and instant duplicate fraud alarms directly in the organizer's Telegram chat."
        },
        {
          title: "🎯 Laser HUD Smartphone Viewfinder",
          desc: "Cyberpunk neon reticle with sound chime, haptic vibration, and instant green/red full-screen authorization shields."
        },
        {
          title: "🔄 Live Heartbeat Admin Ledger",
          desc: "Auto-updating tickets table in WordPress admin without requiring F5 page refreshes every time a guest checks in."
        },
        {
          title: "🎨 Self-Hosted Pure SVG QR Codes",
          desc: "Zero third-party tracking or external server dependencies. 100% private, scalable, high-speed graphic ticket generation."
        },
        {
          title: "🛒 WooCommerce & Manual Passes",
          desc: "Automatic QR generation upon successful online payment + instant manual VIP pass creation for offline guests."
        }
      ],
      pricingTitle: "Simple, Transparent Licensing",
      pricingFree: {
        title: "Community Free",
        price: "$0",
        desc: "Ideal for single events, club meetups, and small festivals.",
        items: [
          "1 Live Smartphone Door Scanner",
          "Manual Ticket Generator & SVG QR Cards",
          "Single Telegram Bot Notifications",
          "Always-On Screen Wake Lock",
          "Up to 100 tickets per event",
          "Community Support"
        ]
      },
      pricingPro: {
        title: "Commercial Pro",
        price: "$49",
        period: "/ year",
        desc: "For commercial venues, multi-gate festivals, and agencies.",
        items: [
          "Unlimited Multi-Gate Staff PINs",
          "Apple Wallet (.pkpass) Pass Integration",
          "Automated WhatsApp & SMS Pass Delivery",
          "White-Label Brand Customizer & PDF Export",
          "AI Voice VIP Audio Welcome Greetings",
          "Priority 24/7 Telegram Direct Support",
          "100% Free Lifetime Version Updates"
        ]
      },
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "Does security staff need to install any app from the App Store?",
          a: "No. The scanner runs directly in any modern mobile browser (Safari on iPhone, Chrome on Android) by simply opening a secure link. No logins or app downloads required."
        },
        {
          q: "What happens if someone tries to share or screenshot their QR ticket?",
          a: "The first scan validates the ticket and instantly burns it in the database with a timestamp. Any subsequent attempt immediately triggers a full-screen red warning with a security siren and sends an alarm to the organizer's Telegram."
        },
        {
          q: "Can I use it with my own custom WooCommerce products?",
          a: "Yes. The plugin automatically intercepts completed WooCommerce orders and attaches the electronic QR pass to the customer's email and order confirmation screen."
        }
      ]
    },
    ua: {
      badge: "ОФІЦІЙНИЙ РЕЛІЗ ПЛАГІНУ • v2.0.0 PRO ALL-IN-ONE",
      title: "Quick QR Ticket Scanner & Telegram Gate Notifier",
      subtitle: "Перетворіть камеру будь-якого смартфона на високошвидкісний лазерний турнікет для клубів, VIP-фестивалів, семінарів та виставок. Підтримує технологію W3C Screen Wake Lock, миттєві звіти проходів у Telegram та захист від підробок.",
      btnDownload: "Завантажити безкоштовно (.zip)",
      btnBuyPro: "Придбати Pro-ліцензію ($49/рік)",
      highlights: [
        { label: "Швидкість сканування", val: "< 0.3 сек" },
        { label: "Підтримка пристроїв", val: "iOS та Android" },
        { label: "Встановлення додатків", val: "0 МБ (Веб-камера)" },
        { label: "Сирена при дублікаті", val: "Світло / Вібро" }
      ],
      workflowTitle: "Як це працює: 4 прості кроки",
      workflowSubtitle: "Зрозуміло і надійно: від продажу квитка на сайті до захисту від зайців на вході та звітів у Telegram.",
      steps: [
        {
          step: "КРОК 1",
          title: "Виписка або продаж квитка (Адмінка WP та WooCommerce)",
          desc: "Клієнт купує квиток на сайті через WooCommerce або адміністратор створює VIP-проходку вручну (наприклад, Elon Musk, 50 EUR). Плагін миттєво генерує унікальний захищений SVG QR-код та надсилає квиток на email.",
          badge: "Панель WordPress",
          badgeColor: "cyan",
          img: "/step1_admin.jpg",
          features: ["Автоматична видача при оплаті", "Форма ручного створення VIP-гостей", "Жива таблиця статусів (🟢 Valid / 🔴 Used)"]
        },
        {
          step: "КРОК 2",
          title: "Контроль на вході (Смартфон охорони)",
          desc: "Охоронець відкриває секретне посилання в Safari або Chrome. Екран не засинає (W3C Wake Lock). Сканування займає менше 1 секунди: загоряється смарагдовий щит 'ПРОХІД ДОЗВОЛЕНО' та лунає приємний звук.",
          badge: "0 МБ додатків",
          badgeColor: "emerald",
          img: "/step2_scan_success.jpg",
          features: ["Незасинаючий екран охорони", "Лазерний приціл HUD", "Авто-готовність через 2.5с до наступного гостя"]
        },
        {
          step: "КРОК 3",
          title: "Захист від дублікатів та пересилки скріншотів",
          desc: "Якщо гість переслав скріншот свого квитка другу — при повторній спробі сканування телефон охорони спалахує червоним кольором, вмикається сирена тривоги та вібрація. Повторний вхід заблоковано!",
          badge: "Сирена безпеки",
          badgeColor: "rose",
          img: "/step3_scan_alarm.jpg",
          features: ["Фіксація точного часу першого входу", "Повноекранне червоне попередження", "Звукова сирена тривоги"]
        },
        {
          step: "КРОК 4",
          title: "Миттєві сповіщення в Telegram організатора",
          desc: "Організатор заходу отримує всі дані прямо в кишеню: виписані квитки з ціною, сповіщення про кожен успішний вхід та термінову тривогу при спробі пройти по дублікату.",
          badge: "Пуші в Telegram",
          badgeColor: "purple",
          img: "/step4_telegram.jpg",
          features: ["Сповіщення про продані квитки", "Звіт про прохід гостя на вході", "Сигнал тривоги з ім'ям гостя та кодом"]
        }
      ],
      featuresTitle: "Створено для Навантажених Входів та Фестивалів",
      features: [
        {
          title: "⚡ Технологія W3C Screen Wake Lock",
          desc: "Екран смартфона охорони ніколи не гасне, не тьмяніє та не блокується під час контролю на вході."
        },
        {
          title: "💬 Миттєві Telegram-звіти турнікета",
          desc: "Організатор отримує сповіщення про кожен успішний вхід або спробу пройти по чужому квитку прямо в чат Telegram."
        },
        {
          title: "🎯 Лазерний HUD-відошукач",
          desc: "Неоновий приціл зі звуковим сигналом, тактильною вібрацією та повноекранними щитами доступу (зелений/червоний)."
        },
        {
          title: "🔄 Живий пульс (Heartbeat) в адмінці",
          desc: "Таблиця квитків у WordPress оновлюється автоматично в реальному часі без необхідності оновлювати сторінку F5."
        },
        {
          title: "🎨 Автономні чисті SVG QR-коди",
          desc: "Повна конфіденційність без сторонніх серверів. Миттєва генерація чітких масштабованих векторних QR-кодів."
        },
        {
          title: "🛒 WooCommerce та ручні VIP-перепустки",
          desc: "Автоматична видача квитка після оплати на сайті + форма швидкого створення VIP-проходок для гостей."
        }
      ],
      pricingTitle: "Прозорі та Чесні Тарифи",
      pricingFree: {
        title: "Community Free",
        price: "$0",
        desc: "Для разових подій, семінарів та невеликих вечірок.",
        items: [
          "1 Мобільний веб-сканер для входу",
          "Генератор квитків та SVG QR-карток",
          "Одиночні сповіщення в Telegram",
          "Незасинаючий екран Screen Wake Lock",
          "До 100 квитків на захід",
          "Базова підтримка спільноти"
        ]
      },
      pricingPro: {
        title: "Commercial Pro",
        price: "$49",
        period: "/ рік",
        desc: "Для комерційних клубів, фестивалів та агенцій.",
        items: [
          "Необмежена кількість входів та PIN-коди охорони",
          "Інтеграція квитків у Apple Wallet (.pkpass)",
          "Автоматична відправка квитків у WhatsApp та SMS",
          "White-Label кастомізація та експорт у PDF",
          "Голосове VIP-привітання на вході через AI",
          "Пряма 24/7 підтримка розробників у Telegram",
          "100% безкоштовні оновлення назавжди"
        ]
      },
      faqTitle: "Часті Запитання",
      faqs: [
        {
          q: "Чи потрібно охороні встановлювати додаток з App Store?",
          a: "Ні. Сканер відкривається за прямим посиланням у Safari на iPhone або Chrome на Android. Жодних паролів, авторизацій чи завантажень."
        },
        {
          q: "Що станеться, якщо гість перешле скріншот квитка другу?",
          a: "Перший гість проходить успішно, і квиток миттєво 'спалюється' в базі з фіксацією точного часу. Друга спроба одразу викликає червоний сигнал тривоги та сповіщення в Telegram організатора."
        },
        {
          q: "Чи працює це з моїми товарами WooCommerce?",
          a: "Так. Плагін автоматично перехоплює сплачені замовлення WooCommerce та прикріплює електронний QR-квиток до листа покупцеві."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Product Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {t.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a 
            href="/quick-qr-ticket-scanner.zip" 
            download
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-extrabold text-base shadow-xl shadow-emerald-500/20 flex items-center gap-2 transition-all">
            <Download className="w-5 h-5 text-black" />
            <span>{t.btnDownload}</span>
          </a>
          <a 
            href="#pricing"
            className="px-8 py-4 rounded-xl glass-panel hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-bold text-base flex items-center gap-2 transition-all">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>{t.btnBuyPro}</span>
          </a>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.highlights.map((h, i) => (
            <div key={i} className="glass-panel p-4 rounded-2xl border border-white/5">
              <div className="text-2xl font-extrabold text-white font-mono">{h.val}</div>
              <div className="text-xs text-slate-400 mt-0.5">{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 4-STEP VISUAL STORYBOARD TOUR (Screenshots & Step-by-Step Breakdown) */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>REAL FIELD WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.workflowTitle}
          </h2>
          <p className="text-base text-slate-400 mt-2">
            {t.workflowSubtitle}
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {t.steps.map((s, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeStep === idx 
                  ? 'bg-slate-800/90 border-cyan-500 shadow-lg shadow-cyan-500/15' 
                  : 'glass-panel border-white/5 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}>
              <div className="text-xs font-mono font-bold text-cyan-400 mb-1">{s.step}</div>
              <div className="text-sm font-bold text-white truncate">{s.title.split('(')[0]}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-[32px] border border-cyan-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Text Description & Bullets */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {t.steps[activeStep].step}
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-slate-800 text-slate-300">
                  {t.steps[activeStep].badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.steps[activeStep].title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {t.steps[activeStep].desc}
              </p>

              <div className="space-y-2.5 pt-2">
                {t.steps[activeStep].features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button 
                  onClick={() => setActiveStep((activeStep + 1) % t.steps.length)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 transition-all">
                  <span>{lang === 'en' ? 'Next Workflow Step' : 'Наступний крок'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Right: High-Res Real Screenshot Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[520px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 group">
                <img 
                  src={t.steps[activeStep].img} 
                  alt={t.steps[activeStep].title} 
                  className="w-full h-auto max-h-[380px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-cyan-300 flex items-center justify-between">
                  <span>📷 Real Screen Capture</span>
                  <span className="text-slate-400">{t.steps[activeStep].badge}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Hero Video Showcase */}
      <div className="glass-panel p-8 sm:p-12 rounded-[36px] border border-cyan-500/30 mb-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
              <Smartphone className="w-4 h-4" />
              <span>LIVE FIELD TEST RECORDING</span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {lang === 'en' ? 'Watch Real-Time Gate Validation in Action' : 'Подивіться на живу валідацію квитка на турнікеті'}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {lang === 'en' 
                ? 'Direct screen recording from a smartphone scanning a VIP Guest pass. Notice the instant emerald authorization shield, automatic Telegram notification, and subsequent duplicate fraud detection.'
                : 'Прямий запис екрана смартфона під час сканування VIP-квитка. Зверніть увагу на миттєве смарагдове підтвердження, автоматичний звіт у Telegram та захист від повторного проходу.'}
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center justify-between text-emerald-400">
                <span>00:04 [SCAN #1]</span>
                <span>✅ ACCESS GRANTED (Elon Musk • VIP)</span>
              </div>
              <div className="flex items-center justify-between text-cyan-400">
                <span>00:14 [TELEGRAM]</span>
                <span>💬 Push Notification Delivered</span>
              </div>
              <div className="flex items-center justify-between text-rose-400">
                <span>00:18 [SCAN #2]</span>
                <span>🚨 SECURITY ALARM (Duplicate Attempt)</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://t.me/saz7771" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300">
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Request Turnkey Event Setup on Telegram' : 'Замовити налаштування турнікетів під ключ'}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 via-emerald-500/20 to-blue-600/30 rounded-[48px] blur-2xl opacity-75" />
              
              <div className="relative bg-[#020617] p-3 rounded-[40px] border-[3px] border-slate-700/80 shadow-2xl shadow-black">
                <div className="relative rounded-[32px] overflow-hidden aspect-[9/19] bg-slate-950">
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

      {/* Feature Deep Dive Grid */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.featuresTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((f, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Comparison */}
      <div id="pricing" className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.pricingTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Tier */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-slate-800 text-slate-300">FREE EDITION</span>
                <span className="text-2xl font-extrabold text-white font-mono">{t.pricingFree.price}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.pricingFree.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{t.pricingFree.desc}</p>

              <div className="space-y-3 pt-2">
                {t.pricingFree.items.map((it, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a 
                href="/quick-qr-ticket-scanner.zip" 
                download
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all">
                <Download className="w-4 h-4" />
                <span>{lang === 'en' ? 'Download Free .ZIP' : 'Завантажити безкоштовно .ZIP'}</span>
              </a>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="glass-panel p-8 rounded-3xl border-2 border-cyan-500/50 relative flex flex-col justify-between shadow-2xl shadow-cyan-500/10">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-extrabold font-mono uppercase tracking-wide">
              RECOMMENDED
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">PRO ALL-IN-ONE</span>
                <div>
                  <span className="text-3xl font-extrabold text-white font-mono">{t.pricingPro.price}</span>
                  <span className="text-xs text-slate-400 font-mono">{t.pricingPro.period}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.pricingPro.title}</h3>
              <p className="text-sm text-slate-300 mb-6">{t.pricingPro.desc}</p>

              <div className="space-y-3 pt-2">
                {t.pricingPro.items.map((it, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 stroke-[3]" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a 
                href="https://t.me/saz7771" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25">
                <Send className="w-4 h-4 text-black" />
                <span>{lang === 'en' ? 'Activate Pro License via Telegram' : 'Оформити Pro-ліцензію через Telegram'}</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center mb-10">
          {t.faqTitle}
        </h2>

        <div className="space-y-4">
          {t.faqs.map((faq, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
