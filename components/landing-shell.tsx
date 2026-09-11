"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Frame,
  Menu,
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wind,
  X
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
    formService: ServiceType;
    buttonTint: string;
    accentClass: string;
    auraClass: string;
    cta: string;
    supporting: string;
    highlights: string[];
  }
> = {
  windows: {
    label: "Вікна",
    eyebrow: "Світло, тиша, тепло",
    title: "Преміальні вікна для спокійного, теплого і візуально чистого простору.",
    description:
      "Підбираємо профілі, склопакети та монтажні рішення так, щоб дім залишався тихим узимку, світлим удень і акуратним у кожній деталі. Подача стримана, чиста і ближча до сучасного інтер'єрного бренду, ніж до шаблонного промо-сайту.",
    heroAsset: "/window-hero.png",
    heroAlt: "Вікно без фону",
    formService: "Вікна",
    buttonTint: "#18a59a",
    accentClass: "text-teal",
    auraClass: "aura-window",
    cta: "Підібрати вікна",
    supporting: "Точний монтаж, рівна геометрія, чистий вигляд відкосів.",
    highlights: ["Енергоефективність", "Тиша в кімнаті", "Акуратний монтаж"]
  },
  climate: {
    label: "Кондиціонери",
    eyebrow: "Керований мікроклімат",
    title: "Кондиціонери для стабільного комфорту, тихої роботи і стриманої присутності в інтер'єрі.",
    description:
      "Підбираємо систему під площу, інсоляцію та звички мешканців так, щоб охолодження відчувалось у комфорті, а не у візуальному шумі. Усе подано в чистій luxury-tech мові без неону та без перевантаження.",
    heroAsset: "/air-conditioner-hero.png",
    heroAlt: "Кондиціонер без фону",
    formService: "Кондиціонери",
    buttonTint: "#1498e6",
    accentClass: "text-sky-500",
    auraClass: "aura-climate",
    cta: "Підібрати кондиціонер",
    supporting: "Тиха робота, коректний підбір під об'єм і продумане розміщення.",
    highlights: ["Тихий режим", "Чистий монтаж", "Робота під площу"]
  }
};

const benefits = [
  {
    icon: Sparkles,
    title: "Акуратна подача",
    text: "Чиста ієрархія, спокійний ритм і відчуття продуманого продукту, а не швидкого шаблону."
  },
  {
    icon: ShieldCheck,
    title: "Контроль деталей",
    text: "Тримуємо фокус на геометрії, стиках, шумозахисті та фінальному візуальному результаті."
  },
  {
    icon: Wind,
    title: "Комфорт на практиці",
    text: "Підбираємо рішення не абстрактно, а під світло, шум, площу та режим використання."
  }
];

const navItems = [
  { href: "#hero", label: "Головна" },
  { href: "#benefits", label: "Переваги" },
  { href: "#lead-form", label: "Заявка" }
];

