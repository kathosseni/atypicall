export default function Home({ navigate }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🧠 Neurodiversité en entreprise</span>
          <h1>
            Transformer la <span>neurodiversité</span> en levier de performance
          </h1>
          <p className="hero-desc">
            Atypic'All accompagne les entreprises de la région PACA dans l'inclusion des profils TDAH, TSA et DYS — du diagnostic à la mise en œuvre opérationnelle.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("offre")}>Découvrir nos packs</button>
            <button className="btn-secondary" onClick={() => navigate("contact")}>Devenir entreprise pilote</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-brain-container">
            <svg className="brain-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="80" cy="90" rx="55" ry="65" fill="#A8BDD8" opacity="0.6"/>
              <ellipse cx="120" cy="85" rx="50" ry="60" fill="#4A6FA5" opacity="0.5"/>
              <ellipse cx="75" cy="120" rx="45" ry="40" fill="#D6E4F0" opacity="0.7"/>
              <ellipse cx="125" cy="118" rx="42" ry="38" fill="#F2A8A0" opacity="0.5"/>
              <circle cx="100" cy="100" r="8" fill="#2C3E6B" opacity="0.3"/>
              <path d="M60 80 Q80 60 100 80 Q120 60 140 80" stroke="#2C3E6B" strokeWidth="2" fill="none" opacity="0.4"/>
              <path d="M65 100 Q85 85 105 100 Q125 85 145 100" stroke="#4A6FA5" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <path d="M70 120 Q90 108 110 120 Q130 108 150 120" stroke="#2C3E6B" strokeWidth="1.5" fill="none" opacity="0.3"/>
              <circle cx="55" cy="75" r="5" fill="#F2A8A0" opacity="0.8"/>
              <circle cx="145" cy="70" r="4" fill="#A8BDD8" opacity="0.8"/>
              <circle cx="50" cy="110" r="3" fill="#4A6FA5" opacity="0.6"/>
              <circle cx="155" cy="105" r="4" fill="#F2A8A0" opacity="0.7"/>
            </svg>
            <div className="hero-chip">🎯 TDAH · TSA · DYS</div>
            <div className="hero-chip">📍 Ancrage PACA</div>
            <div className="hero-chip">✅ Clé en main</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="stat-item">
          <h3>15%</h3>
          <p>de la population française présente des Troubles NeuroDéveloppementaux</p>
        </div>
        <div className="stat-item">
          <h3>1,7×</h3>
          <p>plus élevé : le taux de chômage des personnes en situation de handicap</p>
        </div>
        <div className="stat-item">
          <h3>6%</h3>
          <p>d'emploi de travailleurs handicapés imposé par l'obligation OETH</p>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section" style={{ background: "var(--white)" }}>
        <p className="section-label">Notre mission</p>
        <h2 className="section-title">Une approche globale, humaine et opérationnelle</h2>
        <p className="section-subtitle">
          Nous intervenons à chaque étape de votre démarche d'inclusion, en liant entreprises, professionnels de santé et institutions.
        </p>
        <div className="valeurs-grid">
          <div className="valeur-card">
            <div className="valeur-icon">🤝</div>
            <h3>Améliorer l'inclusion</h3>
            <p>Accompagner concrètement les entreprises dans l'accueil et le maintien dans l'emploi des profils neuroatypiques.</p>
          </div>
          <div className="valeur-card">
            <div className="valeur-icon">💡</div>
            <h3>Révéler les talents</h3>
            <p>Transformer les différences en atouts de performance en adaptant les environnements et les pratiques managériales.</p>
          </div>
          <div className="valeur-card">
            <div className="valeur-icon">🔄</div>
            <h3>Renforcer la RSE</h3>
            <p>Fournir des indicateurs mesurables et des actions documentées pour ancrer durablement votre politique handicap.</p>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: "var(--pink-pale)", padding: "4rem 5vw", textAlign: "center" }}>
        <p className="section-label" style={{ textAlign: "center" }}>Phase pilote ouverte</p>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>Devenez entreprise pilote Atypic'All</h2>
        <p style={{ color: "var(--grey-mid)", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: "1.75" }}>
          Bénéficiez d'un accompagnement sans engagement, co-construisez une offre adaptée à vos besoins réels et inscrivez-vous dans une démarche d'innovation sociale.
        </p>
        <button className="btn-primary" onClick={() => navigate("contact")}>Prendre rendez-vous</button>
      </section>
    </>
  );
}
