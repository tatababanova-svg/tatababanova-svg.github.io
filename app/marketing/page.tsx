import type { Metadata } from "next";
import SafeImage from "./safe-image";
import "./marketing.css";

export const metadata: Metadata = {
  title: "Татьяна Бабанова — продуктовый и B2B-маркетинг",
  description:
    "Портфолио Татьяны Бабановой: исследования рынка и аудитории, B2B и продуктовый маркетинг, сайты, e-commerce, бренд, видео и коммерческие результаты.",
};

const assetBase = "/marketing-assets";
const sourceAssetBase =
  "https://raw.githubusercontent.com/tatababanova-svg/tatiana-babanova-portfolio/notion-portfolio-assets-20260928/public/notion-assets";

const topResults = [
  {
    value: "+45%",
    title: "рост продаж",
    text: "ГК Альфа внедрила 9 из 15 рекомендаций по рынку, конкурентам, аудитории и спросу. За следующий год продажи выросли на 45%.",
  },
  {
    value: "+8%",
    title: "к конверсии в покупки",
    text: "EAL: после внедрения первых трёх решений из разработанной B2B-коммерческой системы.",
  },
  {
    value: "2 млн ₽/мес.",
    title: "CarWit после запуска",
    text: "Ежемесячная выручка продукта достигла 2 млн ₽ — на 900 тыс. ₽ выше предыдущего уровня.",
  },
  {
    value: "137 лидов",
    title: "COMvex",
    text: "По данным бизнеса: 67 млн ₽ продаж и 44 млн ₽ валовой прибыли при бюджете проекта 2,5 млн ₽.",
  },
];

const workDirections = [
  {
    number: "01",
    title: "Рынок и аудитория",
    text: "Сравниваю конкурентов, сегментирую аудиторию и разбираю, почему клиент выбирает один вариант, а не другой.",
    proof: "EAL · 13 конкурентов · 4 ситуации покупки",
    image: `${assetBase}/EAL-02-competitors.svg`,
    fallback: "Исследование конкурентов EAL",
    href: "#eal",
  },
  {
    number: "02",
    title: "Позиционирование и продукт",
    text: "Перевожу выводы исследования в продуктовую логику: что предложить, кому, чем доказать ценность и что проверить.",
    proof: "VOIS · путь клиента · продуктовые гипотезы",
    image: `${assetBase}/VOIS-02-journey.svg`,
    fallback: "Путь клиента VOIS",
    href: "#vois",
  },
  {
    number: "03",
    title: "Сайты и продуктовые страницы",
    text: "Собираю структуру страницы, требования, доказательства, форму действия и ТЗ — до готового запуска.",
    proof: "EAL · новый сайт · VOIS · прототип и ТЗ",
    image: `${assetBase}/EAL-06-TZ-fragment.svg`,
    fallback: "MVP и требования к сайту EAL",
    href: "#eal",
  },
  {
    number: "04",
    title: "Контент и визуальная упаковка",
    text: "Собираю содержание, сценарий и требования; ставлю задачи дизайнерам и подрядчикам и сопровождаю материал до выпуска.",
    proof: "CarWit · e-commerce · видео · брендбуки",
    image: `${assetBase}/cover-CarWit.svg`,
    fallback: "Продуктовая презентация CarWit",
    href: "#carwit",
  },
  {
    number: "05",
    title: "Запуск и результат",
    text: "Перевожу решение в задачи внедрения, синхронизирую исполнителей и проверяю, что произошло после запуска.",
    proof: "EAL · план внедрения · +8% к конверсии",
    image: `${assetBase}/EAL-04-implementation.svg`,
    fallback: "План внедрения EAL",
    href: "#research-route",
  },
];

