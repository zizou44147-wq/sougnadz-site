import React from "react";

export default function Header() {
  return (
    <header style={{ padding: 16, borderBottom: "1px solid #eee", background:"#fff" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", gap:12 }}>
        <div style={{ fontWeight:700 }}>Sougnadz</div>
        <nav style={{ marginLeft:16 }}>
          <a href="/" style={{ marginRight:12 }}>Accueil</a>
          <a href="/post" style={{ marginRight:12 }}>Déposer annonce</a>
          <a href="/categories">Catégories</a>
        </nav>
      </div>
    </header>
  );
}
