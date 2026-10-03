import React, { useState } from 'react';
import { 
  Send, 
  Download, 
  Zap, 
  Check, 
  ExternalLink, 
  Lock, 
  Layers, 
  Terminal, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from '../components/Icons';

export default function OrderNotifierPage({ lang, onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    en: {
      badge: "🎉 OFFICIAL WORDPRESS.ORG RELEASE • v1.0.2",
      title: "Saz Order Notifier with Telegram for WooCommerce",
      subtitle: "Instant WooCommerce order notification cards in Telegram with interactive 1-tap Confirm & Cancel inline buttons. 100% Day-1 HPOS compatible with zero external dependencies.",
      btnWpOrg: "View on WordPress.org",
      btnDownload: "Download Official Release (.zip)",
      btnBuyPro: "Explore Upcoming Pro ($39/yr)",
      downloadsNote: "🔥 Officially Approved & Live in the WordPress.org Directory",
      highlights: [
        { label: "Delivery Speed", val: "Instant (< 1s)" },
        { label: "Order Actions", val: "1-Tap Buttons" },
        { label: "Race-Condition", val: "Atomic MySQL Lock" },
        { label: "WooCommerce Engine", val: "HPOS & Block Ready" }
      ],
      workflowTitle: "How Saz Order Notifier Works: 3-Step Flow",
      workflowSubtitle: "From checkout trigger to one-tap warehouse confirmation straight inside Telegram.",
      steps: [
        {
          step: "STEP 1",
          title: "Instant Telegram Order Card",
          desc: "The moment a customer completes checkout, a rich HTML order notification card arrives in your Telegram chat, group, or channel with customer details and purchased items.",
          badge: "Real-Time Push",
          badgeColor: "cyan",
          img: "/telegram/screenshot-2.png",
          features: ["Full customer billing & shipping breakdown", "Itemized product list with line quantities", "Inline [ Confirm ] and [ Cancel ] action buttons"]
        },
        {
          step: "STEP 2",
          title: "1-Tap Inline Confirmation & Cancellation",
          desc: "Store managers tap 'Confirm' directly inside Telegram. The order status instantly updates to 'Processing' in WooCommerce, protected by database-level atomic locks.",
          badge: "Inline Webhook",
          badgeColor: "emerald",
          img: "/telegram/screenshot-3.png",
          features: ["Audit badge: Confirmed by @username", "Instant status transition without opening WP Admin", "Direct 'Open in Admin' one-click link"]
        },
        {
          step: "STEP 3",
          title: "Hardened Admin Dashboard & Delivery Logs",
          desc: "Dedicated WooCommerce settings tab to configure your Bot Token, Chat ID, and 1-click webhook registration. Includes live test messages and a rolling delivery log.",
          badge: "Clean Admin",
          badgeColor: "purple",
          img: "/telegram/screenshot-1.png",
          features: ["1-Click Telegram Webhook auto-registration", "Instant 'Send Test Message' connection verification", "Audit log tracking the last 50 delivered alerts"]
        }
      ],
      archTitle: "Enterprise Engineering & Zero Bloat",
      archSubtitle: "Why Saz Order Notifier outclasses legacy monolithic notification plugins.",
      features: [
        {
          title: "100% Zero External Dependencies",
          desc: "Built entirely with native WordPress HTTP APIs (wp_remote_post). Zero bulky Composer dependencies, zero vendor lock-in, and zero background Node daemons.",
          icon: Zap
        },
        {
          title: "Atomic Concurrency Lock",
          desc: "Engineered with row-level conditional MySQL atomic locks. Prevents double-clicks or conflicting actions when multiple store managers tap simultaneously.",
          icon: Lock
        },
        {
          title: "Direct Server-to-Telegram Security",
          desc: "Your data travels directly from your web host to Telegram over HTTPS. No 3rd-party cloud relays, no data leaks, with X-Telegram-Bot-Api-Secret-Token validation.",
          icon: ShieldCheck
        },
        {
          title: "High-Performance Order Storage (HPOS)",
          desc: "Full native compatibility with WooCommerce Custom Order Tables and Block-based Checkout. Zero legacy wp_posts queries.",
          icon: Layers
        }
      ],
      faqs: [
        {
          q: "Does this plugin work with Telegram Groups and Supergroups?",
          a: "Yes! You can enter a personal Telegram user ID (e.g. 123456789) or a group/supergroup ID (e.g. -100123456789). Just ensure your bot is added as an administrator to the group."
        },
        {
          q: "Do I need to leave my WordPress admin open to receive alerts?",
          a: "No. The plugin operates autonomously on the server side. Whenever an order hook fires, a direct HTTPS request is dispatched to Telegram Bot API."
        },
        {
          q: "How does the 1-tap Confirm & Cancel button work?",
          a: "When you click 'Register Webhook' in the plugin settings, WordPress registers your site URL with Telegram. When you tap a button, Telegram sends an encrypted callback query to your site to change the status."
        },
        {
          q: "Is it really free on WordPress.org?",
          a: "Yes! Saz Order Notifier is 100% open-source under GPLv2 and available for free in the official WordPress.org Plugin Directory."
        }
      ],
      ctaTitle: "Ready to control your store from Telegram?",
      ctaSubtitle: "Download the official release from WordPress.org and start managing orders in under 3 minutes."
    },
    ua: {
      badge: "🎉 ОФІЦІЙНИЙ РЕЛІЗ НА WORDPRESS.ORG • v1.0.2",
      title: "Saz Order Notifier with Telegram для WooCommerce",
      subtitle: "Миттєві картки замовлень WooCommerce у Telegram з інтерактивними кнопками підтвердження та скасування в 1 клік. 100% сумісність з HPOS без сторонніх залежностей.",
      btnWpOrg: "Сторінка на WordPress.org",
      btnDownload: "Завантажити релізний .zip",
      btnBuyPro: "Дізнатися про Pro-версію ($39/рік)",
      downloadsNote: "🔥 Офіційно схвалено та опубліковано в каталозі WordPress.org",
      highlights: [
        { label: "Швидкість", val: "Миттєво (< 1с)" },
        { label: "Керування", val: "Кнопки в 1 клік" },
        { label: "Блокування", val: "Атомарний MySQL лок" },
        { label: "Двигун WC", val: "HPOS та Blocks" }
      ],
      workflowTitle: "Як працює Saz Order Notifier: 3 прості кроки",
      workflowSubtitle: "Від чекауту покупця до підтвердження менеджером просто з кишені в Telegram.",
      steps: [
        {
          step: "КРОК 1",
          title: "Миттєва картка замовлення в Telegram",
          desc: "Щойно клієнт оформлює замовлення, гарно зверстана картка надходить у ваш особистий чат або групу з контактами покупця, адресою доставки та товарами.",
          badge: "Real-Time Push",
          badgeColor: "cyan",
          img: "/telegram/screenshot-2.png",
          features: ["Повні контакти покупця та адреса", "Деталізація замовлених товарів", "Інлайн-кнопки [ Підтвердити ] та [ Скасувати ]"]
        },
        {
          step: "КРОК 2",
          title: "Керування замовленням прямо з чату",
          desc: "Менеджер натискає «Підтвердити» в Telegram. Замовлення миттєво переходить у статус «В обробці» (Processing) у WooCommerce, а картка фіксує нікнейм менеджера.",
          badge: "Інтерактивний Webhook",
          badgeColor: "emerald",
          img: "/telegram/screenshot-3.png",
          features: ["Бейдж: Підтверджено @username", "Миттєва зміна статусу без входу в адмінку", "Пряме посилання на замовлення в адмінці"]
        },
        {
          step: "КРОК 3",
          title: "Надійна адмінка та журнал логів",
          desc: "Окрема вкладка в меню WooCommerce для налаштування токена бота, Chat ID та реєстрації вебхука в 1 клік. Включає перевірку зв'язку та історію логів.",
          badge: "Чиста адмінка",
          badgeColor: "purple",
          img: "/telegram/screenshot-1.png",
          features: ["Реєстрація вебхука Telegram в один клік", "Кнопка «Надіслати тестове повідомлення»", "Журнал останніх 50 відправлених сповіщень"]
        }
      ],
      archTitle: "Чиста інженерія та нуль зайвого навантаження",
      archSubtitle: "Чому Saz Order Notifier перевершує застарілі та важкі плагини-комбайни.",
      features: [
        {
          title: "100% Zero External Dependencies",
          desc: "Побудований виключно на нативних API WordPress (wp_remote_post). Без важких пакетів Composer та сторонніх скриптів.",
          icon: Zap
        },
        {
          title: "Атомарний MySQL лок",
          desc: "Розроблено із захистом від Race Condition: кілька менеджерів не зможуть випадково натиснути кнопку одночасно.",
          icon: Lock
        },
        {
          title: "Пряме з'єднання Сервер-Telegram",
          desc: "Ваші дані передаються напряму з вашого сервера в офіційний Telegram Bot API через HTTPS без посередників.",
          icon: ShieldCheck
        },
        {
          title: "Підтримка WooCommerce HPOS",
          desc: "Повна підтримка високопродуктивних таблиць замовлень (Custom Order Tables) та нових блоків чекауту.",
          icon: Layers
        }
      ],
      faqs: [
        {
          q: "Чи працює плагин із групами та супергрупами Telegram?",
          a: "Так! Ви можете вказати як особистий ID користувача (наприклад, 123456789), так і ID групи (наприклад, -100123456789). Головне — додати вашого бота адміністратором у групу."
        },
        {
          q: "Чи потрібно тримати адмінку відкритою для отримання сповіщень?",
          a: "Ні. Плагін працює автономно на стороні сервера. Щойно з'являється замовлення, сервер миттєво відправляє запит у Telegram."
        },
        {
          q: "Як працюють кнопки «Підтвердити» та «Скасувати»?",
          a: "Після натискання кнопки «Зареєструвати вебхук» у налаштуваннях плагіна, Telegram надсилає захищений сигнал на ваш сайт при натисканні кнопок, автоматично змінюючи статус замовлення."
        },
        {
          q: "Плагін дійсно безкоштовний на WordPress.org?",
          a: "Так! Плагін повністю відкритий за ліцензією GPLv2 і безкоштовно доступний в офіційному репозиторії WordPress.org."
        }
      ],
      ctaTitle: "Готові керувати магазином прямо з Telegram?",
      ctaSubtitle: "Завантажте офіційний реліз із WordPress.org та розпочніть роботу менш ніж за 3 хвилини."
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="pb-24 pt-6">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <button onClick={() => onNavigate('/')} className="hover:text-cyan-400 transition-colors">
            {lang === 'en' ? 'Studio Home' : 'Головна'}
          </button>
          <span>/</span>
          <span className="text-blue-400">Saz Order Notifier (v1.0.2)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wide mb-6 shadow-sm shadow-blue-500/10">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {lang === 'en' ? (
              <>
                Saz Order Notifier with Telegram <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                  for WooCommerce
                </span>
              </>
            ) : (
              <>
                Saz Order Notifier with Telegram <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                  для WooCommerce
                </span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            {t.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a 
              href="https://wordpress.org/plugins/saz-order-notifier-for-woocommerce/" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105">
              <span>{t.btnWpOrg}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a 
              href="/saz-order-notifier-for-woocommerce.zip" 
              download
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold text-sm tracking-wide flex items-center gap-2 transition-all hover:border-blue-500/50">
              <Download className="w-4 h-4 text-blue-400" />
              <span>{t.btnDownload}</span>
            </a>
          </div>

          <p className="text-xs font-mono text-emerald-400 flex items-center justify-center gap-1.5 mb-14">
            <span>{t.downloadsNote}</span>
          </p>

          {/* Highlights KPI Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.highlights.map((h, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-center">
                <p className="text-xs font-mono text-slate-400 mb-1">{h.label}</p>
                <p className="text-lg sm:text-xl font-extrabold text-white font-mono">{h.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-3 sm:p-4 overflow-hidden shadow-2xl shadow-blue-500/10">
          <img 
            src="/telegram/banner-1544x500.png" 
            alt="Saz Order Notifier Official Banner" 
            className="w-full h-auto rounded-2xl object-cover border border-white/5"
          />
        </div>
      </section>

      {/* 3-STEP VISUAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {t.workflowTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.workflowSubtitle}
          </p>
        </div>

        {/* Step Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2">
          {t.steps.map((st, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeStep === i 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 border-transparent' 
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}>
              <span>{st.step}:</span>
              <span>{st.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Step Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
              <span>{t.steps[activeStep].badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {t.steps[activeStep].title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.steps[activeStep].desc}
            </p>

            <ul className="space-y-3 pt-2">
              {t.steps[activeStep].features.map((feat, fi) => (
                <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-2 overflow-hidden shadow-2xl">
              <img 
                src={t.steps[activeStep].img} 
                alt={t.steps[activeStep].title} 
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {t.archTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.archSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm">Everything you need to know about setting up Telegram Bot notifications.</p>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <h3 className="text-base font-bold text-white mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-slate-300 pl-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-slate-900 border border-blue-500/30 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">{t.ctaSubtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://wordpress.org/plugins/saz-order-notifier-for-woocommerce/" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-sm tracking-wide shadow-xl shadow-blue-500/30 flex items-center gap-2 transition-all hover:scale-105">
              <span>{t.btnWpOrg}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button 
              onClick={() => onNavigate('/')}
              className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-bold text-sm tracking-wide border border-slate-700 transition-all">
              {lang === 'en' ? 'Back to Studio Hub' : 'Повернутися на головну'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
