function iconMarkup(icon) {
  const icons = {
    arrow: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        <path d="m12 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
    play: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>
        <path d="m10 8 6 4-6 4V8Z" fill="currentColor"></path>
      </svg>
    `,
    phone: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.4 4.5h2.7l1.2 3.9-1.8 1.8a14.7 14.7 0 0 0 4.3 4.3l1.8-1.8 3.9 1.2v2.7c0 .7-.5 1.3-1.2 1.4-1 .1-2 .2-2.8.2A13.6 13.6 0 0 1 5.9 8.5c0-.9 0-1.8.2-2.8.1-.7.7-1.2 1.3-1.2Z" fill="currentColor"></path>
      </svg>
    `,
    shield: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 18 5.4v5.2c0 4.2-2.5 7.8-6 9.4-3.5-1.6-6-5.2-6-9.4V5.4L12 3Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
      </svg>
    `,
    settings: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 8.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Z" stroke="currentColor" stroke-width="1.9"></path>
        <path d="M19.4 13.4a7.8 7.8 0 0 0 0-2.8l2-1.5-2-3.4-2.4 1a8 8 0 0 0-2.4-1.4L14.3 3h-4.6l-.4 2.3a8 8 0 0 0-2.4 1.4l-2.4-1-2 3.4 2 1.5a7.8 7.8 0 0 0 0 2.8l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 2.4 1.4l.4 2.3h4.6l.4-2.3a8 8 0 0 0 2.4-1.4l2.4 1 2-3.4-2.1-1.5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
      </svg>
    `,
    panel: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.5" y="4" width="15" height="16" rx="2" stroke="currentColor" stroke-width="1.9"></rect>
        <path d="M9.5 4v16M14.5 4v16M4.5 12h15" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path>
      </svg>
    `,
    airVent: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="8" rx="2" stroke="currentColor" stroke-width="1.9"></rect>
        <path d="M7 9h10M8 17c1.4-1.2 3.4-1.2 4.8 0 1.4 1.2 3.4 1.2 4.8 0M7 20c.9-.7 2.1-.7 3 0M14 20c.9-.7 2.1-.7 3 0" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path>
      </svg>
    `,
    tools: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m4.5 19.5 5.4-5.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        <path d="m14.1 9.9 5.4-5.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        <path d="M13 5.5 18.5 11 20 9.5 14.5 4 13 5.5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
        <path d="M6.4 5.2 18.8 17.6a1.9 1.9 0 0 1-2.7 2.7L3.7 7.9V4.8h2.7v.4Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
      </svg>
    `,
    package: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 8.2 12 4l7.5 4.2v7.6L12 20l-7.5-4.2V8.2Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
        <path d="M4.8 8.4 12 12.5l7.2-4.1M12 12.5V20" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path>
      </svg>
    `,
    fan: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" stroke-width="1.8"></circle>
        <path d="M12 4.2c2.4 0 3.8 1.5 3.8 3.2 0 1.2-.7 2.1-1.8 2.8M19.1 15.8c-1.2 2.1-3.1 2.6-4.6 1.8-1-.6-1.5-1.7-1.5-3M4.9 15.8c-1.2-2.1-.7-4.1.8-4.9 1-.6 2.2-.4 3.3.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    wrench: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m14.7 6.3 3 3-7.9 7.9a2.1 2.1 0 1 1-3-3l7.9-7.9Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
        <path d="M14 4a4.2 4.2 0 0 0 4.9 5.3L14.6 13.6a4.2 4.2 0 1 1-4.2-4.2L14 4Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"></path>
      </svg>
    `,
    snow: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v20M4.9 6l14.2 12M4.9 18 19.1 6M3 12h18" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path>
      </svg>
    `,
    sparkle: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor"></path>
      </svg>
    `,
    check: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
    window: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="1.8" stroke="currentColor" stroke-width="1.8"></rect>
        <path d="M12 4v16M5 12h14" stroke="currentColor" stroke-width="1.8"></path>
      </svg>
    `
  };

  return icons[icon] || icons.sparkle;
}

function buttonMarkup(label, icon = "arrow") {
  return `<span class="button-icon" aria-hidden="true">${iconMarkup(icon)}</span><span class="button-label">${label}</span>`;
}

function orbitTextMarkup(id, text, className = "") {
  return `
    <div class="orbit-text ${className}" aria-hidden="true">
      <svg viewBox="0 0 220 220" role="presentation">
        <defs>
          <path id="${id}" d="M 110,110 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"></path>
        </defs>
        <text>
          <textPath href="#${id}" startOffset="0%">${text}</textPath>
        </text>
      </svg>
    </div>
  `;
}

