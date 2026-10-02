import type { Metadata } from "next";
import SafeImage from "./safe-image";
import "./marketing.css";

export const metadata: Metadata = {
  title: "Татьяна Бабанова — менеджер маркетинговых проектов",
  description:
    "Маркетинговое портфолио Татьяны Бабановой: исследования рынка и аудитории, продуктовый и B2B-маркетинг, e-commerce, бренд, видео и запуски.",
};

const assetBase =
  "https://raw.githubusercontent.com/tatababanova-svg/tatiana-babanova-portfolio/notion-portfolio-assets-20260928/public/notion-assets";

const results = [
  {
    value: "+45%",
    title: "рост продаж",
    text: "ГК Альфа внедрила 9 из 15 рекомендаций по рынку, конкурентам, аудитории и спросу. За следующий год продажи выросли на 45%.",
    tone: "accent",
  },
  {
    value: "+23%",
    title: "к конверсии из лидов в продажи",
    text: "После запуска трёх рекламных видеоматериалов. Я вела производство от постановки задачи и выбора исполнителей до выпуска.",
    tone: "dark",
  },
  {
    value: "137",
    title: "целевых лидов · COMvex",
    text: "По данным бизнеса: 67 млн ₽ продаж и 44 млн ₽ валовой прибыли при бюджете проекта 2,5 млн ₽.",
    tone: "light",
  },
  {
    value: "2 млн ₽",
    title: "выручки в месяц · CarWit",
    text: "После запуска цифрового продукта — на 900 тыс. ₽ выше предыдущего уровня.",
    tone: "light",
  },
  {
    value: "117",
    title: "лидов · TatOilExpo",
    text: "Проект реализован в срок и без превышения бюджета 1,5 млн ₽; по данным бизнеса ему атрибутировано 37 млн ₽ оплаченной выручки.",
    tone: "light",
  },
  {
    value: "+8%",
    title: "к конверсии в покупки · EAL",
    text: "После внедрения первых трёх решений из новой B2B-коммерческой системы.",
    tone: "light",
  },
];

const capabilities = [
  {
    title: "Исследования рынка и спроса",
    text: "Конкуренты, сегменты, аудитория, спрос, клиентский путь, источники и критерии выбора.",
    proof: "EAL: 13 конкурентов · VOIS: 9 брендов",
  },
  {
    title: "Продуктовый маркетинг",
    text: "Гипотеза проблемы, ценностное предложение, продуктовая логика, сценарии выбора и план проверки.",
    proof: "VOIS: 7 экранов · 8 экспериментов",
  },
  {
    title: "B2B-маркетинг и лидогенерация",
    text: "Сегментация по ситуации покупки, роли в решении, доказательства, коммерческие материалы и точки конверсии.",
    proof: "COMvex: 137 целевых лидов",
  },
  {
    title: "Сайты и продуктовые страницы",
    text: "От исследования и структуры до требований к странице, доказательствам, форме заявки и аналитике.",
    proof: "EAL: 40 задач внедрения",
  },
  {
    title: "E-commerce и товарный контент",
    text: "Карточки, продуктовые материалы, Ozon / Wildberries, требования и производство контента.",
    proof: "около 5 000 единиц контента",
  },
  {
    title: "Бренд и визуальная система",
    text: "Требования к логотипу, палитре, типографике, носителям и единому визуальному языку.",
    proof: "брендбуки EAL / LOTOS и рабочие стандарты",
  },
  {
    title: "Видео и рекламное производство",
    text: "Сценарий, подбор исполнителей, съёмка, согласования и выпуск материалов под коммерческую задачу.",
    proof: "3 видеоматериала → +23% к конверсии",
  },
  {
    title: "Маркетинговый запуск",
    text: "ТЗ, бюджет, дизайнеры, разработчики и подрядчики, сроки, изменения, выпуск и оценка результата.",
    proof: "167 запросов · 15 заказчиков · 100% в срок",
  },
];

