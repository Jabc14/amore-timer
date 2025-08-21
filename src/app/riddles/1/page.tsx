"use client";
import { useState } from "react";
import RiddlePage from "@/components/RiddlePage";

export default function RiddleMorse() {
  const [input, setInput] = useState("");
  const answer = "amor";

  return (
    <RiddlePage
      step={1}
      totalSteps={5}
      nextStep="/riddles/2"
      validate={() => input.trim().toLowerCase() === answer}
    >
      <p className="riddle-question">.- -- --- .-.</p>
      <input
        type="text"
        className="riddle-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu respuesta"
      />
    </RiddlePage>
  );
}
