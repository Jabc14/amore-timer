"use client";
import { useState } from "react";
import RiddlePage from "@/components/RiddlePage";

export default function RiddlePuzzle() {
  const correctOrder = [
    "El",
    "destino",
    "nos",
    "hizo",
    "encontrarnos",
    "para",
    "estar",
    "juntos",
    "y",
    "amarnos",
    "por",
    "siempre",
  ];

  const scrambled = [
    "juntos",
    "amarnos",
    "El",
    "y",
    "hizo",
    "nos",
    "destino",
    "por",
    "encontrarnos",
    "para",
    "siempre",
    "estar",
  ];

  // Letras a resaltar SOLO en la respuesta (no en botones)
  // Juntas forman: M A I T E
  const highlightMap: Record<string, number[]> = {
    siempre: [2], // e
    amarnos: [4], // n
    encontrarnos: [2], // c
    estar: [3], // a
    nos: [0], // n
    destino: [3], // t
    para: [1], // a
    juntos: [5], // s
  };

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

  const handleSelect = (word: string, index: number) => {
    if (usedIndices.includes(index)) return;
    setSelectedWords((prev) => [...prev, word]);
    setUsedIndices((prev) => [...prev, index]);
  };

  const handleReset = () => {
    setSelectedWords([]);
    setUsedIndices([]);
  };

  const validate = () => selectedWords.join(" ") === correctOrder.join(" ");

  const renderHighlightedWord = (word: string, key: number) => {
    const idxs = new Set(highlightMap[word] || []);
    return (
      <span key={key} className="response-word">
        {word.split("").map((ch, i) => (
          <span
            key={i}
            className={idxs.has(i) ? "highlight-letter" : undefined}
          >
            {ch}
          </span>
        ))}
      </span>
    );
  };

  return (
    <RiddlePage
      step={2}
      totalSteps={5}
      nextStep="/riddles/3"
      validate={validate}
    >
      <p className="riddle-question">
        Selecciona las palabras en el orden correcto para formar la frase 💕
      </p>

      {/* Palabras disponibles (SIN resaltado) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        {scrambled.map((word, index) => (
          <button
            key={index}
            onClick={() => handleSelect(word, index)}
            disabled={usedIndices.includes(index)}
            className="riddle-button"
            style={{
              background: usedIndices.includes(index) ? "#ccc" : undefined,
              cursor: usedIndices.includes(index) ? "not-allowed" : "pointer",
            }}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Respuesta actual (AQUÍ SÍ se resaltan letras) */}
      <div
        style={{
          minHeight: "3rem",
          padding: "0.75rem",
          border: "2px dashed #f5a9d0",
          borderRadius: "0.75rem",
          textAlign: "center",
          marginBottom: "1rem",
          fontWeight: 600,
          lineHeight: 2,
        }}
      >
        {selectedWords.map((w, i) => renderHighlightedWord(w, i))}
      </div>

      <button
        onClick={handleReset}
        className="riddle-button"
        style={{ background: "#ff80b5" }}
      >
        Reiniciar
      </button>
    </RiddlePage>
  );
}
