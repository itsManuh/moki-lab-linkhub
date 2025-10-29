import SocialCard from "./components/SocialCard.jsx";
import { links } from "./data/links.jsx";
import dogIcon from "./assets/dog-icon.png";
import Github from "./icons/Github.jsx";

export default function App() {
  return (
    <main className="container" role="main">
      <header className="header">
        <div className="avatar-wrap">
          <img className="avatar-img" src={dogIcon} alt="Moki Labs logo" />
        </div>
        <h1 className="title">🩵 Somos Moki Labs 🩵</h1>
        <p className="subtitle">
          ⭐️ Damos vida a tus ideas con creatividad y magia 3D ⭐️<br />
          🩷 Figuras, llaveros, decoraciones y piezas únicas 🩷<br />
          🚚 Envíos a todo México 🚚
        </p>
      </header>

      <section className="grid" role="list" aria-label="Enlaces principales">
        {links.map((l) => <SocialCard key={l.id} {...l} />)}
      </section>

      <footer className="footer">
        <a href="https://github.com/itsManuh" target="_blank" rel="noopener noreferrer">
          <Github /> 
        </a>
      </footer>

    </main>
  );
}
