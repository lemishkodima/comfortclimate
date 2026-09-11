"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Frame,
  Layers3,
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Sparkles,
  TimerReset,
  Wind
} from "lucide-react";
import { LeadForm, ServiceType } from "@/components/lead-form";

type Mode = "windows" | "climate";

const phone = process.env.NEXT_PUBLIC_PHONE || "+38 (067) 000-00-00";

const modes: Record<
  Mode,
  {
    label: string;
    eyebrow: string;
    title: string;
    description: string;
    heroAsset: string;
    heroAlt: string;
    cta: string;
    formService: ServiceType;
    accent: string;
    chipClass: string;
    buttonClass: string;
    buttonGhostClass: string;
    stats: { value: string; label: string }[];
    highlights: { title: string; text: string }[];
  }
> = {
  windows: {
    label: "Вікна",
    eyebrow: "Світло, тиша, тепло",
    title: "Преміальні вікна, які роблять простір спокійним, теплим і візуально чистим.",
    description:
      "Підбираємо профілі, склопакети й монтажні рішення так, щоб дім залишався тихим узимку, світлим удень і естетичним в кожній деталі. Дизайн подачі спокійний, сучасний і дорогий на відчуття, як у хороших інтер'єрних брендів.",
    heroAsset: "/window-hero.png",
    heroAlt: "Панорамне вікно без фону",
    cta: "Підібрати вікна",
    formService: "Вікна",
    accent: "text-teal",
    chipClass: "bg-teal/10 text-teal",
    buttonClass: "bg-[#0D9488] hover:bg-[#0b7f75]",
    buttonGhostClass: "hover:border-teal/40",
    stats: [
      { value: "7+", label: "років досвіду з монтажем" },
      { value: "48 год", label: "середній старт після заявки" },
      { value: "100%", label: "акцент на акуратний монтаж" }
    ],
    highlights: [
      {
        title: "Точна геометрія",
        text: "Працюємо з профілями та відкосами так, щоб усе виглядало цілісно й чисто."
      },
      {
        title: "Тиша в кімнаті",
        text: "Склопакети та монтаж з фокусом на шумозахист для квартир біля доріг і міських вулиць."
      }
    ]
  },
  climate: {
    label: "Кондиціонери",
    eyebrow: "Керований мікроклімат",
    title: "Кондиціонери, які працюють тихо, виглядають стримано й підтримують комфорт щодня.",
    description:
      "Підбираємо систему під метраж, інсоляцію та сценарії життя, щоб охолодження було відчутним, а сама техніка не перевантажувала інтер'єр. Візуально це сучасний clean-premium стиль без неону, з м'яким об'ємом та повітрям.",
    heroAsset: "/air-conditioner-hero.png",
    heroAlt: "Кондиціонер без фону",
    cta: "Підібрати кондиціонер",
    formService: "Кондиціонери",
    accent: "text-sky-500",
    chipClass: "bg-sky-500/10 text-sky-500",
    buttonClass: "bg-accent hover:bg-sky-500",
    buttonGhostClass: "hover:border-accent/40",
    stats: [
      { value: "24/7", label: "комфортний клімат у сезон" },
      { value: "1 день", label: "монтаж типового об'єкта" },
      { value: "A++", label: "орієнтир на ефективність" }
    ],
    highlights: [
      {
        title: "Тиха робота",
        text: "Підберемо модель, яка охолоджує відчутно, але не забирає увагу шумом."
      },
      {
        title: "Чистий монтаж",
        text: "Маршрути комунікацій і розташування блоків продумані для естетики фасаду та кімнати."
      }
    ]
  }
};

const benefits = [
  {
    title: "Подача преміум-рівня",
    description:
      "Кожен блок побудований так, щоб викликати довіру: чиста типографіка, спокійна композиція, дорогий ритм секцій.",
    icon: Sparkles,
    accent: "text-slate-900"
  },
  {
    title: "Рішення під об'єкт",
    description:
      "Не продаємо абстрактну послугу. Працюємо від задачі: тепло, тиша, сонячна сторона, площа, стиль інтер'єру.",
    icon: Layers3,
    accent: "text-teal"
  },
  {
    title: "Контроль деталей",
    description:
      "Від заміру до фінального монтажу тримаємо під контролем геометрію, фурнітуру, дренаж і візуальну акуратність.",
    icon: ShieldCheck,
    accent: "text-sky-500"
  },
  {
    title: "Стислі строки",
    description:
      "Будуємо процес так, щоб ви швидко отримали зрозумілий розрахунок, приїзд майстра і готовий результат.",
    icon: TimerReset,
    accent: "text-slate-900"
  }
];

const processSteps = [
  "Отримуємо заявку та коротко уточнюємо об'єкт.",
  "Робимо розрахунок, підбір конфігурації та рекомендації без перевантаження технічними термінами.",
  "Погоджуємо виїзд, монтаж і фінально передаємо акуратно встановлене рішення."
];

