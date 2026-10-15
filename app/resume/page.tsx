import type { Metadata } from "next";
import { PrintResumeButton } from "@/components/print-resume-button";
import Image from "next/image";
import { AmbientGeometry } from "@/components/ambient-geometry";

export const metadata: Metadata = {
  title:"Резюме — Татьяна Бабанова | Executive Assistant",
  description:"Татьяна Бабанова — Executive Assistant, бизнес-ассистент собственника. Резюме: опыт, результаты, навыки, образование и контакты."
};
const roles = [
  {company:"EAL · Международная логистическая компания",dates:"Январь 2025 — сентябрь 2026",role:"Бизнес-ассистент собственника",
   intro:"Прямая работа с собственником и руководителями функций; контроль поручений, личная и управленческая поддержка, проекты, аналитика, HR и оптимизация процессов.",
   bullets:[
    "88% неструктурированных вопросов собственника доводила до результата без повторного участия руководителя при объёме до 40 вопросов еженедельно.",
    "Сократила долю просроченных поручений на 77% в контуре 33 сотрудников, централизовав задачи и контроль сроков.",
    "Снизила регулярные расходы на ИТ-сопровождение на 78,3%: с 300 до 65 тыс. ₽ в месяц; расчётный эффект 2,82 млн ₽ ежегодно.",
    "Повысила долю ИТ-задач, выполненных в срок, с 60% до 98% на массиве 460 задач.",
    "Ускорила получение аналитики в 1С с 60 до 2 минут; организовала автоматизацию регулярной финансовой проверки с 120 до 5 минут.",
    "Стандартизировала 17 процессов, подготовила 15 регламентов и более 10 инструкций.",
    "Сопроводила закрытие пяти вакансий: 200+ кандидатов и около 30 интервью.",
    "Организовывала примерно шесть управленческих встреч в неделю; запись и транскрибация сократили подготовку материалов с трёх часов до 20 минут.",
    "Анализировала коммерческие предложения подрядчиков, организовывала поездки и календарь собственника, контролировала документы и оплаты.",
    "За день исследовала 20 направлений бизнеса и сформировала базу из 600 уникальных потенциальных B2B-компаний; применяла ChatGPT и Claude с проверкой результатов.",
    "Организовала запуск двух корпоративных сайтов, реализацию интеграций Mango с Битрикс24 и ИИ с Google-сервисами."
   ]},
  {company:"КАН-АВТОВАЗ",dates:"Январь 2024 — январь 2025",role:"Бизнес-ассистент",intro:"Функциональная специализация: координация проектов, внутренних заказчиков и производственных подрядчиков.",
   bullets:[
     "Обеспечила исполнение в срок 167 запросов от 15 внутренних заказчиков за год при среднем сроке около 1,5 дня.",
     "Снизила производственные затраты на 20% при выпуске 500 тыс.+ рекламных и информационных материалов.",
     "Координировала подготовку и размещение около 5 000 единиц товарного контента для CarWit, Ozon и Wildberries.",
     "Организовала корпоративное мероприятие для 300 участников в рамках бюджета 2,5 млн ₽ с удовлетворённостью 95%."
   ]},
  {company:"ГК «АЛЬФА» · Mavinta",dates:"Февраль 2023 — январь 2024",role:"Бизнес-ассистент",intro:"Функциональная специализация: координация специальных, выставочных и B2B-проектов.",
   bullets:[
     "Обеспечила проведение TransRussia, COMvex и CTT Expo за 90 дней без превышения совокупного бюджета 7,5 млн ₽.",
     "Подготовила 15 исследований рынка, конкурентов и спроса; девять рекомендаций внедрены компанией.",
     "Организационно и документально сопровождала переговоры с китайским производителем, по итогам которых компания заключила сделку на 67 млн ₽ со скидкой 20%.",
     "В рамках организации участия в четырёх выставках в России и Китае и подготовки POS-материалов получены 317 лидов и 98 клиентов.",
     "Сопровождала коммерческие проекты с десятью компаниями, по итогам взаимодействия заключены договоры свыше 180 млн ₽. По данным компании, после обновления коммерческих предложений продажи выросли на 10%.",
     "На COMvex: 137 целевых лидов, 67 млн ₽ продаж и 44 млн ₽ валовой прибыли при бюджете 2,5 млн ₽; моя роль — организация выставочного проекта, а не закрытие сделок.",
     "Диплом «Лучший сотрудник» по итогам 2023 года."
   ]},
  {company:"АЙРИС ГРУПП",dates:"Январь 2020 — январь 2023",role:"Секретарь генерального директора",intro:"Административная поддержка руководителя, документооборот, встречи, контроль поручений.",
   bullets:[
    "Организовывала около восьми поездок генерального директора ежегодно и поездки более 40 сотрудников.",
    "Актуализировала девять регламентов и организационных документов; сопровождала подбор пяти сотрудников."
   ]},
  {company:"DREAM TEAM · ИТ-компания",dates:"Январь 2017 — декабрь 2019",role:"Персональный ассистент руководителя ИТ-компании",intro:"Рабочие и личные задачи руководителя, встречи, поездки и взаимодействие между подразделениями.",
   bullets:[
    "Координировала поручения и договорённости, самостоятельно решала нестандартные организационные вопросы."
   ]}
];
const skills = ["Поддержка собственника и генерального директора","Контроль поручений и управленческих решений","Межфункциональная координация","Подготовка аналитики и вариантов решений","Организация встреч и поездок","Подрядчики, договоры и оплаты","Подбор персонала","Оптимизация и регламентация процессов","ИИ и автоматизация административных задач"];
const metrics = [
  ["88%", "вопросов решала без повторного подключения собственника"],
  ["−77%", "просроченных поручений после систематизации"],
  ["−78,3%", "регулярных расходов на ИТ-сопровождение"],
  ["120 → 5 мин", "время регулярной финансовой проверки в 1С"]
];