const MODES = {
  windows: {
    accentClass: "mode-windows",
    title: "Вікна під ключ у Києві | Comfort Climate",
    description: "Ремонт, обслуговування та заміна вікон у Києві та області. Чіткий прорахунок, акуратна робота і гарантія.",
    hero: {
      eyebrow: "Тепло. Тиша. Більше світла.",
      title: "Професійне встановлення вікон під ключ",
      subtitle: "Підбір, замір і встановлення вікон для квартир, будинків і комерційних приміщень.",
      cta: "Замовити замір",
      secondary: "Як ми працюємо",
      floatingCta: "Отримати прорахунок",
      headerCta: "Отримати прорахунок",
      stats: [
        ["window", "Теплі профілі"],
        ["shield", "Гарантія 5 років"],
        ["wrench", "Чистий монтаж"]
      ],
      orbitText: "comfort climate • тепло • тиша • світло • монтаж • ",
      image: "./assets/img/optimized/pexels-kseniachernaya-5691531.webp",
      imageAlt: "Майстер виконує монтаж та налаштування вікна",
      mediaTag: "Реальні роботи"
    },
    servicesTitle: "Наші послуги",
    promo: {
      badge: "Лише зараз",
      title: "-50% на всі види послуг",
      text: "Залиште заявку зараз, і ми зафіксуємо спеціальну пропозицію перед виїздом майстра.",
      discount: "-50%",
      stampText: "на всі види послуг",
      cta: "Отримати знижку"
    },
    services: [
      ["window", "Заміна вікон", "Пластикові та алюмінієві системи для квартир і будинків."],
      ["tools", "Ремонт вікон", "Діагностика, усунення продування, ремонт фурнітури та дрібні роботи."],
      ["settings", "Обслуговування", "Регулювання стулок, ущільнювачі, змащення та профілактика механізмів."],
      ["panel", "Заміна склопакета", "Підберемо новий склопакет і акуратно замінимо без зайвих робіт."]
    ],
    why: {
      label: "Чому ми",
      title: "Чому нас обирають для заміни вікон",
      text: "Ми не перевантажуємо вибір. Даємо кілька чітких рішень, пояснюємо різницю і ставимо акуратно.",
      points: [
        "Досвідчені монтажники та контроль вузлів",
        "Прозорий прорахунок без зайвих позицій",
        "Працюємо з квартирами, будинками і комерційними приміщеннями",
        "Офіційна гарантія та післямонтажна підтримка"
      ],
      orbitText: "точний замір • акуратний монтаж • гарантія • comfort climate • ",
      image: "./assets/img/optimized/pexels-kseniachernaya-5691503.webp",
      imageAlt: "Реальний процес встановлення віконної рами"
    },
    reviews: {
      title: "Що говорять клієнти про вікна",
      subtitle: "Короткі відгуки після заміру, монтажу та завершення робіт.",
      items: [
        {
          name: "Ірина, Київ",
          role: "Заміна вікон у квартирі",
          text: "Все пройшло дуже спокійно: замір, підбір профілю і монтаж без зайвого бруду. В кімнаті реально стало тихіше.",
          score: "5.0"
        },
        {
          name: "Олег, Буча",
          role: "Ремонт і регулювання",
          text: "Пояснили різницю по варіантах і не нав'язували зайве. Зробили акуратно, стулки закриваються м'яко і без продування.",
          score: "5.0"
        },
        {
          name: "Світлана, Ірпінь",
          role: "Заміна склопакета",
          text: "Швидко приїхали на замір, узгодили день монтажу і все виконали в строк. Найбільше сподобалась чистота після робіт.",
          score: "4.9"
        }
      ]
    },
    faq: {
      title: "Питання та відповіді",
      subtitle: "Коротко відповідаємо на найчастіші запитання перед заміром і монтажем.",
      items: [
        [
          "Скільки триває замір і прорахунок?",
          "Зазвичай замір займає до 30 хвилин. Після цього ми готуємо кілька зрозумілих варіантів по комплектації та вартості."
        ],
        [
          "Чи допомагаєте підібрати профіль і склопакет?",
          "Так, ми пояснюємо різницю між профілями, фурнітурою та склопакетами і підбираємо рішення під бюджет, шум і теплоізоляцію."
        ],
        [
          "Чи робите демонтаж старих вікон?",
          "Так, можемо виконати демонтаж старих конструкцій, монтаж нових вікон і базове прибирання після робіт."
        ],
        [
          "Чи є гарантія на роботи?",
          "Так, на монтаж і встановлені рішення надається гарантія. Конкретні умови залежатимуть від конфігурації замовлення."
        ]
      ]
    },
    lead: {
      title: "Ми допоможемо з вашими вікнами",
      subtitle: "Залиште заявку і ми швидко зорієнтуємо по конфігурації, строках і вартості.",
      callText: "Передзвонимо, підкажемо по профілях і домовимось про виїзд на замір.",
      callButton: "Зателефонувати",
      serviceOptions: [
        "Заміна вікон",
        "Заміна склопакета",
        "Регулювання / сервіс",
        "Інше"
      ],
      messagePlaceholder: "Коротко опишіть об'єкт або побажання",
      submit: "Отримати безкоштовний прорахунок",
      type: "windows"
    }
  },
  conditioners: {
    accentClass: "mode-conditioners",
    title: "Кондиціонери під ключ у Києві | Comfort Climate",
    description: "Підбір, монтаж і сервіс кондиціонерів у Києві та області. Чистий якісний монтаж, запуск і гарантія.",
    hero: {
      eyebrow: "Прохолода. Комфорт. Спокій.",
      title: "Професійний монтаж кондиціонерів",
      subtitle: "Монтаж, запуск і сервіс кондиціонерів для дому, офісу та комерційних приміщень.",
      cta: "Замовити монтаж",
      secondary: "Як ми працюємо",
      floatingCta: "Отримати прорахунок",
      headerCta: "Отримати прорахунок",
      stats: [
        ["sparkle", "Швидкий виїзд"],
        ["wrench", "Сертифіковані майстри"],
        ["shield", "Гарантія на роботи"]
      ],
      orbitText: "comfort climate • прохолода • чистий монтаж • сервіс • ",
      image: "./assets/img/optimized/ac-garden.webp",
      imageAlt: "Кондиціонер біля зони відпочинку",
      mediaTag: "Київ та область"
    },
    servicesTitle: "Наші послуги",
    promo: {
      badge: "Спецпропозиція",
      title: "-50% на обслуговування кондиціонерів",
      text: "Зафіксуємо вигідну ціну на сервісне обслуговування та підкажемо, що потрібно саме вашій системі.",
      discount: "-50%",
      stampText: "на обслуговування",
      cta: "Забрати пропозицію"
    },
    services: [
      ["airVent", "Монтаж", "Підбір і монтаж кондиціонерів під площу та сценарій використання."],
      ["package", "Продаж обладнання", "Підберемо кондиціонер під приміщення, бюджет і потрібну потужність."],
      ["fan", "Обслуговування", "Регулярний сервіс для стабільної та тихої роботи."],
      ["settings", "Чистка", "Глибока чистка для кращої якості повітря та продуктивності."]
    ],
    why: {
      label: "Чому ми",
      title: "Чому нам довіряють монтаж кондиціонерів",
      text: "Працюємо швидко та акуратно: підбираємо кондиціонери під ваші потреби, погоджуємо монтаж, запускаємо і залишаємо чистий результат.",
      points: [
        "Досвідчені сертифіковані майстри",
        "Прозорі ціни та зрозумілий монтаж",
        "Чистий якісний монтаж і вакуумування системи",
        "Сервіс та підтримка після встановлення"
      ],
      orbitText: "чистий монтаж • тиха робота • гарантія • comfort climate • ",
      image: "./assets/img/optimized/ac-outdoor.webp",
      imageAlt: "Зовнішній блок кондиціонера"
    },
    reviews: {
      title: "Що говорять клієнти про кондиціонери",
      subtitle: "Відгуки після монтажу, запуску та сервісного обслуговування.",
      items: [
        {
          name: "Марина, Київ",
          role: "Монтаж кондиціонера",
          text: "Приїхали вчасно, зробили монтаж чисто і після себе все прибрали. Кондиціонер працює тихо, як і обіцяли.",
          score: "5.0"
        },
        {
          name: "Андрій, Вишневе",
          role: "Підбір та встановлення",
          text: "Швидко зорієнтували по моделях, не перевантажували технічними деталями і порадили оптимальний варіант по бюджету.",
          score: "4.9"
        },
        {
          name: "Катерина, Бровари",
          role: "Сервіс і чистка",
          text: "Після сервісу повітря стало відчутно кращим, а сам блок працює значно тихіше. Приємний і акуратний сервіс.",
          score: "5.0"
        }
      ]
    },
    faq: {
      title: "Питання та відповіді",
      subtitle: "Зібрали короткі відповіді на найпоширеніші питання перед монтажем і сервісом.",
      items: [
        [
          "Чи допомагаєте підібрати кондиціонер під площу?",
          "Так, ми підбираємо модель під площу, висоту стелі, кількість кімнат, сонячну сторону та сценарій використання."
        ],
        [
          "Скільки триває монтаж кондиціонера?",
          "У більшості випадків стандартний монтаж займає 2-4 години. Якщо монтаж складніший, строки узгоджуємо заздалегідь."
        ],
        [
          "Чи входить запуск і перевірка в монтаж?",
          "Так, після монтажу ми запускаємо систему, перевіряємо її роботу і даємо базові рекомендації по користуванню."
        ],
        [
          "Коли потрібна чистка або сервіс?",
          "Для стабільної та тихої роботи кондиціонер бажано обслуговувати регулярно, особливо перед активним сезоном."
        ]
      ]
    },
    lead: {
      title: "Ми подбаємо про ваш комфорт",
      subtitle: "Залиште заявку і ми швидко підберемо рішення під ваше приміщення.",
      callText: "Передзвонимо, підберемо модель і узгодимо зручну дату монтажу.",
      callButton: "Зателефонувати",
      serviceOptions: [
        "Монтаж кондиціонера",
        "Підбір моделі",
        "Сервіс / чистка",
        "Перенесення або демонтаж",
        "Інше"
      ],
      messagePlaceholder: "Площа, тип приміщення або короткий опис задачі",
      submit: "Отримати безкоштовний прорахунок",
      type: "conditioners"
    }
  }
};

