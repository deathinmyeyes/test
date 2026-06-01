import './App.css'

const stats = [
  { value: '100', label: 'пользователей сосут писюны' },
  { value: '4', label: 'супер сосуна' },
  { value: '1 неповторимая', label: 'МУХА' },
]



function App() {
  return (
    <main className="page">
      <section className="hero">
        <nav className="nav" aria-label="Главная навигация">
          <span className="brand">СУПЕР ПУПЕР САЙТ</span>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>ЛАЩАРЫ ПРИВЕТ</h1>
            <div className="actions">
              <a className="button primary" onClick={() => {
                window.location.href = 'https://pornhub.com';
              }} href="#briefing">
                ПОСАСАТЬ
              </a>
              <a onClick={() => {
                window.location.href = 'https://t.me/JAMESGANGBANG';
              }} className="button ghost" href="#modes">
                НЕ НАЖИМАЙ
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="stats" aria-label="Ключевые цифры">
        {stats.map((item) => (
          <article className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

     
      
    </main>
  )
}

export default App
