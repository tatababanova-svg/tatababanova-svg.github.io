import type { Metadata } from "next";
import ProofGallery from "./proof-gallery";
import "./marketing.css";

export const metadata: Metadata = {
  title: "Татьяна Бабанова — продуктовый и B2B-маркетинг",
  description:
    "Портфолио Татьяны Бабановой: исследования рынка и клиента, продуктовый и B2B-маркетинг, сайты, коммуникация, запуски и измеримые бизнес-результаты.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Татьяна Бабанова — продуктовый и B2B-маркетинг",
    description:
      "Помогаю бизнесу находить точки роста и доводить маркетинговые проекты до измеримого результата.",
    siteName: "Маркетинговое портфолио Татьяны Бабановой",
  },
};

const asset = "/marketing-assets";

const links = {
  portfolio: "#contact",
  eal: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
  vois: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
  carwit: "https://marsh-inch-22f.notion.site/3e92eed19c85815f807fca93e619b82a",
  comvex: "https://marsh-inch-22f.notion.site/3e92eed19c8581fe8a90c1d0c5614168",
  canton: "https://marsh-inch-22f.notion.site/3e92eed19c8581339f94cf048cc2dabc",
  tatoil: "https://marsh-inch-22f.notion.site/3e92eed19c8581969193f2ffd66e0ac3",
  telegram: "https://t.me/taninnik",
  phone: "tel:+79867233155",
  email: "mailto:babanova595@gmail.com",
};

const heroMetrics = [
  { value: "+8%", label: "к конверсии", note: "сайт EAL" },
  { value: "137", label: "целевых лидов", note: "COMvex" },
  { value: "67 млн ₽", label: "продаж", note: "COMvex" },
  { value: "2 млн ₽/мес.", label: "выручка CarWit", note: "после запуска" },
];

const commercialCases = [
  {
    title: "COMvex — B2B-выставочный проект",
    badge: "Выставочный проект",
    image: `${asset}/cover-COMvex.svg`,
    metrics: ["2,5 млн ₽|бюджет", "137|целевых лидов", "67 млн ₽|продаж", "44 млн ₽|валовой прибыли"],
    task: "Организовать участие в отраслевой выставке с понятной коммуникацией и коммерческой целью.",
    role: "Содержание, требования, ТЗ, подрядчики, логистика, запуск, контроль бюджета и результата.",
    result: "Выставка прошла в срок; 137 целевых лидов и 67 млн ₽ продаж по данным бизнеса.",
    href: links.comvex,
  },
  {
    title: "Canton Fair — международный проект",
    badge: "Международный проект",
    image: `${asset}/cover-Canton.svg`,
    metrics: ["317|лидов", "98|новых клиентов", "30,9%|конверсия"],
    task: "Привлечь новых клиентов на международной выставке и быстро перестроить проект под новые требования.",
    role: "Пересборка плана, коммуникация команды и подрядчиков, контроль запуска и качества.",
    result: "317 лидов, 98 новых клиентов, проект реализован в срок без дополнительных затрат.",
    href: links.canton,
  },
  {
    title: "КАН-АВТО / CarWit — продукт и e-commerce",
    badge: "E-commerce и контент",
    image: `${asset}/cover-CarWit.svg`,
    metrics: ["15|внутренних заказчиков", "167|запросов за год", "5 000|единиц контента", "30%|лид → заказ"],
    task: "Обеспечить стабильный поток продуктовых и e-commerce материалов для разных направлений бизнеса.",
    role: "Процессы, приоритизация запросов, координация команд и подрядчиков, качество и сроки.",
    result: "После запуска CarWit — около 1 500 покупок в месяц; выручка достигла 2 млн ₽/мес.",
    href: links.carwit,
  },
  {
    title: "TatOilExpo — событийный коммерческий проект",
    badge: "Событийный проект",
    image: `${asset}/cover-TatOil.svg`,
    metrics: ["1,5 млн ₽|бюджет", "117|лидов", "37 млн ₽|атрибутированной выручки"],
    task: "Подготовить отраслевое событие с целевой B2B-аудиторией и измеримым коммерческим результатом.",
    role: "Коммуникация, материалы, подрядчики, программа, сроки, запуск активности и контроль.",
    result: "Проект проведён к фиксированной дате и в рамках бюджета; 117 лидов.",
    href: links.tatoil,
  },
];

