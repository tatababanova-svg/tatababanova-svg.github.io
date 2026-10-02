import type { Metadata } from "next";
import ProofGallery from "./proof-gallery";
import "./marketing.css";

export const metadata: Metadata = {
  title: "Татьяна Бабанова — продуктовый и B2B-маркетинг",
  description:
    "Портфолио Татьяны Бабановой: исследования рынка и клиента, продуктовый и B2B-маркетинг, сайты, коммуникация, запуски и измеримые бизнес-результаты.",
  keywords: [
    "продуктовый маркетинг",
    "B2B маркетинг",
    "маркетинговые проекты",
    "исследование рынка",
    "позиционирование",
    "маркетинговая стратегия",
    "Татьяна Бабанова",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Татьяна Бабанова — продуктовый и B2B-маркетинг",
    description:
      "Исследую рынок и клиента, собираю маркетинговое решение и довожу его до запуска.",
    siteName: "Маркетинговое портфолио Татьяны Бабановой",
  },
  twitter: {
    card: "summary",
    title: "Татьяна Бабанова — продуктовый и B2B-маркетинг",
    description:
      "Исследования, продукт, B2B-коммуникация, сайты и запуски с измеримыми результатами.",
  },
};

const asset = "/marketing-assets";

const heroMetrics = [
  { value: "+8%", label: "к конверсии в покупки", note: "EAL · после первых внедрённых решений" },
  { value: "137", label: "целевых лидов", note: "COMvex" },
  { value: "67 млн ₽", label: "продаж", note: "COMvex · по данным бизнеса" },
  { value: "2 млн ₽/мес.", label: "выручка CarWit", note: "после запуска продукта" },
];

const proofCards = [
  {
    tag: "Исследование",
    title: "Рынок и аудитория",
    text: "Сравниваю предложения рынка, сегментирую аудиторию и нахожу, где решение действительно может отличаться.",
    result: "EAL · 13 конкурентов · 4 ситуации покупки",
    image: `${asset}/EAL-02-competitors.svg`,
    href: "#eal",
    size: "proof-card-wide",
  },
  {
    tag: "Продукт",
    title: "Позиционирование и продуктовая логика",
    text: "Перевожу вывод исследования в гипотезу: что предложить, кому, чем доказать ценность и что проверить.",
    result: "VOIS · путь клиента · 7 экранов прототипа",
    image: `${asset}/VOIS-03-prototype.svg`,
    href: "#vois",
    size: "",
  },
  {
    tag: "Сайт",
    title: "Структура и продуктовые страницы",
    text: "Собираю содержание, сценарий страницы, требования и точки действия — до готового запуска.",
    result: "EAL · 4 сценария входа",
    image: `${asset}/eal-site.jpg`,
    href: "#eal",
    size: "",
  },
  {
    tag: "Контент",
    title: "Продуктовая и рекламная упаковка",
    text: "Формирую содержание и требования, ставлю задачи дизайнерам и подрядчикам и веду материал до выпуска.",
    result: "CarWit · e-commerce · презентация · видео",
    image: `${asset}/CarWit-product-screen.jpg`,
    href: "#carwit",
    size: "",
  },
  {
    tag: "Запуск и аналитика",
    title: "От решения — к внедрению и результату",
    text: "Перевожу решение в конкретные задачи, держу готовность запуска и проверяю, что изменилось после.",
    result: "EAL · 40 задач внедрения · +8%",
    image: `${asset}/EAL-04-implementation.svg`,
    href: "#eal",
    size: "proof-card-wide",
  },
];

