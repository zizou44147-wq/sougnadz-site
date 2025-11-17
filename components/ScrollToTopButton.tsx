import React from "react";
export default function ScrollToTopButton() {
  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button onClick={onClick} aria-label="scroll-to-top" style={{ position: "fixed", right: 16, bottom: 16, padding: 10, borderRadius: 8 }}>
      ↑ Top
    </button>
  );
}
