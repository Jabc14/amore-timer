"use client";
import { useEffect, useState } from "react";

export default function FinalPage() {
  const targetDate = new Date("2025-08-30T00:00:00");
  const startDate = new Date("2025-06-23T00:00:00");

  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [timePassed, setTimePassed] = useState({ d: 0, h: 0, m: 0, s: 0 });

  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Palabras correctas de cada acertijo
  const requiredWords = {
    word1: "amarte",
    word3: "afortunado",
    word4: "encantas",
    word5: "amor",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // tiempo faltante
      const diffFuture = targetDate.getTime() - now.getTime();
      const d = Math.floor(diffFuture / (1000 * 60 * 60 * 24));
      const h = Math.floor((diffFuture / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diffFuture / (1000 * 60)) % 60);
      const s = Math.floor((diffFuture / 1000) % 60);
      setTimeLeft({ d, h, m, s });

      // tiempo transcurrido
      const diffPast = now.getTime() - startDate.getTime();
      const dp = Math.floor(diffPast / (1000 * 60 * 60 * 24));
      const hp = Math.floor((diffPast / (1000 * 60 * 60)) % 24);
      const mp = Math.floor((diffPast / (1000 * 60)) % 60);
      const sp = Math.floor((diffPast / 1000) % 60);
      setTimePassed({ d: dp, h: hp, m: mp, s: sp });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
  };

  const checkCompletion = () => {
    const allCorrect = Object.entries(requiredWords).every(
      ([key, val]) => answers[key]?.toLowerCase() === val.toLowerCase()
    );
    if (allCorrect) {
      setError(null);
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
      setError("Uy, revisa bien, preciosa 😅");
    }
  };

  return (
    <div className="final-container">
      <h1>✨ Nuestro Gran Día ✨</h1>

      <div className="poem">
        <p>
          Me comprometo
          <input
            value={answers.word1 || ""}
            onChange={(e) =>
              handleChange("word1", e.target.value.toLowerCase().trim())
            }
          />
          para siempre, en cada instante y en cada paso.
        </p>
        <p>
          En cada instante recuerdo lo mucho que me
          <input
            value={answers.word4 || ""}
            onChange={(e) =>
              handleChange("word4", e.target.value.toLowerCase().trim())
            }
          />{" "}
          .
        </p>
        <p>
          Me siento el más{" "}
          <input
            value={answers.word3 || ""}
            onChange={(e) =>
              handleChange("word3", e.target.value.toLowerCase().trim())
            }
          />{" "}
          por tenerte en mi vida.
        </p>
        <p>Porque tú eres mi vida, mi razón y mi destino.</p>
        <p>
          Y cuando llegue ese momento, deseo compartir contigo mi{" "}
          <input
            value={answers.word5 || ""}
            onChange={(e) =>
              handleChange("word5", e.target.value.toLowerCase().trim())
            }
          />
          , como expresión de todo lo que siento.
        </p>
      </div>
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      <button className="riddle-button" onClick={checkCompletion}>
        Comprobar
      </button>

      {isCompleted && (
        <div className="poem-finish">
          <h2>💖 ¡Lo lograste, mi vida! 💖</h2>
          <div className="timers">
            <p>
              ⏳ Han pasado:{" "}
              <strong>
                {timePassed.d}d {timePassed.h}h {timePassed.m}m {timePassed.s}s
              </strong>{" "}
              desde que comenzó nuestra historia de amor.
            </p>
            <p>
              ❤️ Ya faltan solo:{" "}
              <strong>
                {timeLeft.d}d {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s
              </strong>{" "}
              para hacerlo realidad, mi princesita guerrera.
            </p>
          </div>
          <p>
            Y así comenzará lo nuestro, con ternura, pasión y entrega.{" "}
            <strong>
              <br />
              Maite zaitut per sempre 💕
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}
