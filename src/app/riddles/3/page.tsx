"use client";
import { useState } from "react";
import RiddlePage from "@/components/RiddlePage";

export default function RiddleAnagram() {
  const answer = "amarte";
  const [input, setInput] = useState("");

  return (
    <RiddlePage
      step={3}
      totalSteps={5}
      nextStep="/riddles/4"
      validate={() => input.trim().toLowerCase() === answer}
    >
      <p className="riddle-question">bnbsuf</p>
      <input
        type="text"
        className="riddle-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe la palabra correcta"
      />
    </RiddlePage>
  );
}
