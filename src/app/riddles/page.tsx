import Link from "next/link";

export default function RiddlesHome() {
  return (
    <div className="riddle-page">
      <div className="riddle-card">
        <h2 className="riddle-title">
          💖 Bienvenida a nuestro camino hacia nuestra primera cita 💖
        </h2>
        <p className="riddle-question">
          Veamos cómo superas cada acertijo. Yo sé que tú puedes, princesa ✨
        </p>

        <Link href="/riddles/1">
          <button className="riddle-button">Comenzar</button>
        </Link>
      </div>
    </div>
  );
}
