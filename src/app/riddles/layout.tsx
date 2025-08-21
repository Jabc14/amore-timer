import { ReactNode } from "react";
import "../globals.css";

export default function RiddlesLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: "93vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #ffe6f0, #f0e6ff)",
        padding: "2rem",
      }}
    >
      {children}
    </div>
  );
}