const cases = [
  {
    id: "eal",
    badge: "Рабочий проект",
    title: "EAL — B2B-коммерческая система",
    short: "Исследование → продуктовые входы → сайт → внедрение",
    outcome: "+8% к конверсии в покупки после первых трёх внедрённых решений.",
    task:
      "Разобраться, почему разные B2B-клиенты покупают одну и ту же услугу по разным причинам, и перестроить предложение под реальный процесс выбора.",
    research:
      "Исследовала 13 конкурентов, аудиторию, роли в принятии решения, критерии выбора и четыре ситуации покупки.",
    solution:
      "Сформировала четыре продуктовых входа, систему доказательств и новую логику сайта вместо одного общего каталога услуг.",
    launch:
      "Перевела решение в требования и план из 40 задач. Первые три решения бизнес внедрил.",
    role:
      "Исследование, сегментация, коммерческая логика, требования к сайту и приоритизация внедрения.",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
    proofs: [
      {
        src: `${asset}/EAL-02-competitors.svg`,
        alt: "Исследование конкурентов EAL",
        caption: "Сравнение конкурентов и поиск возможностей для содержательной отстройки.",
      },
      {
        src: `${asset}/EAL-01-CA.svg`,
        alt: "Сегментация аудитории EAL",
        caption: "Сегментация по ситуации покупки, рискам и критериям решения.",
      },
      {
        src: `${asset}/eal-site.jpg`,
        alt: "Реальный экран сайта EAL / MVP",
        caption: "Экран сайта / MVP, в который переведена коммерческая логика проекта.",
      },
    ],
  },
  {
    id: "vois",
    badge: "Инициативный проект",
    title: "VOIS — продуктово-маркетинговое исследование",
    short: "Путь клиента → гипотеза → прототип → система проверки",
    outcome:
      "7 экранов прототипа, 8 экспериментов и 17 показателей. Коммерческий эффект не заявляю: проект не внедрялся компанией.",
    task:
      "Понять, почему покупателю трудно сравнить продукты даже при большом количестве информации, и превратить вывод в проверяемое решение.",
    research:
      "Сравнила 9 брендов, выделила 5 сегментов и разобрала путь выбора из 10 этапов.",
    solution:
      "Собрала логику «задача клиента → критерий → доказательство → применение» и новую структуру продуктовой карточки.",
    launch:
      "Подготовила прототип, ТЗ дизайнеру, реестр экспериментов и систему измерения — готовую к тестированию.",
    role:
      "Исследование открытых данных, гипотеза проблемы, продуктовая логика, прототип и план проверки.",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
    proofs: [
      {
        src: `${asset}/VOIS-02-journey.svg`,
        alt: "Путь клиента VOIS",
        caption: "Этапы выбора, вопросы покупателя и точки неопределённости.",
      },
      {
        src: `${asset}/VOIS-03-prototype.svg`,
        alt: "Прототип VOIS",
        caption: "Прототип продуктовой карточки из семи экранов.",
      },
      {
        src: `${asset}/VOIS-04-brief.svg`,
        alt: "ТЗ дизайнеру VOIS",
        caption: "ТЗ: что должен понять пользователь, какое доказательство увидеть и что проверить.",
      },
    ],
  },
  {
    id: "carwit",
    badge: "Рабочий проект · КАН-АВТО",
    title: "CarWit — продукт, e-commerce и видео",
    short: "Продуктовая упаковка → контент → рекламные материалы → запуск",
    outcome:
      "После запуска ежемесячная выручка CarWit достигла 2 млн ₽ — на 900 тыс. ₽ выше предыдущего уровня.",
    task:
      "Перевести функции цифрового сервиса для автомобилистов в понятную продуктовую и рекламную коммуникацию.",
    research:
      "Собрала сценарии использования, требования внутренних заказчиков и форматы для e-commerce и рекламы.",
    solution:
      "Сформировала структуру продуктовой презентации, содержание e-commerce-материалов и сценарий рекламного ролика.",
    launch:
      "Вела материал от содержания и требований до готовности к выпуску; дизайн и производство выполняли профильные исполнители.",
    role:
      "Содержание, требования, сценарий, постановка задач и ведение реализации до запуска.",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c85815f807fca93e619b82a",
    proofs: [
      {
        src: `${asset}/CarWit-product-screen.jpg`,
        alt: "Экран продукта CarWit",
        caption: "Реальный экран продукта CarWit.",
      },
      {
        src: `${asset}/cover-CarWit.svg`,
        alt: "Материалы запуска CarWit",
        caption: "Обложка материалов запуска. Полная продуктовая презентация и видеоматериалы перечислены в подробном кейсе.",
      },

    ],
  },
  {
    id: "comvex",
    badge: "Рабочий проект · ГК Альфа",
    title: "COMvex — B2B-коммуникация и лидогенерация",
    short: "Технический продукт → материалы → лиды → продажи",
    outcome:
      "Бюджет 2,5 млн ₽ · 137 целевых лидов · 67 млн ₽ продаж · 44 млн ₽ валовой прибыли по данным бизнеса.",
    task:
      "Перевести сложный технический продукт в понятные B2B-материалы и подготовить коммуникацию к фиксированной дате.",
    research:
      "Собрала продуктовую и техническую информацию у внутренних участников и разложила её по аргументам и носителям.",
    solution:
      "Сформировала требования и содержание для презентационных, рекламных и выставочных материалов.",
    launch:
      "Довела до выпуска 157+ макетов и более 50 000 материалов. Дизайн и производство выполняли профильные исполнители.",
    role:
      "Маркетинговая задача, содержание, требования, ТЗ, согласования, контроль готовности и сбор результата.",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581fe8a90c1d0c5614168",
    proofs: [
      {
        src: `${asset}/cover-COMvex.svg`,
        alt: "COMvex — материалы проекта",
        caption: "Витрина кейса COMvex и его коммерческого результата.",
      },
      {
        src: `${asset}/Alpha-brandbook-colors.jpg`,
        alt: "Реальная страница бренд-системы ГК Альфа",
        caption: "Фрагмент бренд-системы. Моя роль — требования, содержание, ТЗ и контроль применения; графический дизайн — профильные исполнители.",
      },
    ],
  },
];

