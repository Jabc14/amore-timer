"use client";
import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

type RiddlePageProps = {
  step: number;
  totalSteps: number;
  nextStep: string;
  children: ReactNode; // aquí se inyecta el contenido del acertijo
  validate: () => boolean; // función que verifica si la respuesta es correcta
};

export default function RiddlePage({
  step,
  totalSteps,
  nextStep,
  children,
  validate,
}: RiddlePageProps) {
  const router = useRouter();
  const [attempts, setAttempts] = useState(0);
  const [isPuzzleCorrect, setIsPuzzleCorrect] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleCheck = () => {
    setAttempts((prev) => prev + 1);
    if (validate()) {
      setIsPuzzleCorrect(true);
      setFeedback("✅ ¡Correcto, amor! 💖");
    } else {
      setFeedback("❌ Intenta de nuevo...");
    }
  };

  const handleNext = () => {
    if (isPuzzleCorrect) {
      router.push(nextStep);
    }
  };

  return (
    <div className="riddle-page">
      <div className="riddle-card">
        <h2 className="riddle-title">
          Acertijo {step} de {totalSteps}
        </h2>
        {children}
        <p className="riddle-feedback">{feedback}</p>
        <p className="riddle-status">Intentos: {attempts}</p>
        <button
          className="riddle-button"
          onClick={handleCheck}
          disabled={isPuzzleCorrect}
        >
          Comprobar
        </button>
        <button
          className="riddle-button"
          onClick={handleNext}
          disabled={!isPuzzleCorrect}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
