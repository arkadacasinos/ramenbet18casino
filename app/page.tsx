const keywordSections = [
  {
    id: 'ramenbet',
    title: 'RamenBet — понятный старт для игрока',
    text: 'RamenBet создан для тех, кто хочет быстро разобраться в казино без лишних переходов. На одной странице собраны вход, описание игр и простые подсказки для новичка. RamenBet удобно открывать со смартфона: меню короткое, кнопки заметные, а важная информация находится рядом с нужным действием.',
  },
  {
    id: 'ramenbet-mirror',
    title: 'RamenBet зеркало для стабильного входа',
    text: 'Если основной адрес временно не открывается, RamenBet зеркало помогает продолжить путь к личному кабинету. Проверяйте адрес перед вводом данных и пользуйтесь только актуальной ссылкой из доверенного источника. RamenBet зеркало повторяет привычную структуру сайта, поэтому игроку не приходится заново искать игры и настройки.',
  },
  {
    id: 'ramen-bet',
    title: 'Рамен бет: что важно знать перед игрой',
    text: 'Рамен бет — это вариант написания, который часто используют в поиске. По запросу Рамен бет игроки ищут официальный вход, бонусные предложения и каталог слотов. Перед пополнением баланса изучите правила конкретной игры, лимиты и условия вывода, а азартный бюджет определите заранее.',
  },
  {
    id: 'ramenbet-official',
    title: 'Ramenbet официальный сайт без лишней рекламы',
    text: 'Ramenbet официальный сайт должен открываться аккуратно и понятно: с безопасным соединением, корректным названием бренда и прозрачными условиями. На странице Ramenbet официальный сайт представлен как место для знакомства с платформой, а не обещание гарантированного выигрыша. Играйте только на сумму, которую готовы потерять.',
  },
  {
    id: 'ramenbet-work',
    title: 'RamenBet рабочее зеркало для мобильного доступа',
    text: 'Когда нужен RamenBet рабочее зеркало, особенно важно сохранить привычный сценарий на небольшом экране. RamenBet рабочее зеркало должно быстро загружаться, не просить подозрительные разрешения и вести на те же разделы. Используйте защищённую сеть и не передавайте пароль третьим лицам.',
  },
  {
    id: 'ramenbet-casino',
    title: 'Ramenbet казино: игры и спокойный выбор',
    text: 'Ramenbet казино объединяет популярные слоты, настольные форматы и разделы для разных интересов. В Ramenbet казино лучше начинать с демо-режима или небольшой ставки, чтобы понять механику. Не воспринимайте игру как способ заработка: результат случайный, а пауза помогает сохранять контроль.',
  },
]

const hashtags = ['ramenbet', 'раменбет', 'ramenbet зеркало', 'рамен бет', 'ramen bet', 'раменбет зеркало', 'ramenbet официальный сайт', 'раменбет официальный сайт', 'ramenbet рабочее зеркало', 'ramenbet казино', 'раменбет казино']

export default function Page() {
  return (
    <main className="rmb-page">
      <header className="rmb-hero">
        <nav className="rmb-nav" aria-label="Основная навигация">
          <a className="rmb-logo" href="#top" aria-label="RamenBet — на главную"><span>R</span> RamenBet</a>
          <a className="rmb-nav-link" href="#guide">Гид игрока <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="rmb-hero-grid" id="top">
          <div className="rmb-hero-copy">
            <p className="rmb-kicker">ОНЛАЙН-КАЗИНО · КОРОТКИЙ ГИД</p>
            <h1>Вход в RamenBet без лишних шагов</h1>
            <p className="rmb-lead">Разбираем, как найти официальный адрес, проверить зеркало и начать знакомство с казино спокойно — с телефона или компьютера.</p>
            <a className="rmb-primary" href="#guide">Открыть гид <span aria-hidden="true">↓</span></a>
            <p className="rmb-note">18+ · Играйте ответственно · Не является гарантией выигрыша</p>
          </div>
          <img className="rmb-hero-image" src="/ramenbet-hero.png" alt="Золотые игровые фишки и рулетка на тёмном столе" width="720" height="480" />
        </div>
      </header>

      <section className="rmb-intro" aria-labelledby="intro-title">
        <div><p className="rmb-eyebrow">РАЗБОР ЗАПРОСОВ</p><h2 id="intro-title">Как быстро найти нужную страницу</h2></div>
        <p>Игроки используют разные написания одного бренда: на латинице, кириллице, с уточнением «зеркало» или «официальный сайт». Ниже собраны основные варианты и практичные рекомендации. Выбирайте знакомый адрес, смотрите на защищённое соединение и не переходите по ссылкам из случайных сообщений.</p>
      </section>

      <section className="rmb-sections" id="guide" aria-label="Гид по ключевым запросам">
        {keywordSections.map((section) => (
          <article className="rmb-article" id={section.id} key={section.id}>
            <p className="rmb-index">{String(keywordSections.indexOf(section) + 1).padStart(2, '0')}</p>
            <div><h2>{section.title}</h2><p>{section.text}</p></div>
          </article>
        ))}
      </section>

      <section className="rmb-responsible" aria-labelledby="responsible-title">
        <div><p className="rmb-eyebrow">ПЕРЕД СТАРТОМ</p><h2 id="responsible-title">Проверка занимает минуту</h2><p>Сверьте домен, включите лимит расходов и не пытайтесь отыгрываться. Если игра перестаёт быть развлечением, остановитесь и обратитесь за поддержкой.</p></div>
        <img src="/ramenbet-guide.png" alt="Смартфон, игровые фишки и карты на столе" width="720" height="420" loading="lazy" />
      </section>

      <footer className="rmb-footer">
        <div><a className="rmb-logo" href="#top"><span>R</span> RamenBet</a><p>Навигация по запросам бренда и краткий ориентир для игроков.</p></div>
        <div className="rmb-tags" aria-label="Ключевые фразы сайта">{hashtags.map((tag) => <a href={`#${tag.replaceAll(' ', '-').replaceAll('ё', 'е')}`} key={tag}>#{tag.replaceAll(' ', '')}</a>)}</div>
        <p className="rmb-copyright">© 2026 RamenBet guide · Только информационный материал · 18+</p>
      </footer>
    </main>
  )
}

export const metadata = {
  title: 'RamenBet: официальный сайт, зеркало и быстрый вход в казино 2026',
  description: 'RamenBet — понятный гид по официальному сайту, рабочему зеркалу и входу в казино. Узнайте, как проверить адрес, открыть игры с телефона и играть ответственно без лишних обещаний и риска.',
}