const appState = {
  mode: "windows"
};

const LOGO_BY_MODE = {
  windows: "./assets/img/logo-windows.svg",
  conditioners: "./assets/img/logo.svg"
};

const dataLayer = (window.dataLayer = window.dataLayer || []);
const supportsHistory = typeof window.history?.replaceState === "function";
const APPS_SCRIPT_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbykio-tjuaUBzbuFmwqbnrnl2jRdp_KKiwCCgGcjXjgxhyW5-D00fpmpuL32AS-sr8_Bw/exec";
const PROMO_TIMER_CONFIG = {
  durationHours: 12,
  storageKey: "comfort-climate-promo-deadline"
};
let chooserHideTimer = null;
let revealObserver = null;
let floatingCtaTicking = false;
let promoTimerInterval = null;
let reviewTouchStartX = 0;
let reviewTouchStartY = 0;
let reviewTouchDeltaX = 0;
let reviewsState = {
  mode: "windows",
  index: 0
};

function qs(selector) {
  return document.querySelector(selector);
}

function trackEvent(event, payload = {}) {
  dataLayer.push({ event, ...payload });
}

function getPromoDeadline() {
  const now = Date.now();
  const durationMs = PROMO_TIMER_CONFIG.durationHours * 60 * 60 * 1000;
  const saved = Number(window.localStorage.getItem(PROMO_TIMER_CONFIG.storageKey));

  if (Number.isFinite(saved) && saved > now) {
    return saved;
  }

  const nextDeadline = now + durationMs;
  window.localStorage.setItem(PROMO_TIMER_CONFIG.storageKey, String(nextDeadline));
  return nextDeadline;
}

