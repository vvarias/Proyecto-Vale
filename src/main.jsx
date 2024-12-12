import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Inicio from "./Inicio";
import Exhibiciones from "./Exhibiciones";
import Eventos from "./Eventos";
import Acerca from "./Acerca";
import Artistas from "./Artistas";
import Contactos from "./Contactos";

const Root = () => (
  <Router>
    <header className="header">
      <div className="logo">Museo Nova</div>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/exhibiciones">Exhibiciones</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/artistas">Artistas</Link>
        <Link to="/contactos">Contactos</Link>
      </nav>
      <div className="user">Valeria Arias</div>
    </header>

    <main className="main">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/exhibiciones" element={<Exhibiciones />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </main>

    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/">Inicio</Link>
        <Link to="/exhibiciones">Exhibiciones</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/artistas">Artistas</Link>
        <Link to="/contactos">Contactos</Link>
      </nav>
      <div className="social">
        <a href="#">🔗</a>
        <a href="#">📸</a>
        <a href="#">🐦</a>
      </div>
      <p>PROG. WEB II 2024 - Proyecto Final: Valeria Arias A.</p>
    </footer>
  </Router>
);

createRoot(document.getElementById("root")).render(<Root />);