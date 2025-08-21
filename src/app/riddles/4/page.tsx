"use client";
import { useState } from "react";
import RiddlePage from "@/components/RiddlePage";

export default function RiddleDate() {
  const correctDate = "30/08/2025";
  const options = ["30/08/2026", "01/09/2025", "30/08/2025", "30/09/2025"];
  const [selected, setSelected] = useState("");

  return (
    <RiddlePage
      step={4}
      totalSteps={5}
      nextStep="/riddles/5"
      validate={() => selected === correctDate}
    >
      <p className="riddle-question">Elige la respuesta correcta 💖</p>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        {options.map((date) => (
          <button
            key={date}
            className="riddle-button"
            style={{
              background: selected === date ? "#d47abf" : "#eaa5d0",
            }}
            onClick={() => setSelected(date)}
          >
            {date}
          </button>
        ))}
      </div>
    </RiddlePage>
  );
}
