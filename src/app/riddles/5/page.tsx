"use client";
import { useState } from "react";
import RiddlePage from "@/components/RiddlePage";

export default function RiddleFirstLetters() {
  const answer = "afortunado";
  const textLines = [
    "A tu lado, soy más fuerte",
    "Fuiste la luz que encendió mi oscuridad",
    "Oigo tu risa y el mundo se hace suave",
    "Respiro profundo y te pienso felizmente",
    "Tu nombre late en mis noches y mis días",
    "Un abrazo tuyo será mi refugio favorito",
    "Nunca imaginé sentirme así de pleno",
    "Ahora sé que esto es destino",
    "Dame tu mano y no la sueltes",
    "Oye mi promesa: te amaré por siempre",
  ];
  const [input, setInput] = useState("");

  return (
    <RiddlePage
      step={5}
      totalSteps={5}
      nextStep="/riddles/final"
      validate={() => input.trim().toLowerCase() === answer}
    >
      <ul
        style={{
          padding: "0 1rem",
          textAlign: "left",
          marginBottom: "1rem",
          listStyle: "none",
          fontSize: ".75rem",
        }}
      >
        {textLines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      <input
        type="text"
        className="riddle-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe la respuesta"
      />
    </RiddlePage>
  );
}
