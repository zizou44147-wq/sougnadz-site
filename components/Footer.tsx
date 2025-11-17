import React from "react";
export default function Footer() {
  return (
    <footer style={{ padding:20, borderTop:"1px solid #eee", marginTop:40, background:"#fff" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
        © {new Date().getFullYear()} Sougnadz — Tous droits réservés
      </div>
    </footer>
  );
}