const flagshipCases = [
  {
    id: "eal",
    number: "01",
    label: "Рабочий проект",
    title: "EAL — B2B-коммерческая система",
    subtitle: "Исследование + B2B + продукт + сайт + конверсия",
    task:
      "Понять, почему разные B2B-клиенты покупают одну и ту же услугу по разным причинам, и перестроить предложение под реальный процесс выбора.",
    research:
      "13 конкурентов, аудитория, роли в решении, критерии выбора, клиентский путь и коммерческие сценарии.",
    insight:
      "Один общий каталог услуг не отвечает разным ситуациям покупки. Для разных участников решения нужны разные аргументы и доказательства.",
    solution:
      "Четыре продуктовых входа, отдельные доказательства под сценарии покупки и новая логика сайта и коммерческой коммуникации.",
    created:
      "Сегментация, конкурентный анализ, путь клиента, реестр доказательности, требования к сайту и план из 40 задач.",
    launched:
      "Бизнес начал внедрение. Первые три решения были реализованы.",
    result:
      "После внедрения первых трёх решений конверсия в покупки выросла на 8%.",
    role:
      "Исследование → вывод → коммерческая логика → требования → приоритизация внедрения.",
    visuals: [
      { src: `${assetBase}/EAL-02-competitors.svg`, alt: "Анализ конкурентов EAL", fallback: "Анализ конкурентов" },
      { src: `${assetBase}/EAL-01-CA.svg`, alt: "Сегментация аудитории EAL", fallback: "Сегментация аудитории" },
      { src: "/marketing-assets/eal-site.jpg", alt: "Новый сайт EAL", fallback: "Готовый сайт EAL" },
    ],
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
  },
  {
    id: "vois",
    number: "02",
    label: "Инициативный проект на открытых данных",
    title: "VOIS — продуктово-маркетинговый проект",
    subtitle: "Исследование покупателя + продуктовая логика + прототипирование",
    task:
      "Понять, почему при большом количестве информации покупателю всё равно трудно сравнить продукты и сделать выбор.",
    research:
      "9 брендов, 5 клиентских сегментов, путь клиента из 10 этапов, вопросы и точки неопределённости при выборе.",
    insight:
      "Проблема не только в объёме информации. Покупателю не хватает структуры сравнения и доказательств именно в момент выбора.",
    solution:
      "Логика «задача клиента → критерий → доказательство → применение» и новая структура продуктовой карточки.",
    created:
      "Прототип из 7 экранов, ТЗ дизайнеру, 8 экспериментов, система из 17 показателей и план на 13 недель.",
    launched:
      "Проект не внедрялся компанией: это демонстрация моего продуктового мышления на открытых данных.",
    result:
      "Готовое к проверке решение: прототип + ТЗ + система экспериментов и измерения.",
    role:
      "Исследование открытых данных → гипотеза проблемы → решение → прототип → система проверки.",
    visuals: [
      { src: `${assetBase}/VOIS-02-journey.svg`, alt: "Путь клиента VOIS", fallback: "Путь клиента" },
      { src: `${assetBase}/VOIS-03-prototype.svg`, alt: "Прототип VOIS", fallback: "Прототип 7 экранов" },
      { src: `${assetBase}/VOIS-04-brief.svg`, alt: "ТЗ VOIS", fallback: "Фрагмент ТЗ" },
    ],
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
  },
  {
    id: "carwit",
    number: "03",
    label: "Рабочий проект · КАН-АВТО",
    title: "CarWit — продукт, e-commerce и видео",
    subtitle: "Продукт + контент + рекламные материалы + коммерческий результат",
    task:
      "Поддержать запуск цифрового сервиса для автомобилистов и перевести его функции в понятные клиенту продуктовые материалы.",
    research:
      "Сценарии использования продукта, требования внутренних заказчиков и форматы для e-commerce и рекламной коммуникации.",
    insight:
      "Функций много, поэтому продукт нужно объяснять не перечнем возможностей, а через ситуации пользователя и понятный сценарий ценности.",
    solution:
      "Структура продуктовой презентации, e-commerce-материалы и рекламный сценарий, который показывает продукт через реальные ситуации.",
    created:
      "Продуктовая презентация, товарный контент, сценарий ролика из 11 сцен; участвовала в подборе актёров, диктора и съёмке.",
    launched:
      "Продукт и маркетинговые материалы были выпущены. Визуальную реализацию делали дизайнеры и подрядчики.",
    result:
      "После запуска ежемесячная выручка CarWit достигла 2 млн ₽ — на 900 тыс. ₽ выше предыдущего уровня.",
    role:
      "Содержание и требования → сценарий → постановка задач → сопровождение производства → запуск.",
    visuals: [
      { src: `${assetBase}/cover-CarWit.svg`, alt: "CarWit — материалы продуктового запуска", fallback: "CarWit — продукт и материалы запуска" },
    ],
    href: "https://marsh-inch-22f.notion.site/3e92eed19c85815f807fca93e619b82a",
  },
  {
    id: "comvex",
    number: "04",
    label: "Рабочий проект · ГК Альфа",
    title: "COMvex — B2B-коммуникация и лидогенерация",
    subtitle: "B2B + материалы + производство + лиды + коммерческий результат",
    task:
      "Перевести сложный технический продукт в понятные B2B-материалы и подготовить коммуникацию к фиксированной дате.",
    research:
      "Собирала продуктовую и техническую информацию у внутренних участников и переводила её в структуру для клиента и партнёра.",
    insight:
      "Сложная техническая информация не продаёт сама себя: её нужно собрать, упорядочить и разложить по аргументам, носителям и этапам коммуникации.",
    solution:
      "Единая система требований к презентационным, рекламным и выставочным материалам с понятной связью между содержанием и коммерческой задачей.",
    created:
      "157+ макетов и более 50 000 рекламных материалов; координация 4 подрядчиков, дизайна и производства.",
    launched:
      "Материалы выпущены к фиксированной дате. Я отвечала за требования, содержание, согласования и готовность; дизайн и производство выполняли профильные исполнители.",
    result:
      "137 целевых лидов → 67 млн ₽ продаж → 44 млн ₽ валовой прибыли по данным бизнеса.",
    role:
      "Маркетинговая задача → требования → содержание → исполнители → выпуск → сбор коммерческого результата.",
    visuals: [
      { src: `${assetBase}/cover-COMvex.svg`, alt: "COMvex — материалы проекта", fallback: "COMvex — B2B-коммуникация" },
      { src: `${sourceAssetBase}/Alpha-brandbook-colors.jpg`, alt: "Реальный фрагмент бренд-системы ГК Альфа", fallback: "Бренд-система ГК Альфа" },
    ],
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581fe8a90c1d0c5614168",
  },
];

