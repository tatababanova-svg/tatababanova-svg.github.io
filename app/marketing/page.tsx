import type { Metadata } from "next";
import "./marketing.css";

export const metadata: Metadata = {
  title: "Татьяна Бабанова — продуктовый маркетинг и маркетинговые проекты",
  description:
    "Маркетинговое портфолио Татьяны Бабановой: исследования рынка и аудитории, B2B, продуктовый маркетинг, сайты, контент, бренд и запуск.",
};

const assetBase =
  "https://raw.githubusercontent.com/tatababanova-svg/tatiana-babanova-portfolio/notion-portfolio-assets-20260928/public/notion-assets";

const cases = [
  {
    id: "eal",
    number: "01",
    title: "EAL",
    subtitle: "Исследование → B2B → продукт → сайт → конверсия",
    task: "Связать рынок, аудиторию, продукт, коммуникацию, продажу и исполнение в одну B2B-систему.",
    research: "13 конкурентов · 4 ситуации покупки · роли в решении · критерии выбора · клиентский путь",
    result: "+8% к конверсии в покупки после внедрения первых 3 решений",
    image: `${assetBase}/EAL-01-CA.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581678755c267f35fa3c5",
  },
  {
    id: "vois",
    number: "02",
    title: "VOIS",
    subtitle: "Исследование покупателя → продуктовая логика → прототип → проверка",
    task: "Понять, почему при большом количестве информации человеку сложно выбрать продукт, и превратить вывод в проверяемое решение.",
    research: "9 брендов · 5 сегментов · путь клиента из 10 этапов · 8 экспериментов",
    result: "Прототип из 7 экранов + ТЗ + система проверки из 17 показателей",
    image: `${assetBase}/VOIS-03-prototype.svg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581dda040c3b2e574855d",
    note: "Инициативный проект на открытых данных. VOIS не был заказчиком; коммерческий эффект не заявляется.",
  },
  {
    id: "carwit",
    number: "03",
    title: "CarWit / КАН-АВТО",
    subtitle: "Продукт → e-commerce → контент → видео → запуск",
    task: "Поддержать запуск цифрового автомобильного продукта и подготовить материалы, которые объясняют продукт и помогают его продавать.",
    research: "Требования к материалам · около 5 000 единиц товарного контента · сценарий рекламного ролика",
    result: "2 млн ₽ ежемесячной выручки после запуска · +900 тыс. ₽ к предыдущему уровню",
    image: `${assetBase}/CarWit-product-screen.jpg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c85815f807fca93e619b82a",
  },
  {
    id: "comvex",
    number: "04",
    title: "COMvex / ГК Альфа",
    subtitle: "B2B-коммуникация → материалы → лиды → коммерческий результат",
    task: "Перевести сложный B2B-продукт в понятные презентационные и рекламные материалы и довести их до запуска.",
    research: "157+ макетов · 50 000+ рекламных материалов · 4 подрядчика",
    result: "137 целевых лидов → 67 млн ₽ продаж → 44 млн ₽ валовой прибыли",
    image: `${assetBase}/Alpha-brandbook-colors.jpg`,
    href: "https://marsh-inch-22f.notion.site/3e92eed19c8581fe8a90c1d0c5614168",
  },
];

const proof = [
  {
    title: "Рынок и аудитория",
    text: "Сравниваю предложения конкурентов и сегментирую аудиторию по ситуации покупки, рискам и критериям выбора.",
    image: `${assetBase}/EAL-02-competitors.svg`,
  },
  {
    title: "Позиционирование и продукт",
    text: "Отделяю подтверждённые факты от гипотез и перевожу вопросы клиента в продуктовую логику.",
    image: `${assetBase}/EAL-05-evidence.svg`,
  },
  {
    title: "Сайты и продуктовые страницы",
    text: "Превращаю исследование в структуру страницы и ТЗ: что должен понять пользователь, какое доказательство увидеть и что сделать дальше.",
    image: `${assetBase}/VOIS-04-brief.svg`,
  },
  {
    title: "Контент и визуальная упаковка",
    text: "Собираю содержание и требования, ставлю задачи дизайнерам и подрядчикам и контролирую единообразие. Графическую реализацию выполняют профильные исполнители.",
    image: `${assetBase}/CarWit-product-screen.jpg`,
  },
  {
    title: "Бренд-система",
    text: "Работаю с правилами фирменной коммуникации: цвет, типографика, логика носителей и единый визуальный язык.",
    image: `${assetBase}/Alpha-brandbook-colors.jpg`,
  },
  {
    title: "Запуск и результат",
    text: "Перевожу решение в задачи внедрения, синхронизирую исполнителей и проверяю лиды, конверсию, продажи или другой целевой показатель.",
    image: `${assetBase}/EAL-04-implementation.svg`,
  },
];

export default function MarketingPortfolio() {
  return (
    <main className="marketing-site">
      <nav className="marketing-nav" aria-label="Навигация по портфолио">
        <a className="marketing-brand" href="#top">Татьяна Бабанова</a>
        <div className="marketing-nav-links">
          <a href="#results">Результаты</a>
          <a href="#proof">Что умею</a>
          <a href="#cases">Кейсы</a>
          <a href="#contact">Контакты</a>
        </div>
      </nav>

      <section className="marketing-hero" id="top">
        <div className="marketing-shell marketing-hero-grid">
          <div className="marketing-hero-copy">
            <p className="marketing-kicker">Менеджер продуктового маркетинга и маркетинговых проектов</p>
            <h1>Исследую рынок и клиента → нахожу решение → перевожу его в продукт, коммуникацию и запуск</h1>
            <p className="marketing-lead">
              Начинаю с вопроса бизнеса: что происходит на рынке, как выбирает клиент и где теряется решение.
              Затем перевожу вывод в продукт, страницу, коммуникацию, ТЗ или эксперимент.
            </p>
            <p className="marketing-tags">B2B · продуктовый маркетинг · исследования · бренд и коммуникация</p>
            <div className="marketing-hero-actions">
              <a className="marketing-button marketing-button-primary" href="#cases">Смотреть кейсы</a>
              <a className="marketing-button marketing-button-secondary" href="#contact">Связаться</a>
            </div>
            <div className="marketing-flow" aria-label="Модель работы">
              <span>Исследование</span><i>→</i><span>Вывод</span><i>→</i><span>Решение</span><i>→</i><span>Запуск</span><i>→</i><span>Проверка</span>
            </div>
          </div>
          <figure className="marketing-portrait">
            <img src="/tatiana-babanova.jpg" alt="Татьяна Бабанова" />
            <figcaption>Казань · удалённо · готова к командировкам</figcaption>
          </figure>
        </div>
      </section>

      <section className="marketing-section marketing-results" id="results">
        <div className="marketing-shell">
          <p className="marketing-eyebrow">Результаты</p>
          <h2>Маркетинговая работа, которую можно связать с бизнес-показателями</h2>
          <div className="marketing-results-grid">
            <article>
              <strong>+45%</strong>
              <h3>к продажам</h3>
              <p>ГК Альфа внедрила 9 из 15 рекомендаций по рынку, конкурентам, аудитории и спросу. За следующий год продажи выросли на 45%.</p>
            </article>
            <article>
              <strong>+8%</strong>
              <h3>к конверсии в покупки</h3>
              <p>EAL: после внедрения первых 3 решений из B2B-коммерческой системы.</p>
            </article>
            <article>
              <strong>2 млн ₽ / мес.</strong>
              <h3>CarWit после запуска</h3>
              <p>Ежемесячная выручка достигла 2 млн ₽ — на 900 тыс. ₽ выше предыдущего уровня.</p>
            </article>
            <article>
              <strong>137 лидов</strong>
              <h3>COMvex</h3>
              <p>По данным бизнеса: 137 целевых лидов → 67 млн ₽ продаж → 44 млн ₽ валовой прибыли.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-section" id="proof">
        <div className="marketing-shell">
          <p className="marketing-eyebrow">Доказательства работы</p>
          <h2>Что я умею превращать в маркетинговое решение</h2>
          <p className="marketing-section-intro">Не список навыков — реальные фрагменты исследований, требований, прототипов и брендовых материалов.</p>
          <div className="marketing-proof-grid">
            {proof.map((item, index) => (
              <article className="marketing-proof-card" key={item.title}>
                <div className="marketing-proof-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="marketing-proof-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="marketing-proof-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-cases" id="cases">
        <div className="marketing-shell">
          <p className="marketing-eyebrow">4 флагманских кейса</p>
          <h2>От исследования до материала, запуска и результата</h2>
          <div className="marketing-case-list">
            {cases.map((item) => (
              <article className="marketing-case" id={item.id} key={item.id}>
                <div className="marketing-case-head">
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
                <div className="marketing-case-grid">
                  <div className="marketing-case-media">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="marketing-case-copy">
                    <dl>
                      <div><dt>Задача</dt><dd>{item.task}</dd></div>
                      <div><dt>Что исследовала / создавала</dt><dd>{item.research}</dd></div>
                      <div className="marketing-case-result"><dt>Результат</dt><dd>{item.result}</dd></div>
                    </dl>
                    {item.note && <p className="marketing-note">{item.note}</p>}
                    <a className="marketing-case-link" href={item.href} target="_blank" rel="noreferrer">Открыть подробный кейс ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-process">
        <div className="marketing-shell">
          <p className="marketing-eyebrow">Как работаю</p>
          <h2>Исследование должно закончиться решением, которое можно внедрить и измерить</h2>
          <div className="marketing-process-grid">
            {[
              ["01", "Бизнес-вопрос", "Формулирую, что именно нужно понять до принятия решения."],
              ["02", "Исследование", "Рынок, конкуренты, аудитория, путь клиента, варианты."],
              ["03", "Вывод", "Отделяю факт от гипотезы и формулирую, что это меняет для бизнеса."],
              ["04", "Решение", "Перевожу вывод в продукт, позиционирование, страницу, ТЗ или материал."],
              ["05", "Запуск", "Синхронизирую исполнителей, сроки, согласования и готовность."],
              ["06", "Проверка", "Смотрю на лиды, конверсию, продажи или другой целевой показатель."],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-tasks">
        <div className="marketing-shell">
          <p className="marketing-eyebrow">Для работодателя</p>
          <h2>Какие бизнес-задачи могу закрыть</h2>
          <ol className="marketing-task-list">
            <li><strong>Исследовать рынок и аудиторию перед запуском</strong><span>Конкуренты, спрос, сегменты, боли, критерии выбора.</span></li>
            <li><strong>Найти продуктовую или коммерческую гипотезу</strong><span>Что предложить, кому и почему это должно сработать.</span></li>
            <li><strong>Спроектировать позиционирование и путь клиента</strong><span>От точки выбора до нужного доказательства и действия.</span></li>
            <li><strong>Перевести решение в маркетинговый материал</strong><span>Сайт, продуктовая страница, карточка товара, презентация, видео, бренд-система.</span></li>
            <li><strong>Организовать запуск и проверить результат</strong><span>ТЗ, исполнители, выпуск материала и измерение результата.</span></li>
          </ol>
        </div>
      </section>

      <section className="marketing-section marketing-more">
        <div className="marketing-shell">
          <details>
            <summary>Дополнительные доказательства</summary>
            <div className="marketing-details-grid">
              <article>
                <h3>Проверка коммерческой идеи</h3>
                <p><strong>20 направлений → 7 отобраны → 3 протестированы → 53 запроса → 21 дошёл до продаж → 1 направление продолжено бизнесом.</strong></p>
              </article>
              <article>
                <h3>Сравнение вариантов</h3>
                <p>Сформировала сравнительную базу из <strong>235 коммерческих предложений</strong>: стоимость, сроки, возможности, ограничения и риски.</p>
              </article>
              <article>
                <h3>ИИ в исследованиях</h3>
                <p>Использую для поиска, первичного сравнения и структурирования, затем проверяю по исходным данным. На выборке из 199 задач типовой цикл сократился с 3–4 часов до примерно 40 минут.</p>
              </article>
            </div>
          </details>
        </div>
      </section>

      <section className="marketing-contact" id="contact">
        <div className="marketing-shell marketing-contact-grid">
          <div>
            <p className="marketing-eyebrow">Контакты</p>
            <h2>Татьяна Бабанова</h2>
            <p>Продуктовый маркетинг · маркетинговые проекты · B2B · исследования</p>
          </div>
          <div className="marketing-contact-actions">
            <a href="https://t.me/taninnik" target="_blank" rel="noreferrer">Telegram ↗</a>
            <a href="mailto:babanova595@gmail.com">babanova595@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