const additional = [
  {
    title: "TatOilExpo / GSS",
    tag: "B2B-событие",
    metric: "117 лидов",
    text: "Материалы, подрядчики и запуск к фиксированной дате. Бюджет 1,5 млн ₽; 37 млн ₽ атрибутированной оплаченной выручки по данным бизнеса.",
    image: `${asset}/cover-TatOil.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581969193f2ffd66e0ac3",
  },
  {
    title: "Бренд-системы",
    tag: "EAL · LOTOS · ГК Альфа",
    metric: "от требований до носителей",
    text: "Формировала требования к визуальной системе, ТЗ для дизайнеров и правила применения на digital-, печатных и выставочных материалах.",
    image: `${asset}/Alpha-brandbook-colors.jpg`,
    href: "#comvex",
  },
  {
    title: "Canton Fair / Китай",
    tag: "международная B2B-коммуникация",
    metric: "317 лидов · 98 клиентов",
    text: "За две недели до запуска требования существенно изменились. Проект пересобран без переноса даты и дополнительного бюджета.",
    image: `${asset}/cover-Canton.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581339f94cf048cc2dabc",
  },
  {
    title: "Новый сайт EAL",
    tag: "B2B digital",
    metric: "4 сценария входа",
    text: "Перевела исследование и коммерческую стратегию в структуру сайта, продуктовые страницы и требования к точкам действия.",
    image: `${asset}/eal-site.jpg`,
    href: "#eal",
  },
];

const tasks = [
  "Исследовать рынок и аудиторию перед запуском — и объяснить, какие выводы из этого следуют для бизнеса.",
  "Сформулировать продуктовую или коммерческую гипотезу: что предложить, кому, почему и чем доказать ценность.",
  "Собрать позиционирование, предложение и путь клиента до нужного действия.",
  "Перевести решение в сайт, продуктовую страницу, презентацию, видео, контент или бренд-систему.",
  "Организовать запуск с командой и подрядчиками и проверить результат по лидам, конверсии, продажам или другой целевой метрике.",
];

