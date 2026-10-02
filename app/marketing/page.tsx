import type { Metadata } from "next";
import SafeImage from "./safe-image";
import "./marketing.css";

export const metadata: Metadata = {
  title: "Татьяна Бабанова — маркетинговые и исследовательские проекты",
  description:
    "Портфолио Татьяны Бабановой: исследования рынка и аудитории, B2B и продуктовый маркетинг, сайты, e-commerce, бренд, видео и коммерческие результаты.",
};

const assetBase =
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
    image: "/marketing-assets/eal-site.jpg",
    fallback: "Новый сайт EAL",
    href: "#gallery",
  },
  {
    number: "04",
    title: "Контент и визуальная упаковка",
    text: "Собираю содержание, сценарий и требования; ставлю задачи дизайнерам и подрядчикам и сопровождаю материал до выпуска.",
    proof: "CarWit · e-commerce · видео · брендбуки",
    image: `${assetBase}/CarWit-product-screen.jpg`,
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
      { src: `${assetBase}/CarWit-product-screen.jpg`, alt: "Экран продукта CarWit", fallback: "CarWit — продукт" },
      { src: `${assetBase}/cover-CarWit.svg`, alt: "Материалы CarWit", fallback: "CarWit — материалы запуска" },
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
      { src: `${assetBase}/Alpha-brandbook-colors.jpg`, alt: "Фрагмент бренд-системы ГК Альфа", fallback: "Бренд-система ГК Альфа" },
    ],
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581fe8a90c1d0c5614168",
  },
];

const gallery = [
  {
    title: "Исследование конкурентов · EAL",
    role: "Я задала критерии сравнения и выделила, где предложения рынка уже выглядят одинаково.",
    image: `${assetBase}/EAL-02-competitors.svg`,
  },
  {
    title: "Сегментация аудитории · EAL",
    role: "Разделила аудиторию по ситуации покупки, риску и критериям выбора, а не по формальным признакам.",
    image: `${assetBase}/EAL-01-CA.svg`,
  },
  {
    title: "Готовый сайт · EAL",
    role: "Перевела исследование в структуру и требования к страницам; организовала сборку и проверку.",
    image: "/marketing-assets/eal-site.jpg",
  },
  {
    title: "Путь клиента · VOIS",
    role: "Связала этапы выбора с вопросами покупателя и точками, где информации недостаточно.",
    image: `${assetBase}/VOIS-02-journey.svg`,
  },
  {
    title: "ТЗ дизайнеру · VOIS",
    role: "Зафиксировала, что должен понять пользователь, какое доказательство увидеть и что проверить экспериментом.",
    image: `${assetBase}/VOIS-04-brief.svg`,
  },
  {
    title: "Эксперименты · VOIS",
    role: "Собрала гипотезы проверки и показатели, по которым можно оценивать изменение поведения пользователя.",
    image: `${assetBase}/VOIS-05-experiments.svg`,
  },
  {
    title: "Продуктовая презентация · CarWit",
    role: "Собирала содержание и требования; визуальную реализацию выполняли дизайнеры.",
    image: `${assetBase}/CarWit-product-screen.jpg`,
  },
  {
    title: "Бренд-система · ГК Альфа",
    role: "Работала с требованиями к фирменной системе и единообразию материалов; графический дизайн выполняли профильные исполнители.",
    image: `${assetBase}/Alpha-brandbook-colors.jpg`,
  },
];

const extraProof = [
  {
    title: "Проверка новых направлений",
    metric: "20 → 7 → 3 → 53",
    text: "Исследовала 20 коммерческих ниш, отобрала 7, довела 3 до тестирования и получила 53 запроса. 21 запрос дошёл до этапа продаж; одно направление бизнес продолжил.",
  },
  {
    title: "Сравнение коммерческих предложений",
    metric: "235 вариантов",
    text: "Сформировала сравнительную базу по стоимости, срокам, возможностям, ограничениям и рискам, чтобы решение принималось по критериям, а не по впечатлению.",
  },
  {
    title: "Три рекламных видео",
    metric: "+23%",
    text: "Вела производство от постановки задачи и выбора исполнителей до выпуска. После запуска конверсия из лидов в продажи выросла на 23%.",
  },
  {
    title: "TatOilExpo",
    metric: "117 лидов",
    text: "Проект реализован к фиксированной дате без превышения бюджета 1,5 млн ₽. По данным бизнеса ему было атрибутировано 37 млн ₽ оплаченной выручки.",
  },
  {
    title: "Два корпоративных сайта",
    metric: "14 заявок/нед.",
    text: "Определила структуру, содержание и требования, организовала сборку и публикацию. Сайты получают около 37 посещений в день и в среднем 14 заявок в неделю.",
  },
  {
    title: "Брендбуки и фирменные стандарты",
    metric: "от системы до носителей",
    text: "Формировала требования, ТЗ и структуру, согласовывала визуальные решения и контролировала применение на digital-, печатных и выставочных материалах.",
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
            <p className="marketing-kicker">Маркетинговые и исследовательские проекты</p>
            <h1>Исследую рынок и клиента, нахожу решение и довожу его до запуска.</h1>
            <p className="marketing-lead">
              Работаю на стыке B2B, продуктового маркетинга, исследований и бренд-коммуникации.
              Из неясной задачи делаю понятную логику: кому продаём, что предлагаем, чем доказываем ценность,
              какой материал нужен и как проверить результат.
            </p>
            <p className="marketing-hero-proof">
              Моя сильная сторона — связать исследование с конкретным продуктом, страницей, коммуникацией или запуском,
              а не оставить выводы в презентации.
            </p>
            <div className="marketing-hero-actions">
              <a className="marketing-button marketing-button-primary" href="#cases">Смотреть кейсы</a>
              <a className="marketing-button marketing-button-secondary" href="#contact">Обсудить задачу</a>
            </div>
          </div>

          <aside className="marketing-hero-side">
            <figure className="marketing-portrait">
              <img src="/tatiana-babanova.jpg" alt="Татьяна Бабанова" />
            </figure>
            <div className="marketing-hero-side-copy">
              <strong>Казань · удалённо</strong>
              <span>готова к командировкам и релокации</span>
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
          </div>
          <div className="marketing-gallery-grid">
            {gallery.map((item) => (
              <figure className="marketing-gallery-card" key={item.title}>
                <div className="marketing-gallery-image">
                  <SafeImage src={item.image} alt={item.title} fallback={item.title} />
                </div>
                <figcaption>
                  <strong>{item.title}</strong>
                  <p>{item.role}</p>
                </figcaption>
              </figure>
            ))}
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

      <section className="marketing-section marketing-extra">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Дополнительные доказательства</p>
            <h2>Ещё шесть примеров, которые расширяют картину</h2>
          </div>
          <div className="marketing-extra-grid">
            {extraProof.map((item) => (
              <article key={item.title}>
                <p>{item.title}</p>
                <strong>{item.metric}</strong>
                <span>{item.text}</span>
              </article>
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
            <h2>Если вам нужен человек, который может разобраться в рынке, собрать решение и довести его до запуска — давайте обсудим задачу.</h2>
            <p>Татьяна Бабанова · Казань · удалённо по РФ · готова к командировкам и релокации</p>
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
