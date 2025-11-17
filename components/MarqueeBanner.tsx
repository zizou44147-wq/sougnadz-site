import React from "react";
type Props = { text?: string };
export default function MarqueeBanner({ text = "Welcome to Sougnadz" }: Props) {
  return (
    <div style={{ background: "#0f172a", color: "#fff", padding: "8px 12px", overflow: "hidden" }}>
      <div style={{ whiteSpace: "nowrap", display: "inline-block", animation: "marquee 12s linear infinite" }}>
        {text} &nbsp; • &nbsp; {text}
      </div>
      <style>{`@keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }`}</style>
    </div>
  );
}