const flagshipCases = [
  {
    id: "eal",
    number: "01",
    title: "EAL — B2B-коммерческая система",
    label: "Рабочий проект",
    subtitle: "Исследование рынка → сегментация → продуктовые входы → сайт → внедрение",
    problem:
      "Нужно было перестроить B2B-коммуникацию так, чтобы разные клиенты входили не через общий каталог услуг, а через свою бизнес-задачу.",
    work:
      "Я исследовала 13 конкурентов, аудиторию, закупочный комитет и путь решения; сформировала 4 сценария покупки, продуктовые входы, доказательства и план внедрения.",
    result:
      "40 задач внедрения. После реализации первых 3 решений конверсия в покупки выросла на 8%.",
    image: `${assetBase}/EAL-06-TZ-fragment.svg`,
    fallback: "EAL · исследование → продукт → требования",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
  },
  {
    id: "vois",
    number: "02",
    title: "VOIS — продуктовая стратегия на открытых данных",
    label: "Инициативный проект",
    subtitle: "Путь клиента → гипотеза проблемы → прототип → ТЗ → система проверки",
    problem:
      "Понять, почему при большом количестве информации покупателю всё равно трудно выбрать продукт, и превратить вывод в проверяемое решение.",
    work:
      "Я сравнила 9 брендов, выделила 5 сегментов, разобрала путь выбора и собрала прототип карточки, ТЗ, реестр экспериментов и систему показателей.",
    result:
      "7 экранов прототипа · 8 экспериментов · 17 показателей · план внедрения на 90 дней.",
    image: `${assetBase}/VOIS-03-prototype.svg`,
    fallback: "VOIS · прототип продуктовой карточки",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
    note:
      "VOIS не был моим заказчиком, проект не заявляется как внедрённый. Здесь показываю качество исследования и продуктовой проработки.",
  },
  {
    id: "carwit",
    number: "03",
    title: "CarWit — продукт, e-commerce и видео",
    label: "Рабочий проект · КАН-АВТО",
    subtitle: "Цифровой продукт → контент → рекламные материалы → запуск",
    problem:
      "Поддержать запуск онлайн-сервиса для автомобилистов и объяснить сложный набор функций через понятные продуктовые материалы.",
    work:
      "Я собирала содержание и требования, сопровождала e-commerce-контент, писала сценарий рекламного ролика, участвовала в подборе актёров и диктора и координировала производство.",
    result:
      "После запуска ежемесячная выручка CarWit достигла 2 млн ₽ — на 900 тыс. ₽ выше предыдущего уровня.",
    image: `${assetBase}/CarWit-product-screen.jpg`,
    fallback: "CarWit · продуктовая презентация",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c85815f807fca93e619b82a",
  },
  {
    id: "comvex",
    number: "04",
    title: "COMvex — B2B-коммуникация и коммерческий результат",
    label: "Рабочий проект · ГК Альфа",
    subtitle: "Маркетинговая задача → материалы → лиды → продажи",
    problem:
      "Подготовить B2B-коммуникацию и большой объём рекламных материалов к фиксированной дате и связать проект с последующим коммерческим результатом.",
    work:
      "Я переводила задачи в требования, собирала содержание, координировала дизайнеров и 4 подрядчиков и довела до выпуска 157+ макетов и более 50 000 материалов.",
    result:
      "137 целевых лидов → 67 млн ₽ продаж → 44 млн ₽ валовой прибыли по данным бизнеса.",
    fallback: "COMvex · 137 лидов · 67 млн ₽ продаж",
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581fe8a90c1d0c5614168",
    metricVisual: true,
  },
];

const moreCases = [
  {
    title: "TatOilExpo / GSS",
    tag: "Событийный и B2B-маркетинг",
    metric: "117 лидов",
    text: "Я синхронизировала выставочную коммуникацию, печатные материалы, подрядчиков и запуск к фиксированной дате. Бюджет — 1,5 млн ₽; атрибутированная оплаченная выручка по данным бизнеса — 37 млн ₽.",
    visual: "event",
  },
  {
    title: "Рекламное видео",
    tag: "Видеомаркетинг",
    metric: "+23%",
    text: "Три рекламных видеоматериала: от постановки задачи и выбора исполнителей до выпуска и использования. После запуска конверсия из лидов в продажи выросла на 23%.",
    visual: "video",
  },
  {
    title: "Маркетинговое производство",
    tag: "КАН-АВТО",
    metric: "167 запросов",
    text: "15 внутренних заказчиков, 3 дизайнера, производство и до 5 подрядчиков. Все запросы выполнены в срок; средний цикл — около 1,5 дня.",
    visual: "production",
  },
  {
    title: "Бренд-системы",
    tag: "EAL / LOTOS",
    metric: "от логотипа до носителей",
    text: "Формировала требования к визуальной системе и постановки задач дизайнерам: логотип, палитра, типографика, графические элементы и правила применения на носителях.",
    visual: "brand",
  },
  {
    title: "Broxi × автошкола Драйв",
    tag: "Партнёрская коммуникация",
    metric: "20 слайдов",
    text: "Рабочая презентация реферальной программы: ценность партнёрства, экономика сделки, сравнительный блок, сценарий взаимодействия и следующий шаг.",
    visual: "deck",
  },
  {
    title: "EAL — новый сайт и продуктовые страницы",
    tag: "B2B digital",
    metric: "4 сценария входа",
    text: "Перевела стратегию в требования к сайту: отдельные входы под регулярный импорт, оборудование, торговые партии и первую коммерческую поставку.",
    visual: "site",
  },
];