const workflow = [
  "Неясная задача",
  "Исследование",
  "Структура",
  "Решение",
  "ТЗ",
  "Исполнители",
  "Запуск",
  "Проверка результата",
];

export default function MarketingPortfolio() {
  return (
    <main className="marketing-site">
      <header className="marketing-nav-wrap">
        <nav className="marketing-nav marketing-shell" aria-label="Навигация по портфолио">
          <a href="#top" className="marketing-brand">
            <strong>Татьяна Бабанова</strong>
            <span>маркетинг и специальные проекты</span>
          </a>
          <div className="marketing-nav-links">
            <a href="#flagships">Проекты</a>
            <a href="#eal">EAL</a>
            <a href="#vois">VOIS</a>
            <a href="#process">Как я работаю</a>
            <a href="#contact">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="marketing-hero" id="top">
        <div className="marketing-shell marketing-hero-grid">
          <div className="marketing-hero-copy">
            <p className="marketing-kicker">Маркетинг и специальные проекты</p>
            <h1>Помогаю бизнесу находить точки роста и доводить маркетинговые проекты до измеримого результата</h1>
            <p className="marketing-lead">
              Исследую рынок и клиента, формирую стратегию, собираю решение, ставлю ТЗ и координирую запуск — от идеи до результата.
            </p>
            <div className="marketing-hero-actions">
              <a className="marketing-button marketing-button-primary" href="#flagships">Смотреть проекты ↓</a>
            </div>
          </div>

          <div className="marketing-hero-photo" aria-label="Татьяна Бабанова">
            <img src="/tatiana-babanova.jpg" alt="Татьяна Бабанова" />
            <p className="marketing-photo-caption">проекты, которые двигают бизнес вперёд</p>
          </div>
        </div>

        <div className="marketing-shell marketing-hero-metrics" aria-label="Ключевые результаты">
          {heroMetrics.map((item) => (
            <article key={item.value}>
              <span className="marketing-metric-icon" aria-hidden="true">↗</span>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marketing-section" id="flagships">
        <div className="marketing-shell">
          <div className="marketing-heading-row">
            <div>
              <p className="marketing-kicker">Главные проекты</p>
              <h2>Два кейса, где видно весь путь: от исследования до решения</h2>
            </div>
            <a href="#commercial">Все коммерческие кейсы →</a>
          </div>

          <div className="marketing-flagships">
            <article className="marketing-flagship">
              <div className="marketing-flagship-copy">
                <span className="marketing-chip">Рабочий проект</span>
                <h3>EAL — B2B-коммерческая стратегия</h3>
                <p>Как связать аудиторию, продукт, маркетинг, продажи и операции в одну систему.</p>
                <div className="marketing-mini-metrics">
                  <span><strong>13</strong> конкурентов</span>
                  <span><strong>4</strong> сегмента и продукта</span>
                  <span><strong>44</strong> этапа принятия решения</span>
                  <span><strong>40</strong> задач внедрения</span>
                </div>
                <div className="marketing-card-links">
                  <a href="#eal">Открыть кейс →</a>
                  <a href={links.eal} target="_blank" rel="noreferrer">Рабочие таблицы ↗</a>
                </div>
              </div>
              <div className="marketing-flagship-visual marketing-eal-visual">
                <img src={`${asset}/EAL-02-competitors.svg`} alt="Рабочий материал проекта EAL" />
                <span>конкурентный анализ → сегментация → коммерческое решение</span>
              </div>
            </article>

            <article className="marketing-flagship">
              <div className="marketing-flagship-copy">
                <span className="marketing-chip">Инициативный проект</span>
                <h3>VOIS — маркетинговая стратегия</h3>
                <p>Как упростить выбор продукта и превратить исследование клиента в проверяемые решения.</p>
                <div className="marketing-mini-metrics marketing-mini-metrics-five">
                  <span><strong>5</strong> сегментов</span>
                  <span><strong>10</strong> этапов пути</span>
                  <span><strong>7</strong> экранов</span>
                  <span><strong>8</strong> экспериментов</span>
                  <span><strong>26</strong> задач / 13 недель</span>
                </div>
                <div className="marketing-card-links">
                  <a href="#vois">Открыть кейс →</a>
                  <a href={links.vois} target="_blank" rel="noreferrer">Исследование ↗</a>
                </div>
              </div>
              <div className="marketing-flagship-visual marketing-vois-visual">
                <img src={`${asset}/VOIS-03-prototype.svg`} alt="Прототип VOIS" />
                <span>путь клиента → гипотеза → прототип → проверка</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-project marketing-project-eal" id="eal">
        <div className="marketing-shell">
          <div className="marketing-project-hero">
            <div>
              <p className="marketing-kicker">Проекты · маркетинг · B2B-стратегия</p>
              <h2>EAL — B2B-коммерческая стратегия</h2>
              <span className="marketing-chip">Рабочий проект</span>
              <p className="marketing-project-subtitle">Как связать аудиторию, продукт, маркетинг, продажи и операции в одну систему.</p>
              <div className="marketing-project-actions">
                <a className="marketing-button marketing-button-primary" href={links.eal} target="_blank" rel="noreferrer">Открыть рабочий проект ↗</a>
                <a className="marketing-button marketing-button-secondary" href="#commercial">Другие проекты ↓</a>
              </div>
            </div>
            <div className="marketing-project-cover marketing-eal-cover">
              <img src={`${asset}/EAL-01-CA.svg`} alt="Фрагмент исследования аудитории EAL" />
              <ul>
                <li>Исследование рынка</li>
                <li>Продуктовая стратегия</li>
                <li>Коммерческая система</li>
                <li>План внедрения</li>
              </ul>
            </div>
          </div>

          <div className="marketing-stat-strip">
            <article><strong>13</strong><span>конкурентов на рынке</span></article>
            <article><strong>4</strong><span>сегмента и продукта</span></article>
            <article><strong>44</strong><span>этапа принятия решения</span></article>
            <article><strong>40</strong><span>задач внедрения</span></article>
            <article className="marketing-role-card"><b>Моя роль</b><span>Исследование → сегментация → продуктовая логика → требования → внедрение.</span></article>
          </div>

          <div className="marketing-project-block">
            <div className="marketing-block-title">
              <span>01</span><h3>Что обнаружила</h3><p>Три вывода, которые изменили подход к продукту и коммуникации.</p>
            </div>
            <div className="marketing-insight-grid">
              <article><strong>Одна логистика «под ключ» скрывает четыре разные задачи.</strong><p>Риски и критерии выбора у клиентов различаются — одно универсальное предложение теряет релевантность.</p></article>
              <article><strong>В сложной B2B-покупке одного ЛПР недостаточно.</strong><p>Решение принимают финансы, закупки, операции и безопасность — у каждого свои аргументы.</p></article>
              <article><strong>Маркетинг нельзя заканчивать на заявке.</strong><p>Нужна связка с продажами и операциями до повторной сделки и доказательства результата.</p></article>
            </div>
          </div>

          <div className="marketing-project-block">
            <div className="marketing-block-title">
              <span>02</span><h3>Исследование</h3><p>Не абстрактная аналитика, а рабочие таблицы, из которых выросло решение.</p>
            </div>
            <ProofGallery
              className="marketing-proof-pair"
              items={[
                {
                  src: `${asset}/EAL-01-CA.svg`,
                  alt: "Сегментация аудитории EAL",
                  caption: "Сегментация по ситуации покупки, задачам, рискам и критериям выбора.",
                },
                {
                  src: `${asset}/EAL-02-competitors.svg`,
                  alt: "Исследование конкурентов EAL",
                  caption: "Сравнение конкурентов и поиск содержательной отстройки.",
                },
              ]}
            />
            <div className="marketing-table-links">
              <a href={links.eal} target="_blank" rel="noreferrer">Открыть таблицу сегментации ↗</a>
              <a href={links.eal} target="_blank" rel="noreferrer">Открыть матрицу конкурентов ↗</a>
            </div>
          </div>

          <div className="marketing-project-block">
            <div className="marketing-block-title">
              <span>03</span><h3>Как вывод стал решением</h3><p>От данных — к четырём продуктовым входам и общей коммерческой системе.</p>
            </div>
            <div className="marketing-solution-flow">
              <article><b>Данные</b><span>клиент, рынок, конкуренты</span></article>
              <i>→</i>
              <article><b>Вывод</b><span>4 ситуации покупки</span></article>
              <i>→</i>
              <article><b>4 продукта</b><span>под разные задачи и риски</span></article>
              <i>→</i>
              <article><b>Позиционирование</b><span>обещание и доказательства</span></article>
              <i>→</i>
              <article><b>Коммерческая система</b><span>маркетинг → продажи → повтор</span></article>
            </div>
          </div>

          <div className="marketing-project-block">
            <div className="marketing-block-title">
              <span>04</span><h3>Прототип и внедрение</h3><p>Решение переведено в сайт, требования, материалы и план работ.</p>
            </div>
            <div className="marketing-eal-deliverables">
              <ProofGallery
                className="marketing-proof-feature"
                items={[
                  {
                    src: `${asset}/EAL-04-implementation.svg`,
                    alt: "План первых 30 дней EAL",
                    caption: "План первых 30 дней: что именно нужно изменить, зачем и по какому критерию считать задачу готовой.",
                  },
                  {
                    src: `${asset}/EAL-06-TZ-fragment.svg`,
                    alt: "Фрагмент ТЗ EAL",
                    caption: "Реальный фрагмент требований, который можно передать исполнителям.",
                  },
                  {
                    src: `${asset}/EAL-05-evidence.svg`,
                    alt: "Реестр доказательности EAL",
                    caption: "Проверка фактов и формулировок перед публикацией и запуском коммуникации.",
                  },
                ]}
              />
              <aside className="marketing-requirements">
                <h4>Что нужно было подготовить, чтобы стратегия дошла до запуска</h4>
                <p className="marketing-requirements-intro">
                  Исследование само по себе ничего не меняет. Поэтому я перевела выводы в четыре рабочих контура, по которым команда могла принимать решения и внедрять изменения.
                </p>
                <div className="marketing-requirement-groups">
                  <article>
                    <strong>01 · Аналитика и экономика</strong>
                    <span>данные, дашборды, маржинальность и критерии результата</span>
                  </article>
                  <article>
                    <strong>02 · Продукт и маркетинг</strong>
                    <span>предложения, позиционирование, контент и привлечение</span>
                  </article>
                  <article>
                    <strong>03 · Продажи и операции</strong>
                    <span>CRM, процессы, SLA, качество и контроль исполнения</span>
                  </article>
                  <article>
                    <strong>04 · Команда и запуск</strong>
                    <span>роли, обучение, тестирование и проверка первых результатов</span>
                  </article>
                </div>
                <a href={links.eal} target="_blank" rel="noreferrer">Открыть полный план внедрения ↗</a>
              </aside>
            </div>
          </div>

          <div className="marketing-project-end">
            <div><span>Результат</span><strong>+8% к конверсии в покупки после первых внедрённых решений.</strong></div>
            <div><span>Что это доказывает</span><p>Я умею превратить исследование в коммерческую логику, требования и конкретный план внедрения, а не остановиться на презентации.</p></div>
          </div>
        </div>
      </section>

      <section className="marketing-project marketing-project-vois" id="vois">
        <div className="marketing-shell">
          <div className="marketing-project-hero">
            <div>
              <p className="marketing-kicker">Маркетинг · стратегия · инициативный проект</p>
              <h2>VOIS — маркетинговая стратегия</h2>
              <span className="marketing-chip">Инициативный проект · открытые данные</span>
              <p className="marketing-project-subtitle">Как упростить выбор продукта и превратить исследование клиента в проверяемые решения для роста.</p>
              <div className="marketing-project-actions">
                <a className="marketing-button marketing-button-primary" href={links.vois} target="_blank" rel="noreferrer">Открыть исследование ↗</a>
                <a className="marketing-button marketing-button-secondary" href="#commercial">Коммерческие кейсы ↓</a>
              </div>
            </div>
            <div className="marketing-project-cover marketing-vois-cover">
              <img src={`${asset}/VOIS-03-prototype.svg`} alt="Прототип VOIS" />
              <p>Исследование → путь клиента → гипотеза → прототип → план проверки</p>
            </div>
          </div>

          <div className="marketing-stat-strip marketing-stat-strip-five">
            <article><strong>5</strong><span>сегментов клиентов</span></article>
            <article><strong>10</strong><span>этапов пути клиента</span></article>
            <article><strong>7</strong><span>экранов прототипа</span></article>
            <article><strong>8</strong><span>экспериментов</span></article>
            <article><strong>26</strong><span>задач / 13 недель</span></article>
          </div>

          <div className="marketing-project-block">
            <div className="marketing-block-title">
              <span>01</span><h3>Что обнаружила</h3><p>Проблема выбора не равна нехватке информации.</p>
            </div>
            <div className="marketing-insight-grid">
              <article><strong>Проблема не обязательно в недостатке материалов.</strong><p>Чаще — в сложности выбора, разных ожиданиях и отсутствии понятных ориентиров.</p></article>
              <article><strong>Нужно исследовать путь выбора, а не один экран.</strong><p>Поведение меняется от первого интереса до сравнения и повторной покупки.</p></article>
              <article><strong>Вывод должен стать проверяемой гипотезой.</strong><p>Ценность появляется, когда идея превращается в прототип, метрику и эксперимент.</p></article>
            </div>
          </div>

          <div className="marketing-project-block">
            <div className="marketing-block-title">
              <span>02</span><h3>Исследование и прототип</h3><p>Сегменты, путь клиента, 7 экранов и план экспериментов.</p>
            </div>
            <ProofGallery
              className="marketing-vois-proof-grid"
              items={[
                {
                  src: `${asset}/VOIS-01-segments.svg`,
                  alt: "Сегментация VOIS",
                  caption: "Пять сегментов клиентов с разными задачами и критериями выбора.",
                },
                {
                  src: `${asset}/VOIS-02-journey.svg`,
                  alt: "Путь клиента VOIS",
                  caption: "Карта пути клиента и точки неопределённости.",
                },
                {
                  src: `${asset}/VOIS-03-prototype.svg`,
                  alt: "Прототип VOIS",
                  caption: "Семь экранов прототипа продуктовой карточки.",
                },
                {
                  src: `${asset}/VOIS-05-experiments.svg`,
                  alt: "План экспериментов VOIS",
                  caption: "Гипотезы, метрики и правила проверки.",
                },
              ]}
            />
            <div className="marketing-table-links">
              <a href={links.vois} target="_blank" rel="noreferrer">Открыть путь клиента ↗</a>
              <a href={links.vois} target="_blank" rel="noreferrer">Открыть план экспериментов ↗</a>
              <a href={links.vois} target="_blank" rel="noreferrer">Открыть ТЗ ↗</a>
            </div>
          </div>

          <div className="marketing-project-end marketing-project-end-light">
            <div><span>Итог</span><strong>Готовый пакет исследования, прототипа и проверки гипотез.</strong></div>
            <div><span>Важно</span><p>Это инициативный проект. Коммерческий эффект не заявляю: решение не внедрялось компанией.</p></div>
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-commercial" id="commercial">
        <div className="marketing-shell">
          <div className="marketing-heading-row">
            <div>
              <p className="marketing-kicker">Коммерческие кейсы</p>
              <h2>Проекты с измеримым результатом</h2>
              <p>Коротко: задача, мой вклад и подтверждённый результат.</p>
            </div>
          </div>

          <div className="marketing-commercial-grid">
            {commercialCases.map((item) => (
              <article className="marketing-commercial-card" key={item.title}>
                <header>
                  <div>
                    <span className="marketing-chip">{item.badge}</span>
                    <h3>{item.title}</h3>
                  </div>
                  {item.image ? (
                    <img src={item.image} alt={`Материал проекта ${item.title}`} loading="lazy" />
                  ) : (
                    <a className="marketing-case-proof-panel" href={item.href} target="_blank" rel="noreferrer" aria-label={`Открыть подтверждающие материалы: ${item.title}`}>
                      <span>Рабочий кейс</span>
                      <strong>Расчёты, роль и результат</strong>
                      <small>Открыть подтверждающие материалы ↗</small>
                    </a>
                  )}
                </header>
                <div className="marketing-case-metrics">
                  {item.metrics.map((metric) => {
                    const [value, label] = metric.split("|");
                    return <span key={metric}><strong>{value}</strong><small>{label}</small></span>;
                  })}
                </div>
                <div className="marketing-case-copy">
                  <p><b>Задача.</b> {item.task}</p>
                  <p><b>Моя роль.</b> {item.role}</p>
                  <p><b>Результат.</b> {item.result}</p>
                </div>
                <a href={item.href} target="_blank" rel="noreferrer">Открыть подробный кейс ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-extra" id="extra">
        <div className="marketing-shell">
          <div className="marketing-heading-row">
            <div>
              <p className="marketing-kicker">Дополнительные проекты и направления</p>
              <h2>Выставки, упаковка сервисов и бренд-системы</h2>
            </div>
          </div>

          <div className="marketing-extra-grid marketing-extra-grid-three">
            <article className="marketing-extra-card">
              <div>
                <span className="marketing-chip">Событийный проект</span>
                <h3>TatOilExpo / GSS</h3>
                <p>Коммуникация, материалы, подрядчики и запуск выставочной активности к фиксированной дате.</p>
              </div>
              <a className="marketing-extra-visual" href={links.tatoil} target="_blank" rel="noreferrer">
                <img src={`${asset}/cover-TatOil.svg`} alt="TatOilExpo / GSS — материалы выставочного проекта" loading="lazy" />
              </a>
              <div className="marketing-extra-metrics"><strong>117</strong><span>лидов</span><strong>1,5 млн ₽</strong><span>бюджет</span><strong>37 млн ₽</strong><span>атрибутированная выручка</span></div>
            </article>

            <article className="marketing-extra-card">
              <div>
                <span className="marketing-chip">B2B-выставочная коммуникация</span>
                <h3>CTT / SuperSnow</h3>
                <p>Концепция стенда, ключевые сообщения, печатные и digital-материалы, подрядчики и готовность команды к площадке.</p>
              </div>
              <div className="marketing-ctt-proof" aria-label="Масштаб выставочных проектов">
                <span>CTT Expo</span>
                <strong>3 проекта / 90 дней</strong>
                <div>
                  <b>157+</b><small>дизайн-макетов</small>
                  <b>50 000+</b><small>POS-материалов</small>
                </div>
                <p>Требования → производство → подрядчики → готовность площадки</p>
              </div>
            </article>

            <article className="marketing-extra-card">
              <div>
                <span className="marketing-chip">Упаковка сложной модели</span>
                <h3>Broxi</h3>
                <p>Перевела сложную схему взаимодействия участников сделки в понятную презентационную логику для клиента и партнёров.</p>
              </div>
              <div className="marketing-service-map" aria-label="Сервисная модель Broxi">
                <span>Продавец</span><span>Сервис</span><strong>broxi</strong><span>Банк</span><span>Покупатель</span>
              </div>
            </article>
          </div>

          <div className="marketing-brand-strip">
            <article>
              <span className="marketing-chip">EAL</span>
              <ProofGallery className="marketing-brand-proof-single" items={[{ src: `${asset}/EAL-06-TZ-fragment.svg`, alt: "Фрагмент бренд-системы EAL" }]} />
              <p>Требования к системе, носителям и правилам применения.</p>
            </article>
            <article>
              <span className="marketing-chip">LOTOS</span>
              <div className="marketing-brand-text-visual"><strong>LOTOS</strong><small>варианты логотипа · правила применения</small></div>
              <p>Работа с вариантами фирменной системы и единообразием носителей.</p>
            </article>
            <article>
              <span className="marketing-chip">ГК Альфа</span>
              <ProofGallery className="marketing-brand-proof-single" items={[{ src: `${asset}/Alpha-brand-system.svg`, alt: "Фирменная палитра и правила бренд-системы ГК Альфа" }]} />
              <p>Требования к шаблонам презентаций и визуальному единообразию материалов.</p>
            </article>
            <article className="marketing-brand-role">
              <span className="marketing-chip">Моя роль</span>
              <strong>Требования → ТЗ → согласование → контроль применения</strong>
              <p>Графическую реализацию выполняли профильные дизайнеры.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-process" id="process">
        <div className="marketing-shell">
          <div className="marketing-heading-row">
            <div>
              <p className="marketing-kicker">Как я работаю</p>
              <h2>От неясной задачи — к запуску и проверке результата</h2>
            </div>
          </div>
          <ol className="marketing-workflow">
            {workflow.map((step, index) => (
              <li key={step}><span>{index + 1}</span><b>{step}</b>{index < workflow.length - 1 ? <i>→</i> : null}</li>
            ))}
          </ol>
          <div className="marketing-process-cards">
            <article><span>⌕</span><div><h3>Исследую</h3><p>Разбираю бизнес-задачу, рынок, клиента и конкурентов. Ищу закономерности и точки роста.</p></div></article>
            <article><span>◇</span><div><h3>Проектирую</h3><p>Собираю стратегию, продуктовую и коммерческую логику, требования и понятный план действий.</p></div></article>
            <article><span>↗</span><div><h3>Довожу до результата</h3><p>Координирую исполнителей, запускаю решение и связываю результат с бизнес-показателями.</p></div></article>
          </div>
        </div>
      </section>

      <section className="marketing-contact" id="contact">
        <div className="marketing-shell marketing-contact-card">
          <div>
            <p className="marketing-kicker marketing-kicker-light">Связаться</p>
            <h2>Нужен маркетолог-практик, который умеет доводить проекты до результата?</h2>
            <p>Обсудим задачу и посмотрим, как я могу быть полезна вашей команде.</p>
          </div>
          <div className="marketing-contact-links">
            <a className="marketing-contact-primary" href={links.telegram} target="_blank" rel="noreferrer">Связаться со мной →</a>
            <a href={links.telegram} target="_blank" rel="noreferrer"><span>Telegram</span><strong>@taninnik</strong></a>
            <a href={links.phone}><span>Телефон</span><strong>+7 986 723 31 55</strong></a>
            <a href={links.email}><span>Почта</span><strong>babanova595@gmail.com</strong></a>
          </div>
        </div>
      </section>

      <footer className="marketing-footer marketing-shell">
        <strong>Татьяна Бабанова</strong>
        <span>Маркетинговые и специальные проекты</span>
        <nav aria-label="Ссылки в подвале">
          <a href="#flagships">Проекты</a>
          <a href="#process">Как я работаю</a>
          <a href="#contact">Контакты</a>
        </nav>
      </footer>
    </main>
  );
}
