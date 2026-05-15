export default function Navbar({ current, navigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("home")}>
        <div>
          <span className="navbar-logo-text">Atypic'All</span>
          <span className="navbar-logo-sub">Embracing differences as key of success</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><button className={current === "home" ? "active" : ""} onClick={() => navigate("home")}>Accueil</button></li>
        <li><button className={current === "offre" ? "active" : ""} onClick={() => navigate("offre")}>Notre offre</button></li>
        <li><button className={current === "apropos" ? "active" : ""} onClick={() => navigate("apropos")}>À propos</button></li>
        <li><button className={`navbar-cta ${current === "contact" ? "active" : ""}`} onClick={() => navigate("contact")}>Nous contacter</button></li>
      </ul>
    </nav>
  );
}
