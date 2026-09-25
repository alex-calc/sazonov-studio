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

export default function CODConfirmationPage({ lang, onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    en: {
      badge: "🎉 OFFICIAL WORDPRESS.ORG RELEASE • SazCOD v1.0.2",
      title: "SazCOD – COD Order Confirmation for WooCommerce",
      subtitle: "Eliminate fake Cash on Delivery orders, cut shipping returns by up to 85%, and protect warehouse inventory with automated 1-click cryptographic customer verification links.",
      btnWpOrg: "View on WordPress.org",
      btnDownload: "Download Official Release (.zip)",
      btnBuyPro: "Get Pro License ($49/yr)",
      downloadsNote: "🔥 27+ Organic Downloads in First Hour of Release",
      highlights: [
        { label: "Customer Action", val: "1 Click (No Login)" },
        { label: "Return Rate Drop", val: "-85% Returns" },
        { label: "Crypto Protection", val: "AES-256-GCM" },
        { label: "WooCommerce Engine", val: "HPOS & Block Ready" }
      ],
      workflowTitle: "How SazCOD Works: 4-Step Fraud Elimination",
      workflowSubtitle: "From checkout interception to automated warehouse processing without annoying phone calls.",
      steps: [
        {
          step: "STEP 1",
          title: "Intercept COD Checkout & Hold Order",
          desc: "When a customer selects Cash on Delivery, the plugin automatically assigns a dedicated 'Awaiting Confirmation' status and displays a confirmation notice on the Thank You page.",
          badge: "Checkout Intercept",
          badgeColor: "cyan",
          img: "/cod/01_thankyou_page_confirmation_banner.png",
          features: ["Dedicated 'Awaiting Confirmation' order status", "Clear notice on order-received page", "Prevents accidental premature warehouse packing"]
        },
        {
          step: "STEP 2",
          title: "1-Click Customer Verification Screen",
          desc: "Customer opens their secure one-click link. A clean, distraction-free card displays the order summary, items, and address with a prominent 'Confirm Cash on Delivery Order' button.",
          badge: "1-Click UX",
          badgeColor: "emerald",
          img: "/cod/02_customer_verification_screen.png",
          features: ["Full order item breakdown (e.g. sneakers / кроссовки)", "Zero login or password required", "Mobile-optimized responsive verification UI"]
        },
        {
          step: "STEP 3",
          title: "Instant Verification & Status Shift",
          desc: "Upon clicking confirmation, the token is cryptographically validated and immediately burned. The order status automatically switches to 'Processing' with green success feedback.",
          badge: "Auto-Processing",
          badgeColor: "purple",
          img: "/cod/03_order_confirmed_success.png",
          features: ["Instant shift to WooCommerce 'Processing'", "Real-time stock deduction and warehouse trigger", "Clean Post-Redirect-Get pattern prevents re-submit"]
        },
        {
          step: "STEP 4",
          title: "Anti-Replay Security & Audit Trail",
          desc: "Single-use cryptographic tokens prevent replay attacks. The customer IP address, exact verification timestamp, and user-agent are recorded in the WooCommerce order notes.",
          badge: "Audit Ledger",
          badgeColor: "rose",
          img: "/cod/07_order_audit_notes_timeline.png",
          features: ["Strict Anti-Replay: used tokens expire immediately", "Customer IP and verification timestamp logged in order notes", "Native WooCommerce order state machine compliance"]
        }
      ],
      featuresTitle: "Engineered for Serious E-Commerce Stores",
      features: [
        {
          title: "⚡ Frictionless 1-Click Verification",
          desc: "Customers do not need an account or password. One single tap on their phone confirms genuine purchase intent."
        },
        {
          title: "🔐 AES-256-GCM Crypto Tokens",
          desc: "Tamper-proof, cryptographically signed verification links with configurable expiration windows (12h, 24h, 48h)."
        },
        {
          title: "🛡️ Anti-Replay Token Burn",
          desc: "Tokens are instantly invalidated upon successful confirmation. Double clicks or reloads cannot trigger double processing."
        },
        {
          title: "🚀 WooCommerce HPOS & Blocks Ready",
          desc: "Full native support for High-Performance Order Storage (custom_order_tables) and the modern Gutenberg Cart/Checkout Blocks."
        },
        {
          title: "📝 Tamper-Proof Audit Trail",
          desc: "Full operational history logged directly into native WooCommerce order notes with customer IP address and precise UTC timestamps."
        },
        {
          title: "📦 Automated Warehouse Hand-off",
          desc: "Once confirmed, the order moves directly to Processing, triggering existing fulfillment, invoice, and courier sync pipelines."
        }
      ],
      pricingTitle: "Simple, Transparent Licensing",
      pricingFree: {
        title: "Community Core",
        price: "$0",
        desc: "Everything you need to stop fake COD orders via email confirmation.",
        items: [
          "Unlimited 1-Click Email Confirmations",
          "Dedicated 'Awaiting Confirmation' Status",
          "AES-256-GCM Cryptographic Anti-Replay",
          "WooCommerce HPOS & Blocks Compatible",
          "Customer IP & Audit Trail Logging",
          "Official WordPress.org Community Support"
        ]
      },
      pricingPro: {
        title: "Commercial Pro",
        price: "$49",
        period: "/ year",
        desc: "Multi-channel verification via SMS & Messengers with automated order cancellation.",
        items: [
          "SMS Confirmation Links (TurboSMS, Twilio, SMS Club)",
          "Instant Telegram & WhatsApp Verification Alerts",
          "Auto-Cancellation of Unconfirmed Orders (after 24h / 48h)",
          "Restock Abandoned Items Automatically",
          "Custom Branded Confirmation HTML Templates",
          "Priority 24/7 Direct Telegram Support",
          "100% Free Lifetime Version Updates"
        ]
      },
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How does this reduce returned parcels (невыкупы)?",
          a: "Most COD returns happen because customers ordered impulsively, entered fake numbers, or ordered from competitors simultaneously. Requiring a deliberate 1-click confirmation filters out 80-85% of fraudulent and uncommitted orders before shipping fees are paid."
        },
        {
          q: "Does the customer need to register an account?",
          a: "No! The confirmation link is completely password-free and frictionless. It works seamlessly for guest checkouts as well as registered customers."
        },
        {
          q: "Is SazCOD compatible with WooCommerce HPOS?",
          a: "Yes, 100%. SazCOD officially declares compatibility with High-Performance Order Storage (custom order tables) and Gutenberg Checkout Blocks."
        },
        {
          q: "What happens if a customer clicks the link twice?",
          a: "The token is burned immediately upon first execution. If clicked again, the customer safely sees a clear 'Session Expired / Already Confirmed' security notice, preventing race conditions."
        }
      ]
    },
    ua: {
      badge: "🎉 ОФІЦІЙНИЙ РЕЛІЗ НА WORDPRESS.ORG • SazCOD v1.0.2",
      title: "SazCOD – 1-клік підтвердження післяплати для WooCommerce",
      subtitle: "Захистіть свій інтернет-магазин від фейкових замовлень та відмов на пошті. Скоротіть витрати на доставку повернень до 85% завдяки автоматичній верифікації покупців в один клік.",
      btnWpOrg: "Дивитись на WordPress.org",
      btnDownload: "Завантажити офіційний .ZIP",
      btnBuyPro: "Отримати PRO ліцензію ($49/рік)",
      downloadsNote: "🔥 27+ завантажень у першу годину після публікації",
      highlights: [
        { label: "Дія покупця", val: "1 клік (без паролів)" },
        { label: "Зниження повернень", val: "до -85%" },
        { label: "Криптозахист", val: "AES-256-GCM" },
        { label: "Сумісність з WC", val: "HPOS та Blocks" }
      ],
      workflowTitle: "Як працює SazCOD: 4 кроки захисту від неробочих замовлень",
      workflowSubtitle: "Повна автоматизація: від перехоплення замовлення на сайті до автоматичної передачі на склад без нав'язливих дзвінків.",
      steps: [
        {
          step: "КРОК 1",
          title: "Перехоплення замовлення з післяплатою",
          desc: "Якщо покупець обирає 'Оплата при отриманні' (накладений платіж), плагін автоматично переводить замовлення у статус 'Очікує підтвердження' та виводить повідомлення на сторінці успішного оформлення.",
          badge: "Перехоплення",
          badgeColor: "cyan",
          img: "/cod/01_thankyou_page_confirmation_banner.png",
          features: ["Спеціальний статус 'Очікує підтвердження'", "Зрозуміле повідомлення для покупця", "Запобігає передчасному пакуванню на складі"]
        },
        {
          step: "КРОК 2",
          title: "Екран підтвердження в 1 клік",
          desc: "Покупець переходить за безпечним одноразовим посиланням. Відкривається чиста сторінка з деталями замовлення, адресою доставки та великою зеленою кнопкою 'Підтвердити замовлення'.",
          badge: "Без логінів",
          badgeColor: "emerald",
          img: "/cod/02_customer_verification_screen.png",
          features: ["Повний список замовлених товарів (напр. кросівки)", "Жодних реєстрацій чи паролів", "Зручний інтерфейс для смартфонів"]
        },
        {
          step: "КРОК 3",
          title: "Миттєве підтвердження та передача на склад",
          desc: "При натисканні кнопки токен моментально спалюється, а замовлення автоматично переходить у статус 'В обробці' (Processing). Склад отримує сигнал на відвантаження.",
          badge: "Авто-обробка",
          badgeColor: "purple",
          img: "/cod/03_order_confirmed_success.png",
          features: ["Миттєвий перехід у статус 'В обробці'", "Списання залишків та сповіщення складу", "Захист від випадкового повторного надсилання"]
        },
        {
          step: "КРОК 4",
          title: "Захист Anti-Replay та журнал аудиту",
          desc: "Одноразовий токен неможливо використати двічі. IP-адреса покупця, точний час кліку та дані сесії надійно фіксуються в примітках до замовлення WooCommerce.",
          badge: "Журнал аудиту",
          badgeColor: "rose",
          img: "/cod/07_order_audit_notes_timeline.png",
          features: ["Anti-Replay: одноразовий токен миттєво анулюється", "Фіксація IP-адреси та точного часу в примітках замовлення", "Повна відповідність стандартам безпеки WordPress"]
        }
      ],
      featuresTitle: "Створено для реального e-commerce",
      features: [
        {
          title: "⚡ Зручність для покупця в 1 клік",
          desc: "Покупцеві не потрібно реєструватись чи згадувати пароль. Одне натискання на смартфоні підтверджує серйозність намірів."
        },
        {
          title: "🔐 Криптографічні токени AES-256-GCM",
          desc: "Захищені посилання з індивідуальним часом життя (12, 24 або 48 годин), які неможливо підробити."
        },
        {
          title: "🛡️ Спалювання токена (Anti-Replay)",
          desc: "Після першого успішного підтвердження посилання стає недійсним, що виключає повторні спрацьовування чи колізії."
        },
        {
          title: "🚀 Підтримка WooCommerce HPOS та Blocks",
          desc: "Повна сумісність з High-Performance Order Storage (користувацькі таблиці замовлень) та сучасними Checkout Blocks."
        },
        {
          title: "📝 Детальний аудит у примітках замовлення",
          desc: "Кожна дія клієнта записується в історію замовлення з фіксацією IP, браузера та точного таймстемпу."
        },
        {
          title: "📦 Автоматизація роботи складу",
          desc: "Підтверджені замовлення автоматично стають 'В обробці' і одразу потрапляють у ваші CRM та логістичні системи."
        }
      ],
      pricingTitle: "Прості та прозорі тарифи",
      pricingFree: {
        title: "Базова версія (Community)",
        price: "$0",
        desc: "Все необхідне для захисту від фейкових замовлень через email-підтвердження.",
        items: [
          "Необмежена кількість Email-підтверджень",
          "Статус замовлення 'Очікує підтвердження'",
          "Криптографічний захист AES-256 Anti-Replay",
          "Сумісність з WooCommerce HPOS та Blocks",
          "Фіксація IP-адреси покупця в примітках",
          "Офіційна підтримка спільноти WordPress.org"
        ]
      },
      pricingPro: {
        title: "Комерційна версія (PRO)",
        price: "$49",
        period: "/ рік",
        desc: "Багатоканальне підтвердження через SMS та месенджери з авто-скасуванням замовлень.",
        items: [
          "SMS-підтвердження (TurboSMS, Twilio, SMS Club)",
          "Сповіщення та підтвердження у Telegram і WhatsApp",
          "Автоматичне скасування непідтверджених замовлень (через 24г / 48г)",
          "Автоматичне повернення товарів на склад",
          "Кастомізація брендованих шаблонів листів",
          "Пріоритетна пряма підтримка 24/7 у Telegram",
          "Безкоштовні оновлення на весь період ліцензії"
        ]
      },
      faqTitle: "Часті запитання",
      faqs: [
        {
          q: "Як це реально скорочує повернення товарів на пошті?",
          a: "Більшість відмов стаються через імпульсивні або фейкові замовлення, або коли клієнт замовив товар у кількох магазинах одночасно. Проста вимога підтвердити замовлення в 1 клік відсікає до 85% таких замовлень ще до того, як ви оплатите доставку перевізнику."
        },
        {
          q: "Чи обов'язково клієнту мати акаунт на сайті?",
          a: "Ні! Посилання для підтвердження працює ідеально як для зареєстрованих користувачів, так і для покупок без реєстрації (Guest Checkout)."
        },
        {
          q: "Чи підтримується новий HPOS у WooCommerce?",
          a: "Так, на 100%. SazCOD повністю відповідає стандарту High-Performance Order Storage та новим Checkout Blocks."
        },
        {
          q: "Що станеться, якщо покупець клікне посилання двічі?",
          a: "Токен спалюється при першому переході. При повторному натисканні клієнт бачить повідомлення про те, що замовлення вже успішно підтверджено."
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

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
          {t.subtitle}
        </p>

        {/* Live Downloads Counter Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold mb-8 shadow-lg shadow-emerald-500/10">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{t.downloadsNote}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <a 
            href="https://wordpress.org/plugins/sazcod-order-confirmation-for-woocommerce/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-extrabold text-base shadow-xl shadow-emerald-500/20 flex items-center gap-2 transition-all">
            <ExternalLink className="w-5 h-5 text-black" />
            <span>{t.btnWpOrg}</span>
          </a>
          <a 
            href="/sazcod-order-confirmation-for-woocommerce.zip" 
            download
            className="px-6 py-4 rounded-xl glass-panel hover:bg-slate-800 border border-emerald-500/40 text-emerald-300 font-bold text-base flex items-center gap-2 transition-all">
            <Download className="w-5 h-5 text-emerald-400" />
            <span>{t.btnDownload}</span>
          </a>
          <a 
            href="#pricing"
            className="px-6 py-4 rounded-xl glass-panel hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-bold text-base flex items-center gap-2 transition-all">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>{t.btnBuyPro}</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-12">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{lang === 'en' ? 'Verified WordPress.org Publisher:' : 'Перевірений автор WordPress.org:'}</span>
          <a 
            href="https://profiles.wordpress.org/alexsazonov/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-400 hover:text-cyan-300 font-mono underline inline-flex items-center gap-1">
            alexsazonov <ExternalLink className="w-3 h-3 inline" />
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

      {/* Official Banner Hero Showcase */}
      <div className="mb-20 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-950">
        <img 
          src="/cod/banner-1544x500.png" 
          alt="SazCOD WordPress.org Banner" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 🌟 4-STEP VISUAL STORYBOARD TOUR */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30 mb-3">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {t.steps.map((s, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all ${
                activeStep === idx 
                  ? 'bg-slate-800/95 border-emerald-500 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-500/40' 
                  : 'glass-panel border-white/5 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}>
              <span className="text-[10px] sm:text-xs font-mono font-bold block text-emerald-400 mb-0.5 sm:mb-1">
                {s.step}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white block line-clamp-1">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="glass-panel p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                  {t.steps[activeStep].step}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {t.steps[activeStep].badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {t.steps[activeStep].title}
              </h3>

              {/* Mobile-Only Screenshot Frame */}
              <div className="lg:hidden my-4">
                <div className="relative w-full max-h-[300px] flex items-center justify-center p-2 rounded-xl overflow-hidden border border-emerald-500/30 shadow-xl bg-[#020617]">
                  <img 
                    src={t.steps[activeStep].img} 
                    alt={t.steps[activeStep].title} 
                    className="max-h-[280px] w-auto max-w-full object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t.steps[activeStep].desc}
              </p>

              <div className="space-y-2 pt-2">
                {t.steps[activeStep].features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop-Only Screenshot Frame */}
            <div className="hidden lg:flex lg:col-span-6 justify-center">
              <div className="relative w-full max-w-[540px] h-[400px] flex items-center justify-center p-3 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-[#020617] group">
                <img 
                  src={t.steps[activeStep].img} 
                  alt={t.steps[activeStep].title} 
                  className="max-h-full max-w-full object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-4 right-4 text-[11px] font-mono text-emerald-400 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800 flex items-center justify-between pointer-events-none">
                  <span>📷 Live TasteWP Capture</span>
                  <span className="text-slate-300 font-bold">{t.steps[activeStep].badge}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENGINEERED RELIABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.featuresTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((f, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="mb-24 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.pricingTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                {t.pricingFree.title}
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold text-white font-mono">{t.pricingFree.price}</span>
                <span className="text-sm text-slate-400">/ forever</span>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                {t.pricingFree.desc}
              </p>
              <div className="space-y-3 mb-8">
                {t.pricingFree.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a 
              href="https://wordpress.org/plugins/sazcod-order-confirmation-for-woocommerce/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center border border-white/10 transition-all flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <span>{t.btnWpOrg}</span>
            </a>
          </div>

          {/* Pro Tier */}
          <div className="glass-panel p-8 rounded-3xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-mono font-extrabold uppercase tracking-wider shadow-md">
              Recommended
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                {t.pricingPro.title}
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold text-white font-mono">{t.pricingPro.price}</span>
                <span className="text-sm text-slate-400">{t.pricingPro.period}</span>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                {t.pricingPro.desc}
              </p>
              <div className="space-y-3 mb-8">
                {t.pricingPro.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a 
              href="https://t.me/saz7771"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-extrabold text-sm text-center shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              <span>{lang === 'en' ? 'Get Pro Access via Telegram' : 'Отримати PRO через Telegram'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-24 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950 text-purple-400 text-xs font-mono font-bold border border-purple-500/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {t.faqTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faqs.map((f, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-400" />
                <span>{f.q}</span>
              </h3>
              <p className="text-sm text-slate-300 pl-6 leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          {lang === 'en' ? 'Stop Losing Money on COD Returns Today' : 'Зупиніть збитки на неробочих замовленнях вже сьогодні'}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
          {lang === 'en'
            ? 'Install the official release from WordPress.org in under 2 minutes. Free forever core with clean PHP 8.3 architecture.'
            : 'Встановіть офіційний реліз з каталогу WordPress.org менш ніж за 2 хвилини. Бездоганна архітектура PHP 8.3 та безкоштовне базове ядро.'}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://wordpress.org/plugins/sazcod-order-confirmation-for-woocommerce/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-black" />
            <span>{t.btnWpOrg}</span>
          </a>
          <button 
            onClick={() => onNavigate('/')}
            className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all">
            {lang === 'en' ? 'Explore Other Studio Plugins' : 'Всі плагіни студії'}
          </button>
        </div>
      </div>

    </div>
  );
}
