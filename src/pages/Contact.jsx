import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", entreprise: "", pack: "", message: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <p className="section-label" style={{ color: "var(--blue-light)" }}>Parlons-en</p>
        <h1>Contactez-nous</h1>
        <p>
          Vous souhaitez devenir entreprise pilote, en savoir plus sur nos packs ou simplement échanger sur vos enjeux d'inclusion ? Nous sommes disponibles.
        </p>
        <div className="contact-detail">
          <div className="contact-detail-icon">📍</div>
          <span>Avignon, Grand Avignon — PACA</span>
        </div>
        <div className="contact-detail">
          <div className="contact-detail-icon">📞</div>
          <span>04 62 18 86 62</span>
        </div>
        <div className="contact-detail">
          <div className="contact-detail-icon">✉️</div>
          <span>contact@atypicall.com</span>
        </div>
        <div className="contact-detail">
          <div className="contact-detail-icon">🌐</div>
          <span>atypicall.vercel.app</span>
        </div>
      </div>

      <div className="contact-form-wrap">
        {sent ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
            <h2 style={{ color: "var(--blue-dark)", marginBottom: "0.5rem" }}>Message envoyé !</h2>
            <p style={{ color: "var(--grey-mid)" }}>Nous vous recontacterons très rapidement.</p>
          </div>
        ) : (
          <>
            <h2>Prendre rendez-vous</h2>
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Prénom</label>
                  <input name="prenom" value={form.prenom} onChange={handle} placeholder="Claire" required />
                </div>
                <div className="form-group">
                  <label>Nom</label>
                  <input name="nom" value={form.nom} onChange={handle} placeholder="Martin" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email professionnel</label>
                <input type="email" name="email" value={form.email} onChange={handle} placeholder="claire@entreprise.fr" required />
              </div>
              <div className="form-group">
                <label>Entreprise</label>
                <input name="entreprise" value={form.entreprise} onChange={handle} placeholder="Nom de votre entreprise" />
              </div>
              <div className="form-group">
                <label>Pack qui vous intéresse</label>
                <select name="pack" value={form.pack} onChange={handle}>
                  <option value="">Je ne sais pas encore</option>
                  <option value="decouverte">Pack Découverte — 2 500€ HT</option>
                  <option value="inclusion">Pack Inclusion Complète — 8 500€ HT</option>
                  <option value="politique">Pack Politique Handicap — 18 000€ HT/an</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Décrivez brièvement votre situation et vos besoins..." />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%" }}>Envoyer ma demande</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
