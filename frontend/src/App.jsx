import { useState } from 'react';
import './App.css'

import img from './assets/fsdf.jpg'

const stats = [
  { value: '100', label: 'пользователей сосут писюны' },
  { value: '4', label: 'супер сосуна' },
  { value: '1 неповторимая', label: 'МУХА' },
]





function App() {
const [a, setA] = useState(false);

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
              <a href="https://pornhub.com" onClick={() => {
                window.location.href = 'https://pornhub.com';
              }} className="button primary">
                ПОСАСАТЬ
              </a>
              <a  onClick={() => {
                setA(!a);
              }} className="button ghost">
                НЕ НАЖИМАЙ
              </a>
            </div>
            {a && <img style={{ marginTop: '20px'}} src={img} alt="img" />}

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
