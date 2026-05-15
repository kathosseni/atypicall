const team = [
  {
    initials: "EB",
    name: "Enola Bouvenot",
    role: "Porteuse du projet",
    bio: "Diplômée d'un master en Agronomie, diagnostiquée TDAH. Elle accompagne les personnes neuroatypiques dans leur insertion en entreprise avec une légitimité terrain unique.",
  },
  {
    initials: "JH",
    name: "Jade Hassanaly",
    role: "Associée",
    bio: "Master en Commerce International et Management interculturel, spécialisation Marketing et Finances. Pilote l'organisation et la stratégie commerciale.",
  },
  {
    initials: "MO",
    name: "Malikath Osseni",
    role: "Associée",
    bio: "Étudiante en Licence 3 Informatique. Ses compétences en développement logiciel soutiennent la phase applicative du projet et la présence digitale.",
  },
];

export default function APropos({ navigate }) {
  return (
    <>
      <section className="apropos-hero">
        <p className="section-label" style={{ textAlign: "center" }}>Qui sommes-nous</p>
        <h1 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>Une équipe engagée, ancrée en PACA</h1>
        <p style={{ color: "var(--grey-mid)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.75", textAlign: "center" }}>
          Atypic'All est né de la conviction qu'une entreprise qui inclut vraiment les profils neuroatypiques est une entreprise plus performante, plus humaine et plus résiliente.
        </p>
      </section>

      <div className="team-grid" style={{ maxWidth: "960px" }}>
        {team.map((m) => (
          <div key={m.name} className="team-card">
            <div className="team-avatar">{m.initials}</div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <div className="team-role">{m.role}</div>
              <p>{m.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mission-band">
        <div>
          <h2>Notre mission</h2>
          <p>
            Transformer la neurodiversité en levier de performance en accompagnant les entreprises de la région PACA dans l'inclusion concrète des profils TDAH, TSA et DYS. Nous faisons le lien entre les entreprises, les professionnels de santé qualifiés et les institutions pour offrir un service vraiment clé en main.
          </p>
        </div>
        <div className="mission-values">
          <div className="mission-value">
            <span className="mission-value-icon">🎯</span>
            <span>Ancrage territorial exclusif Grand Avignon / PACA</span>
          </div>
          <div className="mission-value">
            <span className="mission-value-icon">🧠</span>
            <span>Expertise vécue — Enola diagnostiquée TDAH</span>
          </div>
          <div className="mission-value">
            <span className="mission-value-icon">🏥</span>
            <span>Réseau de professionnels de santé qualifiés</span>
          </div>
          <div className="mission-value">
            <span className="mission-value-icon">📋</span>
            <span>Du diagnostic à la mise en place opérationnelle</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--grey-warm)", padding: "4rem 5vw", textAlign: "center" }}>
        <h2 className="section-title" style={{ marginBottom: "1rem" }}>Rejoignez l'aventure Atypic'All</h2>
        <p style={{ color: "var(--grey-mid)", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: "1.75" }}>
          Devenez entreprise pilote et co-construisez avec nous une offre adaptée à vos besoins réels.
        </p>
        <button className="btn-primary" onClick={() => navigate("contact")}>Nous contacter</button>
      </section>
    </>
  );
}