export default function MarketingPortfolio() {
  return (
    <main className="marketing-site">
      <nav className="marketing-nav" aria-label="Навигация по маркетинговому портфолио">
        <a className="marketing-brand" href="#top">
          <span>Татьяна Бабанова</span>
          <small>маркетинговые проекты</small>
        </a>
        <div className="marketing-nav-links">
          <a href="#results">Результаты</a>
          <a href="#capabilities">Компетенции</a>
          <a href="#cases">Кейсы</a>
          <a href="#contact">Связаться</a>
        </div>
      </nav>

      <section className="marketing-hero" id="top">
        <div className="marketing-shell marketing-hero-grid">
          <div className="marketing-hero-copy">
            <p className="marketing-kicker">Менеджер маркетинговых проектов · продуктовый маркетинг</p>
            <h1>Я исследую рынок и клиента, формулирую маркетинговое решение и довожу его до запуска.</h1>
            <p className="marketing-lead">
              Моя сильная зона — задачи на стыке исследования, продукта и реализации:
              сегментация, позиционирование, B2B, сайты и продуктовые страницы,
              e-commerce, бренд-системы, видео и производство маркетинговых материалов.
            </p>
            <p className="marketing-hero-proof">
              Не координирую маркетинг «со стороны»: сама собираю логику решения и требования,
              а затем веду реализацию с дизайнерами, разработчиками и подрядчиками.
            </p>
            <div className="marketing-hero-actions">
              <a className="marketing-button marketing-button-primary" href="#cases">Смотреть кейсы</a>
              <a className="marketing-button marketing-button-secondary" href="#contact">Обсудить задачу</a>
            </div>
            <div className="marketing-tags" aria-label="Направления">
              <span>B2B</span>
              <span>исследования</span>
              <span>продукт</span>
              <span>e-commerce</span>
              <span>бренд</span>
              <span>видео</span>
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
            <p className="marketing-eyebrow">Подтверждённые результаты</p>
            <h2>Что изменилось для бизнеса</h2>
            <p>Показываю не только объём работы, но и то, что произошло после запуска.</p>
          </div>
          <div className="marketing-results-grid">
            {results.map((item) => (
              <article className={`marketing-result marketing-result-${item.tone}`} key={item.value + item.title}>
                <strong>{item.value}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-capabilities" id="capabilities">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">За что меня можно нанять</p>
            <h2>Я закрываю маркетинговую задачу от исследования до готового решения</h2>
            <p>Здесь — не общие навыки, а направления, которые подтверждаются реальными проектами и материалами.</p>
          </div>

          <div className="marketing-capability-grid">
            {capabilities.map((item, index) => (
              <article key={item.title}>
                <span className="marketing-card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.proof}</small>
              </article>
            ))}
          </div>

          <div className="marketing-positioning-banner">
            <span>Моя роль</span>
            <p>
              Я могу сама разобраться в неясной маркетинговой задаче, собрать исследование и гипотезу,
              превратить их в структуру продукта или коммуникации, поставить ТЗ и довести материал до запуска.
            </p>
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-cases" id="cases">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Флагманские кейсы</p>
            <h2>Четыре проекта, которые лучше всего показывают мой уровень</h2>
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

                <div className="marketing-case-grid">
                  <div className="marketing-case-media">
                    {item.metricVisual ? (
                      <div className="marketing-metric-visual" aria-label={item.fallback}>
                        <span>137</span>
                        <strong>целевых лидов</strong>
                        <div>
                          <b>67 млн ₽</b><small>продаж</small>
                          <b>44 млн ₽</b><small>валовой прибыли</small>
                        </div>
                      </div>
                    ) : (
                      <SafeImage src={item.image || ""} alt={item.title} fallback={item.fallback} />
                    )}
                  </div>

                  <div className="marketing-case-copy">
                    <div>
                      <span>Задача</span>
                      <p>{item.problem}</p>
                    </div>
                    <div>
                      <span>Что сделала я</span>
                      <p>{item.work}</p>
                    </div>
                    <div className="marketing-case-result">
                      <span>Результат / выход</span>
                      <p>{item.result}</p>
                    </div>
                    {item.note && <p className="marketing-note">{item.note}</p>}
                    <a className="marketing-case-link" href={item.href} target="_blank" rel="noreferrer">
                      Подробный кейс <b>↗</b>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-more-cases">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Ещё маркетинговые работы</p>
            <h2>Опыт шире четырёх флагманских кейсов</h2>
          </div>

          <div className="marketing-more-grid">
            {moreCases.map((item) => (
              <article className={`marketing-more-card marketing-more-${item.visual}`} key={item.title}>
                <div className="marketing-more-visual" aria-hidden="true">
                  {item.visual === "video" && <div className="marketing-video-frames"><i /><i /><i /></div>}
                  {item.visual === "brand" && (
                    <div className="marketing-brand-preview">
                      <b>Aa</b><span /><span /><span /><span />
                    </div>
                  )}
                  {item.visual === "production" && (
                    <div className="marketing-production-preview">
                      <b>167</b><span>запросов</span><b>100%</b><span>в срок</span>
                    </div>
                  )}
                  {item.visual === "event" && (
                    <div className="marketing-event-preview">
                      <b>117</b><span>лидов</span><em>37 млн ₽</em>
                    </div>
                  )}
                  {item.visual === "deck" && (
                    <div className="marketing-deck-preview">
                      <span>01</span><span>05</span><span>12</span><b>20</b>
                    </div>
                  )}
                  {item.visual === "site" && (
                    <div className="marketing-site-preview">
                      <i /><i /><i />
                      <strong>EAL</strong>
                    </div>
                  )}
                </div>
                <div className="marketing-more-copy">
                  <p>{item.tag}</p>
                  <h3>{item.title}</h3>
                  <strong>{item.metric}</strong>
                  <span>{item.text}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-process">
        <div className="marketing-shell">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Как я веду проект</p>
            <h2>От вопроса бизнеса — к материалу, запуску и проверке результата</h2>
          </div>

          <ol className="marketing-process-line">
            <li>
              <b>01</b>
              <div><h3>Разбираюсь в задаче</h3><p>Что бизнес хочет изменить, что уже известно и какое решение нужно принять.</p></div>
            </li>
            <li>
              <b>02</b>
              <div><h3>Исследую</h3><p>Рынок, аудиторию, конкурентов, путь клиента, спрос, ограничения и данные.</p></div>
            </li>
            <li>
              <b>03</b>
              <div><h3>Формулирую решение</h3><p>Сегментация, позиционирование, продуктовая гипотеза, структура страницы или коммуникации.</p></div>
            </li>
            <li>
              <b>04</b>
              <div><h3>Перевожу в реализацию</h3><p>ТЗ, прототип, содержание, бюджет, исполнители, производство и согласования.</p></div>
            </li>
            <li>
              <b>05</b>
              <div><h3>Запускаю и измеряю</h3><p>Контролирую выпуск и смотрю на лиды, конверсию, продажи, сроки или другой целевой показатель.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="marketing-section marketing-tasks">
        <div className="marketing-shell marketing-task-layout">
          <div className="marketing-section-head">
            <p className="marketing-eyebrow">Где я особенно полезна</p>
            <h2>Задачи, с которыми можно прийти ко мне</h2>
          </div>
          <div className="marketing-task-list">
            <article><b>01</b><p>Нужно понять рынок, аудиторию или причины слабого спроса перед запуском.</p></article>
            <article><b>02</b><p>Есть продукт, но непонятно, как его сегментировать, позиционировать и объяснить клиенту.</p></article>
            <article><b>03</b><p>Нужно превратить исследование в сайт, продуктовую страницу, презентацию, видео или бренд-систему.</p></article>
            <article><b>04</b><p>Маркетинговый проект завис между заказчиком, дизайнером, разработкой и подрядчиками — его нужно довести до выпуска.</p></article>
            <article><b>05</b><p>После запуска нужно собрать результат и понять, что масштабировать, доработать или остановить.</p></article>
          </div>
        </div>
      </section>

      <section className="marketing-contact" id="contact">
        <div className="marketing-shell marketing-contact-grid">
          <div>
            <p className="marketing-eyebrow">Связаться</p>
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