export default function MarketingPortfolio() {
  return (
    <main className="marketing-site">
      <nav className="marketing-nav" aria-label="Навигация">
        <a className="marketing-brand" href="#top">
          <strong>Татьяна Бабанова</strong>
          <span>маркетинговые проекты</span>
        </a>
        <div className="marketing-nav-links">
          <a href="#proofs">Работа</a>
          <a href="#cases">Кейсы</a>
          <a href="#tasks">Задачи</a>
          <a href="#contact">Контакты</a>
        </div>
      </nav>

      <section className="marketing-hero" id="top">
        <div className="marketing-shell marketing-hero-card">
          <div className="marketing-hero-copy">
            <span className="marketing-badge">Продуктовый и B2B-маркетинг</span>
            <h1>Исследую рынок, собираю маркетинговое решение и довожу его до запуска.</h1>
            <p className="marketing-lead">
              Помогаю бизнесу понять, что мешает клиенту выбрать или продукту расти,
              и превращаю выводы в конкретное решение — позиционирование, сайт,
              продуктовую страницу, коммуникацию или запуск.
            </p>
            <p className="marketing-hero-proof">
              Я соединяю стратегию и реализацию: сама собираю логику решения и требования,
              затем веду работу с дизайнерами, разработчиками и подрядчиками до готового результата.
            </p>
            <div className="marketing-hero-actions">
              <a className="marketing-button marketing-button-primary" href="#cases">Смотреть кейсы</a>
              <a className="marketing-button marketing-button-secondary" href="#contact">Обсудить задачу</a>
            </div>
          </div>

          <div className="marketing-hero-visual">
            <img src="/tatiana-babanova.jpg" alt="Татьяна Бабанова" />
            <div className="marketing-hero-stamp">
              <span>исследование</span>
              <span>→</span>
              <span>решение</span>
              <span>→</span>
              <span>запуск</span>
            </div>
          </div>

          <div className="marketing-hero-metrics">
            {heroMetrics.map((item) => (
              <article key={item.value + item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-proof-section" id="proofs">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <span className="marketing-badge">Реальные фрагменты работы</span>
            <h2>Не список навыков — доказательства того, как я работаю</h2>
            <p>
              Исследование, продуктовая логика, ТЗ, сайт, коммуникация и внедрение —
              каждый блок опирается на реальный материал проекта.
            </p>
          </div>

          <div className="marketing-proof-bento">
            {proofCards.map((item) => (
              <a className={`marketing-proof-card ${item.size}`} href={item.href} key={item.title}>
                <div className="marketing-proof-card-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span>{item.tag}</span>
                </div>
                <div className="marketing-proof-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>{item.result}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-cases" id="cases">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <span className="marketing-badge">Флагманские кейсы</span>
            <h2>Четыре проекта, где видно бизнес-задачу, решение и результат</h2>
          </div>

          <div className="marketing-case-list">
            {cases.map((item, index) => (
              <article className="marketing-case" id={item.id} key={item.id}>
                <header className="marketing-case-header">
                  <div>
                    <span className="marketing-case-number">0{index + 1}</span>
                    <span className="marketing-case-badge">{item.badge}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.short}</p>
                  </div>
                  <div className="marketing-case-outcome">
                    <small>Результат / выход</small>
                    <strong>{item.outcome}</strong>
                  </div>
                </header>

                <ProofGallery items={item.proofs} className="marketing-case-proofs" />

                <div className="marketing-case-story">
                  <div>
                    <span>Бизнес-задача</span>
                    <p>{item.task}</p>
                  </div>
                  <div>
                    <span>Что исследовала</span>
                    <p>{item.research}</p>
                  </div>
                  <div>
                    <span>Решение</span>
                    <p>{item.solution}</p>
                  </div>
                  <div>
                    <span>Что дошло до запуска</span>
                    <p>{item.launch}</p>
                  </div>
                </div>

                <footer className="marketing-case-footer">
                  <p><b>Моя роль:</b> {item.role}</p>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    Открыть подробный кейс ↗
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-additional">
        <div className="marketing-shell">
          <div className="marketing-section-head marketing-section-head-row">
            <div>
              <span className="marketing-badge">Ещё проекты</span>
              <h2>Опыт шире четырёх флагманских кейсов</h2>
            </div>
            <p>
              Здесь оставила только проекты, которые добавляют новое доказательство:
              событийный маркетинг, бренд, международную коммуникацию и B2B digital.
            </p>
          </div>

          <div className="marketing-additional-grid">
            {additional.map((item, index) => (
              <a
                className={`marketing-additional-card marketing-additional-card-${index + 1}`}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                key={item.title}
              >
                <div className="marketing-additional-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span>{item.tag}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <strong>{item.metric}</strong>
                  <p>{item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-tasks" id="tasks">
        <div className="marketing-shell marketing-tasks-layout">
          <div className="marketing-section-head">
            <span className="marketing-badge">Для работодателя</span>
            <h2>Что я закрываю как маркетолог-проектник: от исследования до запуска</h2>
            <p>
              Я полезна там, где маркетинговую задачу нужно не только придумать,
              но и разобрать, превратить в решение и довести до готового результата.
            </p>
          </div>

          <div className="marketing-task-list">
            {tasks.map((task, index) => (
              <article key={task}>
                <span>0{index + 1}</span>
                <p>{task}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-contact" id="contact">
        <div className="marketing-shell marketing-contact-card">
          <div>
            <span className="marketing-badge marketing-badge-dark">Контакты</span>
            <h2>
              Нужен маркетолог-проектник, который умеет разобраться в рынке,
              собрать решение и довести его до запуска? Давайте обсудим задачу.
            </h2>
            <p>Удалённо по РФ · гибрид обсуждаем · командировки и релокация</p>
          </div>
          <div className="marketing-contact-actions">
            <a className="marketing-contact-primary" href="https://t.me/taninnik" target="_blank" rel="noreferrer">
              Telegram ↗
            </a>
            <a href="tel:+79867233155">+7 986 723 31 55</a>
            <a href="mailto:babanova595@gmail.com">babanova595@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
