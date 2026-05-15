export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-text">Atypic'All</div>
          <p>Transformer la neurodiversité en levier de performance. Solutions clés en main pour un environnement de travail plus inclusif, performant et humain.</p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><button onClick={() => navigate("home")}>Accueil</button></li>
            <li><button onClick={() => navigate("offre")}>Notre offre</button></li>
            <li><button onClick={() => navigate("apropos")}>À propos</button></li>
            <li><button onClick={() => navigate("contact")}>Contact</button></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><button>Avignon, PACA</button></li>
            <li><button>04 62 18 86 62</button></li>
            <li><button>contact@atypicall.com</button></li>
            <li><button>atypicall.vercel.app</button></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Atypic'All — Tous droits réservés</span>
        <span>Grand Avignon · PACA · France</span>
      </div>
    </footer>
  );
}
