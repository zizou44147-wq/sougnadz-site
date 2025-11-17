import React from "react";
type Props = { open?: boolean; onClose?: () => void };
export default function AuthModal({ open = false, onClose }: Props) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 }}>
      <div style={{ background: "#fff", padding: 20, borderRadius: 8, width: 420, maxWidth: "95%" }}>
        <h3>Sign in / Register (Stub)</h3>
        <p>This is a placeholder Auth modal used to run the app in dev mode.</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
