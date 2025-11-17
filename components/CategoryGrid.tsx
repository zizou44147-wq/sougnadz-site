import React from "react";

type Category = { id: string; title: string; prompt?: string; imgUrl?: string; };

const categories: Category[] = [
  { id: "real-estate", title: "Marché Immobilier & Locations", prompt: "modern house exterior, apartment and villa elements, bright lighting", imgUrl: "https://via.placeholder.com/320x180?text=Immobilier" },
  { id: "cars", title: "Marché des Véhicules et Autos", prompt: "two modern cars (Mercedes + Audi style), showroom lighting", imgUrl: "https://via.placeholder.com/320x180?text=Voitures" },
  { id: "parts", title: "Magasin de Pièces Détachées", prompt: "brake disc, spark plugs, filters, tools", imgUrl: "https://via.placeholder.com/320x180?text=Pi%C3%A8ces" },
  { id: "smartphones", title: "Smartphones Neufs & Occasion", imgUrl: "https://via.placeholder.com/320x180?text=Smartphones" },
  { id: "computers", title: "Ordinateurs & Accessoires", imgUrl: "https://via.placeholder.com/320x180?text=Ordinateurs" },
  { id: "appliances", title: "Appareils Ménagers", imgUrl: "https://via.placeholder.com/320x180?text=Appareils" },
  { id: "clothes", title: "Vêtements & Mode", imgUrl: "https://via.placeholder.com/320x180?text=V%C3%AAtements" },
  { id: "beauty", title: "Soins & Beauté", imgUrl: "https://via.placeholder.com/320x180?text=Beaut%C3%A9" },
  { id: "furniture", title: "Décoration & Meubles", imgUrl: "https://via.placeholder.com/320x180?text=Meubles" },
  { id: "entertainment", title: "Divertissement & Loisirs", imgUrl: "https://via.placeholder.com/320x180?text=Loisirs" },
  { id: "jobs", title: "Emplois & Opportunités", imgUrl: "https://via.placeholder.com/320x180?text=Emplois" },
  { id: "misc", title: "Équipements & Articles Divers", imgUrl: "https://via.placeholder.com/320x180?text=Divers" },
  { id: "food", title: "Produits Alimentaires & Boissons", imgUrl: "https://via.placeholder.com/320x180?text=Alimentation" },
  { id: "travel", title: "Voyages & Offres Touristiques", imgUrl: "https://via.placeholder.com/320x180?text=Voyages" },
  { id: "seekers", title: "Chercheurs d'Emploi", imgUrl: "https://via.placeholder.com/320x180?text=Chercheurs" },
  { id: "charity", title: "Projets Caritatifs & Bénévoles", imgUrl: "https://via.placeholder.com/320x180?text=Charit%C3%A9" },
  { id: "agri", title: "Vente d'Outils Agricoles", imgUrl: "https://via.placeholder.com/320x180?text=Agricole" }
];

export default function CategoryGrid() {
  return (
    <section style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Catégories</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
        {categories.map(c => (
          <article key={c.id} style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", cursor: "pointer" }}>
            <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center", background: "#f6f6f6" }}>
              <img src={c.imgUrl} alt={c.title} style={{ maxHeight: 96, objectFit: "contain" }} />
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 6, height: 36, overflow: "hidden" }}>{c.prompt ?? ""}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