export function LandingShell() {
  const [mode, setMode] = useState<Mode>("windows");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = modes[mode];

  const switchStyle = useMemo(
    () => ({
      transform: `translateX(${mode === "windows" ? "0%" : "100%"})`
    }),
    [mode]
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="relative overflow-x-hidden bg-shell">
      <div className="ambient-shell" />

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="section-shell">
          <div className="header-glass">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="brand-badge">CC</div>
                <div className="min-w-0">
                  <p className="truncate text-[0.72rem] font-medium uppercase tracking-[0.34em] text-slate-500">
                    Comfort Climate
                  </p>
                  <p className="text-sm text-slate-600">Вікна та кондиціонери</p>
                </div>
              </div>

              <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-slate-950">
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-4 xl:flex">
                <div className="segment-switch h-[58px] min-w-[340px]">
                  <div className="segment-switch__active" style={switchStyle} />
                  {(Object.keys(modes) as Mode[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setMode(key)}
                      className={`segment-switch__item ${mode === key ? "text-white" : "text-slate-600"}`}
                    >
                      {modes[key].label}
                    </button>
                  ))}
                </div>

                <a href={`tel:${phone}`} className="text-sm font-medium text-slate-700">
                  {phone}
                </a>

                <a
                  href="#lead-form"
                  className="glass-button h-[58px] min-w-[190px]"
                  style={{ ["--button-tint" as string]: active.buttonTint }}
                >
                  Розрахувати вартість
                </a>
              </div>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="icon-glass-button xl:hidden"
              >
                {mobileMenuOpen ? <X className="h-5 w-5 text-slate-900" /> : <Menu className="h-5 w-5 text-slate-900" />}
              </button>
            </div>

            <div className="mt-4 xl:hidden">
              <div className="segment-switch h-[54px] w-full">
                <div className="segment-switch__active" style={switchStyle} />
                {(Object.keys(modes) as Mode[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setMode(key)}
                    className={`segment-switch__item ${mode === key ? "text-white" : "text-slate-600"}`}
                  >
                    {modes[key].label}
                  </button>
                ))}
              </div>
            </div>

            {mobileMenuOpen ? (
              <div className="mt-4 grid gap-3 border-t border-white/65 pt-4 xl:hidden">
                <nav className="grid gap-2 text-sm font-medium text-slate-700">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href} onClick={closeMobileMenu} className="mobile-link-glass">
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <a href={`tel:${phone}`} className="mobile-link-glass text-center sm:text-left">
                    {phone}
                  </a>
                  <a
                    href="#lead-form"
                    onClick={closeMobileMenu}
                    className="glass-button h-[54px] min-w-[210px]"
                    style={{ ["--button-tint" as string]: active.buttonTint }}
                  >
                    Розрахувати вартість
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <section
        id="hero"
        className="section-shell grid gap-8 pb-8 pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-0 lg:pt-16"
      >
        <div className="max-w-[38rem]">
          <div className="hero-chip">
            <BadgeCheck className={`h-4 w-4 ${active.accentClass}`} />
            {active.eyebrow}
          </div>

          <h1 className="font-heading mt-7 text-[3rem] font-semibold leading-[0.9] tracking-[-0.078em] text-slate-950 sm:text-[4.25rem] lg:max-w-[8ch] lg:text-[5rem]">
            {active.title}
          </h1>
        </div>

        <div className="relative flex min-h-[600px] items-center justify-center lg:-ml-28 lg:justify-end">
          <div className={`hero-aura ${active.auraClass}`} />
          <div className="hero-floor-shadow" />

          <div className="hero-item-float">
            <div className="hero-item-tilt">
              <Image
                src={active.heroAsset}
                alt={active.heroAlt}
                width={1100}
                height={1100}
                priority
                className="hero-item object-contain"
              />
            </div>
          </div>

          <div className="hero-side-card">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-slate-400">Що отримує клієнт</p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              {mode === "windows"
                ? "Точна геометрія, шумозахист і спокійний зовнішній вигляд без візуального шуму."
                : "Комфортну температуру, акуратний монтаж і техніку, яка не перевантажує простір."}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="content-glass-panel">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <p className="max-w-[56rem] text-[1.14rem] leading-9 text-slate-600">
              {active.description}
            </p>

            <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-center">
              <a
                href="#lead-form"
                className="glass-button h-[58px] min-w-[220px]"
                style={{ ["--button-tint" as string]: active.buttonTint }}
              >
                {active.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <div className="flex min-h-[58px] items-center">
                <p className="max-w-sm text-sm leading-7 text-slate-500">{active.supporting}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 border-t border-white/70 pt-5 md:grid-cols-[1.08fr_1fr_1fr_1fr] md:items-center">
            <div className="px-2 py-2">
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-slate-400">Ключові переваги</p>
            </div>

            {active.highlights.map((item) => (
              <div key={item} className="pill-glass">
                <div className={`h-2.5 w-2.5 rounded-full ${mode === "windows" ? "bg-teal" : "bg-accent"}`} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="section-shell pb-20">
        <div className="grid gap-8 border-t border-slate-200/80 pt-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">Переваги</p>
            <h2 className="font-heading mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Акуратний мінімалізм у подачі та сервісі.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="soft-glass-card">
                <Icon className="h-5 w-5 text-slate-950" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="content-glass-panel grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">Заявка</p>
            <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Підготуємо розрахунок і допоможемо обрати рішення під ваш простір.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Залиште контакти, якщо хочете оцінити вартість вікон, кондиціонера або комплексного рішення. Ми зв'яжемося,
              уточнимо параметри об'єкта і запропонуємо практичний варіант без перевантаження зайвими опціями.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="pill-glass w-auto rounded-[0.95rem] px-4">
                <Frame className="h-4 w-4 text-teal" />
                Вікна
              </div>
              <div className="pill-glass w-auto rounded-[0.95rem] px-4">
                <Snowflake className="h-4 w-4 text-sky-500" />
                Кондиціонери
              </div>
              <div className="pill-glass w-auto rounded-[0.95rem] px-4">
                <PhoneCall className="h-4 w-4 text-slate-700" />
                Швидкий контакт
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