const gallery = [
  {
    title: "Исследование конкурентов · EAL",
    role: "Задала критерии сравнения и выделила, где предложения рынка уже выглядят одинаково.",
    image: `${assetBase}/EAL-02-competitors.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
    tag: "исследование",
  },
  {
    title: "Сегментация аудитории · EAL",
    role: "Разделила аудиторию по ситуации покупки, риску и критериям выбора.",
    image: `${assetBase}/EAL-01-CA.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
    tag: "B2B",
  },
  {
    title: "MVP сайта · EAL",
    role: "Исследование и коммерческую логику перевела в структуру сайта, продуктовые входы и требования к страницам.",
    image: `${assetBase}/EAL-06-TZ-fragment.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
    tag: "сайт · MVP",
    mvp: true,
  },
  {
    title: "Путь клиента · VOIS",
    role: "Связала этапы выбора с вопросами покупателя и точками, где информации недостаточно.",
    image: `${assetBase}/VOIS-02-journey.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
    tag: "исследование",
  },
  {
    title: "ТЗ дизайнеру · VOIS",
    role: "Зафиксировала, что должен понять пользователь, какое доказательство увидеть и что проверить.",
    image: `${assetBase}/VOIS-04-brief.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
    tag: "продукт",
  },
  {
    title: "Эксперименты · VOIS",
    role: "Собрала гипотезы и показатели, по которым можно оценивать изменение поведения пользователя.",
    image: `${assetBase}/VOIS-05-experiments.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
    tag: "аналитика",
  },
  {
    title: "CarWit · продукт и рекламные материалы",
    role: "Собирала содержание, требования и сценарий; визуальную реализацию выполняли дизайнеры и подрядчики.",
    image: `${assetBase}/cover-CarWit.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c85815f807fca93e619b82a",
    tag: "продукт · e-commerce",
  },
  {
    title: "Бренд-система · ГК Альфа",
    role: "Работала с требованиями к фирменной системе и контролем единообразия материалов.",
    image: `${sourceAssetBase}/Alpha-brandbook-colors.jpg`,
    href: "#comvex",
    tag: "бренд",
  },
];

const selectedWork = [
  {
    title: "TatOilExpo / GSS",
    category: "B2B-событие · лидогенерация",
    metric: "117 лидов",
    text: "Выставочный проект с фиксированным сроком: материалы, подрядчики, запуск и последующий коммерческий результат. По данным бизнеса — 37 млн ₽ оплаченной выручки при бюджете 1,5 млн ₽.",
    image: "",
    size: "wide",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581969193f2ffd66e0ac3",
    visualText: "117 лидов · выставочный B2B-проект",
  },
  {
    title: "EAL — новый сайт",
    category: "B2B digital · продуктовые страницы",
    metric: "4 сценария входа",
    text: "Перевела исследование и коммерческую стратегию в структуру сайта, требования к страницам и точки действия. В среднем сайт получает около 14 заявок в неделю.",
    image: `${assetBase}/EAL-06-TZ-fragment.svg`,
    size: "large",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
    mvp: true,
  },
  {
    title: "Бренд-системы",
    category: "EAL · LOTOS · ГК Альфа",
    metric: "от логотипа до носителей",
    text: "Формировала требования к визуальной системе, ТЗ для дизайнеров и правила применения на digital-, печатных и выставочных материалах.",
    image: `${sourceAssetBase}/Alpha-brandbook-colors.jpg`,
    size: "tall",
    href: "#comvex",
  },
  {
    title: "Canton Fair / Китай",
    category: "международная B2B-коммуникация",
    metric: "делегация 5 человек",
    text: "Подготовка презентационных материалов, переводов и коммуникации для международной деловой поездки и переговоров.",
    image: "",
    size: "standard",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581339f94cf048cc2dabc",
    visualText: "Китай · международная B2B-коммуникация",
  },
  {
    title: "Рекламное видео",
    category: "видеомаркетинг",
    metric: "+23% к конверсии",
    text: "Три рекламных видеоматериала: постановка задачи, выбор исполнителей, производство и выпуск. После запуска конверсия из лидов в продажи выросла на 23%.",
    image: "",
    size: "standard",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c85815f807fca93e619b82a",
    visualText: "3 рекламных видео · +23% к конверсии",
  },
  {
    title: "Маркетинговое производство",
    category: "КАН-АВТО",
    metric: "167 запросов · 100% в срок",
    text: "15 внутренних заказчиков, 3 дизайнера и до 5 подрядчиков. Управляла потоком материалов и доводила запросы до готового результата.",
    image: "",
    size: "wide",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581fe8a90c1d0c5614168",
    visualText: "167 запросов · 100% выполнено в срок",
  },
];

export default function MarketingPortfolio() {
  return (
    <main className="marketing-site">
      <nav className="marketing-nav" aria-label="Навигация по маркетинговому портфолио">
        <a className="marketing-brand" href="#top">
          <span>Татьяна Бабанова</span>
          <small>маркетинговые и исследовательские проекты</small>
        </a>
        <div className="marketing-nav-links">
          <a href="#results">Результаты</a>
          <a href="#work">Работа</a>
          <a href="#cases">Кейсы</a>
          <a href="#gallery">Материалы</a>
          <a href="#contact">Контакты</a>
        </div>
      </nav>

      <section className="marketing-hero" id="top">
        <div className="marketing-shell marketing-hero-grid">
          <div className="marketing-hero-copy">
            <p className="marketing-kicker">Продуктовый и B2B-маркетинг · исследования · запуски</p>
            <h1>Превращаю исследование рынка и клиента в продукт, коммуникацию и измеримый результат.</h1>
            <p className="marketing-lead">
              Разбираюсь, что мешает клиенту выбрать или бизнесу расти, формулирую гипотезу и собираю решение:
              позиционирование, сайт, продуктовую страницу, контент, видео или B2B-коммуникацию.
            </p>
            <p className="marketing-hero-proof">
              <strong>Моя сильная сторона:</strong> соединяю стратегию и реализацию — от исследования и ТЗ
              до работы с дизайнерами, разработчиками, подрядчиками, запуска и проверки результата.
            </p>
            <div className="marketing-hero-actions">
              <a className="marketing-button marketing-button-primary" href="#cases">Смотреть кейсы</a>
              <a className="marketing-button marketing-button-secondary" href="#contact">Обсудить задачу</a>
            </div>
            <div className="marketing-hero-metrics" aria-label="Ключевые результаты">
              <div><strong>+45%</strong><span>рост продаж</span></div>
              <div><strong>+23%</strong><span>конверсия лид → продажа</span></div>
              <div><strong>137</strong><span>целевых лидов</span></div>
              <div><strong>2 млн ₽</strong><span>выручка CarWit / месяц</span></div>
            </div>
          </div>

          <aside className="marketing-hero-side">
            <figure className="marketing-portrait">
              <img src="/tatiana-babanova.jpg" alt="Татьяна Бабанова" />
            </figure>
            <div className="marketing-hero-side-copy">
              <strong>Открыта к удалённой и гибридной работе</strong>
              <span>командировки и релокация обсуждаемы</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="marketing-section marketing-results" id="results">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Результаты</p>
            <h2>Что изменилось после маркетинговой работы</h2>
            <p>Четыре показателя, которые лучше всего подтверждают связь моей работы с бизнес-результатом.</p>
          </div>
          <div className="marketing-results-grid">
            {topResults.map((item) => (
              <article className="marketing-result" key={item.value + item.title}>
                <strong>{item.value}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-work" id="work">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Что я умею превращать в решение</p>
            <h2>Не список навыков — реальные фрагменты моей работы</h2>
          </div>
          <div className="marketing-work-grid">
            {workDirections.map((item) => (
              <a className="marketing-work-card" href={item.href} key={item.number}>
                <div className="marketing-work-media">
                  <SafeImage src={item.image} alt={item.title} fallback={item.fallback} />
                </div>
                <div className="marketing-work-copy">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <small>{item.proof}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-cases" id="cases">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Флагманские кейсы</p>
            <h2>Четыре проекта, которые показывают, как я думаю и что создаю</h2>
          </div>

          <div className="marketing-case-list">
            {flagshipCases.map((item) => (
              <article className="marketing-case" id={item.id} key={item.id}>
                <header className="marketing-case-head">
                  <span>{item.number}</span>
                  <div>
                    <p className="marketing-case-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p className="marketing-case-subtitle">{item.subtitle}</p>
                  </div>
                </header>

                <div className="marketing-case-visuals">
                  {item.visuals.map((visual) => (
                    <div className="marketing-case-visual" key={visual.src}>
                      <SafeImage src={visual.src} alt={visual.alt} fallback={visual.fallback} />
                    </div>
                  ))}
                </div>

                <div className="marketing-story-grid">
                  <div><span>Задача</span><p>{item.task}</p></div>
                  <div><span>Что исследовала</span><p>{item.research}</p></div>
                  <div><span>Что увидела</span><p>{item.insight}</p></div>
                  <div><span>Что предложила</span><p>{item.solution}</p></div>
                  <div><span>Что создала</span><p>{item.created}</p></div>
                  <div><span>Что было запущено</span><p>{item.launched}</p></div>
                </div>

                {item.id === "vois" && (
                  <div className="marketing-before-after" aria-label="Было — решение — стало">
                    <article>
                      <span>Было</span>
                      <p>Информации о продукте много, но покупателю трудно сравнить варианты и понять, что подходит именно ему.</p>
                    </article>
                    <i>→</i>
                    <article>
                      <span>Решение</span>
                      <p>Разложила выбор по задачам клиента, критериям и доказательствам и собрала структуру из 7 экранов.</p>
                    </article>
                    <i>→</i>
                    <article>
                      <span>Стало</span>
                      <p>Появились прототип, ТЗ и 8 экспериментов для проверки. Это готовое к тестированию решение, а не заявленный коммерческий эффект.</p>
                    </article>
                  </div>
                )}

                <div className="marketing-case-bottom">
                  <div>
                    <span>Результат</span>
                    <strong>{item.result}</strong>
                  </div>
                  <div>
                    <span>Моя роль</span>
                    <p>{item.role}</p>
                  </div>
                  <a className="marketing-case-link" href={item.href} target="_blank" rel="noreferrer">
                    Открыть подробный кейс ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-gallery" id="gallery">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Фрагменты моей работы</p>
            <h2>Материалы, по которым видно не только результат, но и процесс</h2>
            <p>Это реальные рабочие артефакты и фрагменты проектов. Нажмите на изображение, чтобы рассмотреть материал; под ним — переход к подробному кейсу.</p>
          </div>
          <div className="marketing-gallery-grid">
            {gallery.map((item) => {
              const materialHref = item.mvp ? item.href : item.image;
              return (
                <article className="marketing-gallery-card" key={item.title}>
                  <figure>
                    <a
                      className={`marketing-gallery-image ${item.mvp ? "marketing-gallery-mvp" : ""}`}
                      href={materialHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Открыть материал: ${item.title}`}
                    >
                      {item.mvp ? (
                        <div className="marketing-mvp-browser" aria-label="MVP сайта EAL">
                          <div className="marketing-mvp-top"><i /><i /><i /><span>EAL</span></div>
                          <div className="marketing-mvp-hero">
                            <small>МЕЖДУНАРОДНЫЕ ПОСТАВКИ ДЛЯ БИЗНЕСА</small>
                            <strong>Сначала схема.<br />Потом поставка.</strong>
                            <p>Проверяем исходные данные, риски и маршрут до запуска.</p>
                          </div>
                          <div className="marketing-mvp-cards"><i /><i /><i /><i /></div>
                        </div>
                      ) : (
                        <SafeImage src={item.image} alt={item.title} fallback={item.title} />
                      )}
                      <span className="marketing-gallery-tag">{item.tag}</span>
                      <span className="marketing-gallery-open">Увеличить ↗</span>
                    </a>
                    <figcaption>
                      <strong>{item.title}</strong>
                      <p>{item.role}</p>
                      <a className="marketing-gallery-case-link" href={item.href} target="_blank" rel="noreferrer">
                        Открыть подробный кейс →
                      </a>
                    </figcaption>
                  </figure>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-research-route" id="research-route">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Как исследование превращается в решение</p>
            <h2>На примере EAL: от вопроса бизнеса до измеримого изменения</h2>
          </div>

          <div className="marketing-route">
            <article><b>01</b><h3>Бизнес-вопрос</h3><p>Почему разным B2B-клиентам недостаточно одного общего предложения?</p></article>
            <article><b>02</b><h3>Что нужно узнать</h3><p>Конкуренты, ситуации покупки, роли в решении, риски и критерии выбора.</p></article>
            <article><b>03</b><h3>Источники и проверка</h3><p>Открытые материалы конкурентов + исходные данные проекта. Факты отделяю от гипотез и отмечаю, чего ещё не хватает.</p></article>
            <article><b>04</b><h3>Закономерность</h3><p>Одна услуга покупается по разным причинам; разным участникам решения нужны разные доказательства.</p></article>
            <article><b>05</b><h3>Решение</h3><p>4 продуктовых входа, новая логика сайта, коммерческие сценарии и система доказательств.</p></article>
            <article><b>06</b><h3>Внедрение</h3><p>Выводы переведены в 40 задач. Первые три решения внедрены.</p></article>
            <article className="marketing-route-result"><b>07</b><h3>Результат</h3><p>+8% к конверсии в покупки после первых внедрённых решений.</p></article>
          </div>

          <div className="marketing-source-proof">
            <div className="marketing-source-image">
              <SafeImage
                src={`${assetBase}/EAL-05-evidence.svg`}
                alt="Реестр доказательности EAL"
                fallback="Факты, гипотезы и недостающие данные"
              />
            </div>
            <div>
              <p className="marketing-eyebrow">Работа с источниками</p>
              <h3>Я отдельно фиксирую, что подтверждено, что остаётся гипотезой и какие данные ещё нужны.</h3>
              <p>Это не декоративный этап исследования: он определяет, какие маркетинговые заявления можно использовать и что нужно проверить до запуска.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-selected">
        <div className="marketing-shell">
          <div className="marketing-section-head marketing-section-head-split">
            <div>
              <p className="marketing-eyebrow">Ещё проекты</p>
              <h2>Маркетинг, который дошёл до реального материала и запуска</h2>
            </div>
            <p>Здесь — не условные иконки, а конкретные проекты и материалы из моей работы.</p>
          </div>
          <div className="marketing-selected-grid">
            {selectedWork.map((item) => (
              <a
                className={`marketing-selected-card marketing-selected-${item.size}`}
                href={item.href || "#cases"}
                target={(item.href || "").startsWith("http") ? "_blank" : undefined}
                rel={(item.href || "").startsWith("http") ? "noreferrer" : undefined}
                key={item.title}
              >
                <div className={`marketing-selected-media ${item.mvp ? "marketing-selected-media-mvp" : ""}`}>
                  {item.mvp ? (
                    <div className="marketing-mvp-browser marketing-mvp-browser-large" aria-label="MVP сайта EAL">
                      <div className="marketing-mvp-top"><i /><i /><i /><span>EAL</span></div>
                      <div className="marketing-mvp-hero">
                        <small>МЕЖДУНАРОДНЫЕ ПОСТАВКИ ДЛЯ БИЗНЕСА</small>
                        <strong>Сначала схема.<br />Потом поставка.</strong>
                        <p>До оплаты помогаем проверить исходные данные, ограничения, маршрут и риски.</p>
                      </div>
                      <div className="marketing-mvp-cards"><i /><i /><i /><i /></div>
                    </div>
                  ) : item.image ? (
                    <SafeImage src={item.image} alt={item.title} fallback={item.title} />
                  ) : (
                    <div className="marketing-evidence-visual" aria-label={item.title}>
                      <small>РЕАЛЬНЫЙ ПРОЕКТ</small>
                      <strong>{item.visualText || item.metric}</strong>
                      <span>{item.category}</span>
                    </div>
                  )}
                  <span>{item.category}</span>
                  <b className="marketing-selected-open">Смотреть проект ↗</b>
                </div>
                <div className="marketing-selected-copy">
                  <p>{item.title}</p>
                  <strong>{item.metric}</strong>
                  <span>{item.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-tasks">
        <div className="marketing-shell marketing-task-layout">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Для работодателя</p>
            <h2>Какие задачи я могу закрыть</h2>
          </div>
          <div className="marketing-task-list">
            <article><b>01</b><p>Исследовать рынок и аудиторию перед запуском и объяснить, что из этого следует для бизнеса.</p></article>
            <article><b>02</b><p>Найти и сформулировать продуктовую или коммерческую гипотезу: что предложить, кому и почему.</p></article>
            <article><b>03</b><p>Спроектировать позиционирование, предложение и путь клиента до нужного действия.</p></article>
            <article><b>04</b><p>Перевести решение в сайт, продуктовую страницу, контент, презентацию, видео или визуальную систему.</p></article>
            <article><b>05</b><p>Организовать запуск с командой и подрядчиками и проверить, что произошло после.</p></article>
          </div>
        </div>
      </section>

      <section className="marketing-contact" id="contact">
        <div className="marketing-shell marketing-contact-grid">
          <div>
            <p className="marketing-eyebrow">Контакты</p>
            <h2>Нужен маркетолог, который не останавливается на идее — исследует, собирает решение и доводит его до запуска? Давайте обсудим задачу.</h2>
            <p>Удалённая работа по РФ · гибридный формат обсуждаем · готова к командировкам и релокации</p>
          </div>
          <div className="marketing-contact-actions">
            <a className="marketing-contact-primary" href="https://t.me/taninnik" target="_blank" rel="noreferrer">Написать в Telegram ↗</a>
            <a href="tel:+79867233155">+7 986 723 31 55</a>
            <a href="mailto:babanova595@gmail.com">babanova595@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