export default function ResumePage() {
  return (
    <div className="proj-site resume-site">
      <AmbientGeometry />
      <header className="proj-nav">
        <nav className="proj-container proj-nav-inner" aria-label="Навигация по резюме">
          <a className="proj-brand" href="/">Татьяна Бабанова</a>
          <div className="proj-nav-links">
            <a href="/">Портфолио</a>
            <a href="/projects/">Проекты</a>
            <a className="proj-nav-cta" href="https://t.me/taninnik" target="_blank" rel="noreferrer">Связаться ↗</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="resume-screen-actions proj-container">
          <span>Резюме / актуальная версия · 15.10.2026</span>
          <PrintResumeButton />
        </div>
        <article className="proj-resume" id="resume">
          <header className="resume-hero">
            <div className="resume-hero-copy">
              <p className="resume-eyebrow">БИЗНЕС-АССИСТИРОВАНИЕ · ОПЕРАЦИОННАЯ КООРДИНАЦИЯ</p>
              <h1>Татьяна Бабанова</h1>
              <p className="resume-title">Executive Assistant</p>
              <p className="resume-summary">Самостоятельно решаю рабочие и личные вопросы собственника, организую исполнителей, контролирую поручения и улучшаю бизнес-процессы.</p>
              <div className="resume-contact-list">
                <span>Казань · Удалённо по России · Готова к командировкам</span>
                <a href="tel:+79867233155">+7 (986) 723-31-55 ↗</a>
                <a href="mailto:babanova595@gmail.com">babanova595@gmail.com ↗</a>
                <a href="https://t.me/taninnik" target="_blank" rel="noreferrer">Telegram: @taninnik ↗</a>
              </div>
            </div>
            <div className="resume-hero-profile">
              <span className="resume-portrait-label">ТАТЬЯНА БАБАНОВА</span>
              <figure className="resume-portrait">
                <Image src="/tatiana-babanova.jpg" alt="Татьяна Бабанова" fill priority sizes="(max-width: 900px) 85vw, 340px" />
              </figure>
            </div>
          </header>

          <section className="resume-metric-grid" aria-label="Главные результаты">
            {metrics.map(([number,label])=>(
              <div className="resume-metric" key={number}><strong>{number}</strong><p>{label}</p></div>
            ))}
          </section>

          <div className="resume-section-row">
            <section className="resume-intro-block" aria-labelledby="resume-about">
              <h2 id="resume-about">Обо мне</h2>
              <p>Более девяти лет работаю в административной, операционной и проектной поддержке руководителей. Привыкла самостоятельно разбираться в нестандартных задачах, проверять информацию, готовить варианты решений и контролировать выполнение.</p>
              <p>В EAL при объёме до 40 вопросов еженедельно 88% доводила до результата без повторного подключения собственника. Координировала участников без прямого подчинения, внутренние проекты, подрядчиков, подбор сотрудников и автоматизацию.</p>
            </section>
            <section className="resume-skill-block" aria-labelledby="resume-skills">
              <h2 id="resume-skills">Ключевые навыки</h2>
              <ul>{skills.map(x=><li key={x}>{x}</li>)}</ul>
            </section>
          </div>

          <section className="resume-experience" aria-labelledby="resume-experience-title">
            <div className="resume-section-heading"><span>01 / КАРЬЕРА</span><h2 id="resume-experience-title">Опыт работы</h2></div>
            {roles.map((item,idx)=>(
              <section className="resume-job" key={item.company}>
                <div className="resume-job-aside">
                  <span className="resume-job-index">{String(idx+1).padStart(2,"0")}</span>
                  <p className="resume-job-dates">{item.dates}</p>
                </div>
                <div className="resume-job-content">
                  <h3>{item.company}</h3>
                  <p className="resume-job-role">{item.role}</p>
                  <p className="resume-job-intro">{item.intro}</p>
                  <ul>{item.bullets.map((x,i)=><li key={i}>{x}</li>)}</ul>
                </div>
              </section>
            ))}
          </section>

          <div className="resume-end-grid">
            <section aria-labelledby="resume-tools" className="resume-end-panel">
              <span className="resume-small-label">02 / ИНСТРУМЕНТЫ</span>
              <h2 id="resume-tools">Программы и ИИ</h2>
              <dl>
                <dt>Задачи и проекты</dt><dd>Битрикс24, Microsoft To Do, Microsoft Planner, TickTick, Jira, YouTrack, Miro.</dd>
                <dt>Аналитика и документы</dt><dd>1С, Excel, Google Таблицы, Notion, Confluence, Microsoft 365, Google Workspace.</dd>
                <dt>ИИ для бизнес-задач</dt><dd>ChatGPT, Claude, Perplexity, Copilot: исследования, подготовка аналитики, работа с документами и кандидатами.</dd>
              </dl>
            </section>
            <section aria-labelledby="resume-education" className="resume-end-panel">
              <span className="resume-small-label">03 / ОБРАЗОВАНИЕ</span>
              <h2 id="resume-education">Образование</h2>
              <p><strong>2015 · КНИТУ</strong> — экономический факультет, коммерсант-маркетолог.</p>
              <p>2025 · «Бизнес-ассистент руководителя 2.0», школа А. Сосновой.</p>
              <p>2025 · «ИИ-менеджмент: от хаоса к системе», ANTIUNIVERSITY.</p>
              <p>2023 · Product Manager, Университет Иннополис.</p>
              <p>2022 · Бизнес-разведка, РАНХиГС; маркетинг, реклама и связи с общественностью, РЭУ им. Г. В. Плеханова.</p>
              <p><strong>Английский — B1.</strong> Рекомендации — по запросу.</p>
            </section>
          </div>
          <div className="resume-disclaimer">
            <strong>Подробные доказательства и проектные кейсы:</strong>
            <a href="/">портфолио бизнес-ассистента ↗</a>
            <a href="/projects/">проектные результаты ↗</a>
          </div>
        </article>
      </main>
      <footer className="resume-footer">
        <div className="proj-container">
          <div><strong>Татьяна Бабанова</strong><span>Executive Assistant · Казань / удалённо</span></div>
          <nav aria-label="Ссылки из резюме"><a href="/">Главная</a><a href="/projects/">Проекты</a><a href="https://t.me/taninnik" target="_blank" rel="noreferrer">Telegram ↗</a></nav>
        </div>
      </footer>
    </div>
  );
}
