const packs = [
  {
    label: "Pack",
    name: "Découverte",
    price: "2 500€",
    period: "HT",
    desc: "Idéal pour les PME qui souhaitent faire un premier pas concret vers l'inclusion.",
    features: [
      "Audit flash (2h) + rapport",
      "½ journée de sensibilisation en équipe (jusqu'à 8 personnes)",
      "1 fiche aménagements opérationnels",
      "Identification des aides AGEFIPH mobilisables",
    ],
    featured: false,
  },
  {
    label: "Pack",
    name: "Inclusion Complète",
    price: "8 500€",
    period: "HT",
    desc: "Pour les structures prêtes à structurer durablement leur démarche d'inclusion.",
    features: [
      "Bilan neuropsychologique",
      "Évaluation du poste par un ergonome",
      "Rapport d'aménagements + plan d'action RH",
      "Formation manager direct (½ journée)",
      "Instruction dossier AGEFIPH",
      "Suivi à 3 mois (1 séance)",
    ],
    featured: true,
    badge: "Le plus complet",
  },
  {
    label: "Pack",
    name: "Politique Handicap",
    price: "18 000€",
    period: "HT / an",
    desc: "Pour les grandes structures souhaitant piloter une politique handicap globale et mesurable.",
    features: [
      "Audit complet politique handicap",
      "3 accompagnements individuels complets",
      "Formation référent handicap (1 journée)",
      "Formation manager (2 demi-journées)",
      "Suivi trimestriel (4 séances)",
      "Assistance instruction dossiers AGEFIPH",
    ],
    featured: false,
  },
];

export default function Offre({ navigate }) {
  return (
    <>
      <section className="offre-hero">
        <p className="section-label" style={{ color: "var(--blue-light)", textAlign: "center" }}>Nos solutions</p>
        <h1>Notre offre</h1>
        <p>Des packs progressifs, adaptés à la taille et aux besoins de votre entreprise — du premier diagnostic à la politique handicap complète.</p>
      </section>

      <div className="packs-grid">
        {packs.map((pack) => (
          <div key={pack.name} className={`pack-card ${pack.featured ? "featured" : ""}`}>
            {pack.badge && <div className="pack-badge">{pack.badge}</div>}
            <div className="pack-label">{pack.label}</div>
            <div className="pack-name">{pack.name}</div>
            <div className="pack-price">{pack.price} <span>{pack.period}</span></div>
            <p className="pack-desc">{pack.desc}</p>
            <ul className="pack-features">
              {pack.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className={pack.featured ? "btn-primary" : "btn-secondary"} style={{ width: "100%" }} onClick={() => navigate("contact")}>
              Nous contacter
            </button>
          </div>
        ))}
      </div>

      <section style={{ background: "var(--blue-pale)", padding: "4rem 5vw", textAlign: "center" }}>
        <h2 className="section-title" style={{ marginBottom: "1rem" }}>Vos aides AGEFIPH peuvent financer nos interventions</h2>
        <p style={{ color: "var(--grey-mid)", maxWidth: "560px", margin: "0 auto 2rem", lineHeight: "1.75" }}>
          En tant qu'entreprise soumise à l'OETH, vous disposez peut-être d'aides mobilisables. Nous vous accompagnons dans l'instruction de ces dossiers pour réduire le coût réel de votre démarche.
        </p>
        <button className="btn-primary" onClick={() => navigate("contact")}>En savoir plus</button>
      </section>
    </>
  );
}