function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updatePromoTimer() {
  const deadline = getPromoDeadline();
  const remaining = deadline - Date.now();
  const value = formatCountdown(remaining);

  document.querySelectorAll("[data-promo-timer-value]").forEach((node) => {
    node.textContent = value;
  });
}

function initPromoTimer() {
  if (promoTimerInterval) {
    window.clearInterval(promoTimerInterval);
  }

  updatePromoTimer();
  promoTimerInterval = window.setInterval(updatePromoTimer, 1000);
}

function getQueryMode() {
  const mode = new URLSearchParams(window.location.search).get("mode");
  return mode === "windows" || mode === "conditioners" ? mode : null;
}

function getStoredMode() {
  const saved = window.localStorage.getItem("comfort-climate-mode");
  return saved === "windows" || saved === "conditioners" ? saved : null;
}

function closeMobileMenu() {
  const header = qs(".site-header");
  const toggle = qs("#menu-toggle");
  if (!header || !toggle) return;
  header.classList.remove("menu-open");
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
  const header = qs(".site-header");
  const toggle = qs("#menu-toggle");
  if (!header || !toggle) return;
  const isOpen = header.classList.toggle("menu-open");
  document.body.classList.toggle("menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function setMeta(mode) {
  const config = MODES[mode];
  document.title = config.title;
  document.querySelector('meta[name="description"]').setAttribute("content", config.description);
  document.querySelector('meta[property="og:title"]').setAttribute("content", config.title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", config.description);
}

function updateUrl(mode) {
  if (!supportsHistory) return;
  const url = new URL(window.location.href);
  url.searchParams.set("mode", mode);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function resetChooserScene() {
  const chooser = qs("#mode-chooser");
  if (!chooser) return;
  chooser.dataset.state = "idle";
  chooser.removeAttribute("data-hover-mode");
  chooser.removeAttribute("data-selected-mode");
  document.body.classList.remove("chooser-selecting");
}

function hideModeChooser(selectedMode = null) {
  const chooser = qs("#mode-chooser");
  if (!chooser) return;

  if (chooserHideTimer) {
    window.clearTimeout(chooserHideTimer);
    chooserHideTimer = null;
  }

  if (!selectedMode) {
    chooser.setAttribute("hidden", "");
    resetChooserScene();
    document.body.classList.remove("chooser-open");
    return;
  }

  const selectedImage = chooser.querySelector(`[data-choose-mode="${selectedMode}"] img`);
  if (selectedImage?.getAttribute("src")) {
    chooser.style.setProperty("--chooser-reveal-image", `url("${selectedImage.getAttribute("src")}")`);
  }

  chooser.dataset.state = "selecting";
  chooser.dataset.selectedMode = selectedMode;
  chooser.removeAttribute("data-hover-mode");
  document.body.classList.add("chooser-selecting");

  chooserHideTimer = window.setTimeout(() => {
    chooser.setAttribute("hidden", "");
    resetChooserScene();
    document.body.classList.remove("chooser-open");
    chooserHideTimer = null;
  }, 620);
}

function showModeChooser() {
  const chooser = qs("#mode-chooser");
  if (!chooser) return;
  resetChooserScene();
  chooser.removeAttribute("hidden");
  document.body.classList.add("chooser-open");
}

function initChooserInteractions() {
  const chooser = qs("#mode-chooser");
  if (!chooser) return;

  chooser.querySelectorAll("[data-choose-mode]").forEach((button) => {
    const mode = button.dataset.chooseMode;
    button.addEventListener("mouseenter", () => {
      if (chooser.dataset.state === "selecting") return;
      chooser.dataset.hoverMode = mode;
    });
    button.addEventListener("focus", () => {
      if (chooser.dataset.state === "selecting") return;
      chooser.dataset.hoverMode = mode;
    });
  });

  chooser.addEventListener("mouseleave", () => {
    if (chooser.dataset.state === "selecting") return;
    chooser.removeAttribute("data-hover-mode");
  });
}

function renderHero(mode) {
  const config = MODES[mode].hero;
  const promo = MODES[mode].promo;
  const orbitId = `hero-orbit-${mode}`;
  qs("#hero-eyebrow").textContent = config.eyebrow;
  qs("#hero-title").textContent = config.title;
  qs("#hero-subtitle").textContent = config.subtitle;
  qs("#hero-cta").innerHTML = buttonMarkup(config.cta, "arrow");
  qs("#hero-secondary").innerHTML = buttonMarkup(config.secondary, "play");
  qs(".header-cta").innerHTML = `<span class="button-label">${config.headerCta}</span>`;
  qs("#floating-cta").innerHTML = `<span class="button-label">${config.floatingCta}</span>`;

  qs("#hero-stats").innerHTML = config.stats
    .map(
      ([icon, text]) => `
        <div class="stat-item">
          <span class="stat-item__icon">${iconMarkup(icon)}</span>
          <span>${text}</span>
        </div>
      `
    )
    .join("");

  qs("#hero-media").innerHTML = `
    <div class="hero-image-card">
      <span class="hero-image-card__tag">${config.mediaTag}</span>
      <div class="hero-discount-stamp" aria-label="${promo.title}">
        <span class="hero-discount-stamp__badge">${promo.badge}</span>
        <strong>${promo.discount}</strong>
        <small>${promo.stampText}</small>
        <span class="hero-discount-stamp__timer">До кінця: <b data-promo-timer-value>--:--:--</b></span>
      </div>
      ${orbitTextMarkup(orbitId, config.orbitText, "orbit-text--hero")}
      <div class="hero-image-card__media">
        <img src="${config.image}" alt="${config.imageAlt}" loading="eager" fetchpriority="high" decoding="async" />
      </div>
    </div>
  `;
}

function renderServices(mode) {
  const config = MODES[mode];
  qs("#services-title").textContent = config.servicesTitle;
  qs("#services-grid").innerHTML = config.services
    .map(
      ([icon, title, text]) => `
        <article class="service-card reveal-target">
          <div class="service-card__icon">${iconMarkup(icon)}</div>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderPromo(mode) {
  const config = MODES[mode].promo;
  qs("#promo-badge").textContent = config.badge;
  qs("#promo-title").textContent = config.title;
  qs("#promo-text").textContent = config.text;
  qs("#promo-discount").textContent = config.discount;
  qs("#promo-timer").innerHTML = `
    <span>До кінця пропозиції</span>
    <strong data-promo-timer-value>--:--:--</strong>
  `;
  qs("#promo-cta").innerHTML = buttonMarkup(config.cta, "sparkle");
  updatePromoTimer();
}

function renderWhy(mode) {
  const config = MODES[mode].why;
  const orbitId = `why-orbit-${mode}`;
  qs("#why-kicker").textContent = config.label;
  qs("#why-title").textContent = config.title;
  qs("#why-text").textContent = config.text;
  qs(".why-media").innerHTML = `
    ${orbitTextMarkup(orbitId, config.orbitText, "orbit-text--why")}
    <img id="why-image" src="${config.image}" alt="${config.imageAlt}" loading="lazy" />
  `;
  qs("#why-list").innerHTML = config.points
    .map(
      (item) => `
        <li>
          <span class="why-list__icon">${iconMarkup("check")}</span>
          <span>${item}</span>
        </li>
      `
    )
    .join("");
}

function renderReviews(mode) {
  const config = MODES[mode].reviews;
  reviewsState = { mode, index: 0 };
  qs("#reviews-title").textContent = config.title;
  qs("#reviews-subtitle").textContent = config.subtitle;
  qs("#reviews-track").innerHTML = config.items
    .map(
      (item, index) => `
        <article class="review-card ${index === 0 ? "is-active" : ""}" data-review-index="${index}">
          <div class="review-card__score">${item.score}</div>
          <p class="review-card__text">${item.text}</p>
          <div class="review-card__meta">
            <strong>${item.name}</strong>
            <span>${item.role}</span>
          </div>
        </article>
      `
    )
    .join("");

  qs("#reviews-dots").innerHTML = config.items
    .map(
      (_, index) => `
        <button
          class="reviews-slider__dot ${index === 0 ? "is-active" : ""}"
          type="button"
          data-review-dot="${index}"
          aria-label="Перейти до відгуку ${index + 1}"
        ></button>
      `
    )
    .join("");

  updateReviewsSlider();
}

function updateReviewsSlider() {
  const reviews = MODES[reviewsState.mode].reviews.items;
  const index = ((reviewsState.index % reviews.length) + reviews.length) % reviews.length;
  reviewsState.index = index;

  const track = qs("#reviews-track");
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelectorAll("[data-review-index]").forEach((card) => {
    card.classList.toggle("is-active", Number(card.dataset.reviewIndex) === index);
  });

  document.querySelectorAll("[data-review-dot]").forEach((dot) => {
    dot.classList.toggle("is-active", Number(dot.dataset.reviewDot) === index);
  });
}

function renderFaq(mode) {
  const config = MODES[mode].faq;
  qs("#faq-title").textContent = config.title;
  qs("#faq-subtitle").textContent = config.subtitle;
  qs("#faq-list").innerHTML = config.items
    .map(
      ([question, answer], index) => `
        <details class="faq-item" ${index === 0 ? "open" : ""}>
          <summary>${question}</summary>
          <div class="faq-item__content">
            <p>${answer}</p>
          </div>
        </details>
      `
    )
    .join("");
}

function renderLead(mode) {
  const config = MODES[mode].lead;
  qs("#lead-title").textContent = config.title;
  qs("#lead-subtitle").textContent = config.subtitle;
  qs("#lead-message").setAttribute("placeholder", config.messagePlaceholder);
  qs("#lead-submit").innerHTML = `<span class="button-label">${config.submit}</span>`;
  qs("#lead-call-button").innerHTML = buttonMarkup(config.callButton, "phone");
  qs("#lead-service").innerHTML = [
    `<option value="">Оберіть послугу</option>`,
    ...config.serviceOptions.map((item) => `<option value="${item}">${item}</option>`)
  ].join("");
  qs("#lead-mode").value = mode;
  qs("#lead-type").value = config.type;
}

function updateLogos(mode) {
  const logoSrc = LOGO_BY_MODE[mode] || LOGO_BY_MODE.conditioners;
  document.querySelectorAll(".brand-logo, .footer-logo, .chooser-control__logo").forEach((logo) => {
    logo.setAttribute("src", logoSrc);
  });
}

function initRevealAnimations() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  const nodes = document.querySelectorAll(
    ".hero-copy > *, .promo-banner > *, .service-card, .why-copy > *, .review-card, .faq-item, .contact-card, .lead-form, .footer-shell > div"
  );

  nodes.forEach((node, index) => {
    node.classList.add("reveal");
    node.classList.remove("is-visible");
    node.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 60}ms`);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((node) => revealObserver.observe(node));
}

function applyMode(mode, origin = "direct") {
  const previousMode = appState.mode;
  const config = MODES[mode];
  appState.mode = mode;

  document.body.classList.remove("mode-windows", "mode-conditioners");
  document.body.classList.add(config.accentClass);

  renderHero(mode);
  renderPromo(mode);
  renderServices(mode);
  renderWhy(mode);
  renderReviews(mode);
  renderFaq(mode);
  renderLead(mode);
  updateLogos(mode);
  setMeta(mode);
  updateUrl(mode);

  document.querySelectorAll(".mode-switch__button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
  });
  qs(".mode-switch").setAttribute("data-active-mode", mode);

  window.localStorage.setItem("comfort-climate-mode", mode);
  initRevealAnimations();

  if (origin === "switch" && previousMode !== mode) {
    trackEvent("mode_switch", { from_mode: previousMode, to_mode: mode });
  }
}

function validatePhone(phone) {
  return /^\+?[0-9 ()-]{9,18}$/.test(phone.trim());
}

function fillAttributionFields() {
  const params = new URLSearchParams(window.location.search);
  qs("#utm-source").value = params.get("utm_source") || "";
  qs("#utm-campaign").value = params.get("utm_campaign") || "";
  qs("#utm-medium").value = params.get("utm_medium") || "";
  qs("#lead-gclid").value = params.get("gclid") || "";
}

function consentUpdate(status) {
  window.gtag?.("consent", "update", {
    ad_storage: status,
    analytics_storage: status,
    ad_user_data: status,
    ad_personalization: status
  });
}

function initConsent() {
  const banner = qs("#cookie-banner");
  if (!banner) return;

  let stored = null;
  try {
    stored = window.localStorage.getItem("comfort-climate-consent");
  } catch (error) {
    stored = null;
  }

  const cookieMatch = document.cookie.match(/(?:^|;\s*)comfort_climate_consent=(granted|denied)/);
  const cookieStored = cookieMatch?.[1] || null;
  const resolvedStored = stored || cookieStored;

  const handleConsent = (value) => {
    try {
      window.localStorage.setItem("comfort-climate-consent", value);
    } catch (error) {
      // Ignore storage issues.
    }

    document.cookie = `comfort_climate_consent=${value}; path=/; max-age=31536000; SameSite=Lax`;
    banner.setAttribute("hidden", "");
    banner.hidden = true;
    banner.style.display = "none";
    document.body.dataset.consentState = value;
    consentUpdate(value);
  };

  banner.addEventListener("click", (event) => {
    const button = event.target.closest("[data-consent]");
    if (!button) return;
    handleConsent(button.dataset.consent);
  });

  if (!resolvedStored) {
    banner.hidden = false;
    banner.style.display = "flex";
    return;
  }

  banner.setAttribute("hidden", "");
  banner.style.display = "none";
  document.body.dataset.consentState = resolvedStored;
  consentUpdate(resolvedStored);
}

function scrollToTarget(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function submitLead(payload) {
  try {
    const response = await fetch("./api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return;
    }

    if (response.status !== 404 && response.status !== 405) {
      throw new Error(`submit_failed:${response.status}`);
    }
  } catch (error) {
    if (!APPS_SCRIPT_WEBHOOK_URL) {
      throw error;
    }
  }

  const fallbackResponse = await fetch(APPS_SCRIPT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!fallbackResponse.ok) {
    throw new Error(`apps_script_submit_failed:${fallbackResponse.status}`);
  }
}

function initInteractions() {
  const floatingCta = qs("#floating-cta");
  const leadSection = qs("#lead-form");
  const reviewsViewport = qs(".reviews-slider__viewport");

  document.addEventListener("click", (event) => {
    const switchButton = event.target.closest(".mode-switch__button");
    if (switchButton) {
      closeMobileMenu();
      applyMode(switchButton.dataset.mode, "switch");
      return;
    }

    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      scrollToTarget(scrollButton.dataset.scrollTarget);
      closeMobileMenu();
      return;
    }

    if (event.target.closest("[data-track-phone]")) {
      trackEvent("phone_call", { mode: appState.mode, source: "phone" });
    }

    const navLink = event.target.closest(".site-nav a");
    if (navLink) {
      closeMobileMenu();
    }

    const chooserButton = event.target.closest("[data-choose-mode]");
    if (chooserButton) {
      const nextMode = chooserButton.dataset.chooseMode;
      applyMode(nextMode, "switch");
      hideModeChooser(nextMode);
      return;
    }

    const reviewsPrev = event.target.closest("#reviews-prev");
    if (reviewsPrev) {
      reviewsState.index -= 1;
      updateReviewsSlider();
      return;
    }

    const reviewsNext = event.target.closest("#reviews-next");
    if (reviewsNext) {
      reviewsState.index += 1;
      updateReviewsSlider();
      return;
    }

    const reviewDot = event.target.closest("[data-review-dot]");
    if (reviewDot) {
      reviewsState.index = Number(reviewDot.dataset.reviewDot);
      updateReviewsSlider();
    }
  });

  qs("#callback-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const feedback = qs("#form-feedback");
    const payload = Object.fromEntries(new FormData(form).entries());

    if (payload.company) return;
    if (!validatePhone(payload.phone || "")) {
      feedback.textContent = "Перевірте номер телефону, будь ласка.";
      return;
    }

    feedback.textContent = "Надсилаємо заявку...";
    payload.landing_url = window.location.href;
    payload.entry_url = document.referrer || "";

    try {
      await submitLead(payload);
      trackEvent("form_submit", { mode: payload.mode, lead_type: payload.lead_type, service: payload.service });
      form.reset();
      qs("#lead-mode").value = appState.mode;
      qs("#lead-type").value = MODES[appState.mode].lead.type;
      fillAttributionFields();
      feedback.textContent = "Дякуємо, ми отримали заявку й скоро з вами зв'яжемося.";
    } catch (error) {
      const draftKey = "comfort-climate-lead-backup";
      const draftList = JSON.parse(window.localStorage.getItem(draftKey) || "[]");
      draftList.push({ ...payload, savedAt: new Date().toISOString() });
      window.localStorage.setItem(draftKey, JSON.stringify(draftList));
      feedback.textContent = "Не вдалося передати заявку на сервер. Заявку збережено локально в браузері.";
    }
  });

  reviewsViewport?.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      reviewTouchStartX = touch.clientX;
      reviewTouchStartY = touch.clientY;
      reviewTouchDeltaX = 0;
    },
    { passive: true }
  );

  reviewsViewport?.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.changedTouches[0];
      reviewTouchDeltaX = touch.clientX - reviewTouchStartX;
      const deltaY = touch.clientY - reviewTouchStartY;

      if (Math.abs(reviewTouchDeltaX) > Math.abs(deltaY)) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  reviewsViewport?.addEventListener(
    "touchend",
    () => {
      if (Math.abs(reviewTouchDeltaX) < 42) return;
      reviewsState.index += reviewTouchDeltaX < 0 ? 1 : -1;
      updateReviewsSlider();
      reviewTouchDeltaX = 0;
    },
    { passive: true }
  );

  const syncFloatingCta = () => {
    if (floatingCta) {
      const leadSectionTop = leadSection?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const isLeadSectionNear = leadSectionTop < window.innerHeight * 0.82;
      floatingCta.classList.toggle("visible", window.scrollY > 240 && !isLeadSectionNear);
    }
    floatingCtaTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!floatingCta || floatingCtaTicking) return;
      floatingCtaTicking = true;
      window.requestAnimationFrame(syncFloatingCta);
    },
    { passive: true }
  );

  syncFloatingCta();
}

function init() {
  qs("#menu-toggle")?.addEventListener("click", toggleMobileMenu);
  fillAttributionFields();
  initConsent();
  initChooserInteractions();
  initInteractions();
  initPromoTimer();
  const directMode = getQueryMode();
  const preferredMode = directMode || getStoredMode() || "windows";
  applyMode(preferredMode);

  if (directMode) {
    hideModeChooser();
    return;
  }

  showModeChooser();
}

document.addEventListener("DOMContentLoaded", init);