export function LandingShell() {
  const [mode, setMode] = useState<Mode>("windows");
  const active = modes[mode];

  return (
    <main className="relative overflow-x-hidden bg-site-sheen">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.10),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(13,148,136,0.10),transparent_22%)]" />

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="section-shell glass-nav">
          <div className="flex flex-col gap-4 rounded-[2rem] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(15,23,42,0.18)]">
                CC
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Comfort Climate</p>
                <p className="text-sm text-slate-700">Вікна та кондиціонери з clean-premium подачею</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 xl:flex">
              <a href="#hero" className="transition hover:text-slate-950">Головна</a>
              <a href="#advantages" className="transition hover:text-slate-950">Переваги</a>
              <a href="#process" className="transition hover:text-slate-950">Процес</a>
              <a href="#lead-form" className="transition hover:text-slate-950">Заявка</a>
            </nav>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="inline-flex rounded-full border border-white/70 bg-white/70 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                {(Object.keys(modes) as Mode[]).map((key) => {
                  const item = modes[key];
                  const isActive = mode === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setMode(key)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-slate-950 text-white shadow-[0_12px_24px_rgba(15,23,42,0.18)]"
                          : "text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-800">
                  <PhoneCall className="h-4 w-4 text-sky-500" />
                  {phone}
                </a>
                <a href="#lead-form" className={`cta-button ${active.buttonClass}`}>
                  Розрахувати вартість
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="hero" className="section-shell grid gap-14 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28 lg:pt-16">
        <div className="relative z-10">
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${active.chipClass}`}>
            <BadgeCheck className={`h-4 w-4 ${active.accent}`} />
            {active.eyebrow}
          </div>

          <h1 className="mt-6 max-w-3xl text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-[4.4rem] lg:text-[5.65rem]">
            {active.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            {active.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#lead-form" className={`cta-button min-w-[220px] ${active.buttonClass}`}>
              {active.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#advantages" className={`secondary-button ${active.buttonGhostClass}`}>
              Дивитися переваги
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {active.stats.map((stat) => (
              <article key={stat.label} className="glass-card rounded-[1.8rem] px-5 py-5">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-12 h-24 w-24 rounded-full bg-white/80 blur-2xl" />
          <div className="absolute right-0 top-20 h-40 w-40 rounded-full bg-slate-200/50 blur-3xl" />
          <div className={`hero-orb ${mode === "windows" ? "hero-orb-window" : "hero-orb-climate"}`} />

          <div className="relative mx-auto flex min-h-[520px] max-w-[700px] items-center justify-center">
            <div className="hero-object-shadow" />
            <div className="hero-float">
              <div className="hero-tilt">
                <Image
                  src={active.heroAsset}
                  alt={active.heroAlt}
                  width={700}
                  height={700}
                  priority
                  className="hero-product object-contain"
                />
              </div>
            </div>

            <div className="glass-card absolute left-0 top-8 hidden max-w-[220px] rounded-[1.75rem] p-5 md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Акцент</p>
              <p className="mt-3 text-lg font-semibold text-slate-950">
                {mode === "windows" ? "Мінімум шуму, максимум світла." : "Тиха техніка для стабільного клімату."}
              </p>
            </div>

            <div className="glass-card absolute bottom-6 right-0 max-w-[260px] rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Що отримує клієнт</p>
              <div className="mt-4 space-y-3">
                {active.highlights.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className={`mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full ${active.chipClass}`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="section-shell pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Переваги сервісу</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Сучасний дизайн подачі і такий самий дисциплінований підхід до монтажу.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            Ми спеціально будуємо лендинг у стриманій, дорогій візуальній мові без неонових ефектів:
            світлий фон, багато повітря, великі заголовки, скляні панелі та один виразний предметний образ у hero.
            Та сама логіка переходить і в роботу з клієнтом: без зайвої метушні, з чітким маршрутом до результату.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ title, description, icon: Icon, accent }) => (
            <article key={title} className="glass-card rounded-[2rem] p-6">
              <div className={`inline-flex rounded-2xl bg-white/80 p-3 ${accent}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="glass-card rounded-[2.25rem] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Для кого це</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              Для квартир, приватних будинків, студій та комерційних просторів, де важливий не лише функціонал, а й відчуття якості.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Якщо вам близький сучасний інтер'єр, в якому цінується чиста лінія, світло, тиша та відсутність візуального шуму,
              ми зможемо підібрати рішення під цей запит. Вікна мають працювати на теплоізоляцію та пропорції фасаду, а кондиціонери
              повинні охолоджувати простір так, щоб їхня присутність відчувалась у комфорті, а не в перевантаженому вигляді кімнати.
            </p>
          </article>

          <article className="rounded-[2.25rem] bg-slate-950 px-8 py-10 text-white shadow-[0_28px_80px_rgba(15,23,42,0.14)] sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">Що важливо на старті</p>
            <div className="mt-6 space-y-5">
              {[
                "Тип приміщення та площа",
                "Рівень шуму або сонячне навантаження",
                "Ваші очікування щодо дизайну та бюджету"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="text-base text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="process" className="section-shell pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Процес роботи</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Простий маршрут від заявки до готового результату.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Нам важливо, щоб клієнт не губився між технічними деталями. Тому кожен етап максимально прозорий:
              короткий бриф, підбір рішення, розрахунок, монтаж і фінальна передача.
            </p>
          </div>

          <div className="grid gap-5">
            {processSteps.map((item, index) => (
              <article key={item} className="glass-card rounded-[2rem] p-6 sm:p-7">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-lg leading-8 text-slate-700">{item}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.96fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Фінальний блок</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Розрахуємо вартість і підкажемо рішення, яке дійсно підходить вашому простору.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Можете залишити заявку на вікна, кондиціонери або комплексний підхід. Ми зв'яжемося, уточнимо деталі,
              зорієнтуємо по вартості й запропонуємо практичний варіант без перевантаження зайвими опціями.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="glass-chip">
                <Frame className="h-4 w-4 text-teal" />
                Вікна під ключ
              </div>
              <div className="glass-chip">
                <Snowflake className="h-4 w-4 text-sky-500" />
                Кондиціонери
              </div>
              <div className="glass-chip">
                <Wind className="h-4 w-4 text-slate-700" />
                Комплексне рішення
              </div>
            </div>
          </div>

          <div id="lead-form">
            <LeadForm defaultService={active.formService} />
          </div>
        </div>
      </section>
    </main>
  );
}
