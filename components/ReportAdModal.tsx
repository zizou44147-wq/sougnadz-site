import React from "react";
type Props = { open?: boolean; onClose?: () => void; };
export default function ReportAdModal({ open = false, onClose }: Props) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", padding: 20, borderRadius: 8, width: 400, maxWidth: "90%" }}>
        <h3>Report Ad</h3>
        <p>Use this modal to submit a report about an ad. (Stub)</p>
        <div style={{ textAlign: "right" }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
