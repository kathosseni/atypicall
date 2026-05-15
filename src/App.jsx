import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Offre from "./pages/Offre";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar current={page} navigate={navigate} />
      <main>
        {page === "home" && <Home navigate={navigate} />}
        {page === "offre" && <Offre navigate={navigate} />}
        {page === "apropos" && <APropos navigate={navigate} />}
        {page === "contact" && <Contact />}
      </main>
      <Footer navigate={navigate} />
      <SpeedInsights />
    </div>
  );
}
