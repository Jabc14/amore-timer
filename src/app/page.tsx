import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f4f8",
        padding: "2rem",
      }}
    >
      <h1
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        {`Per l'amore della vita mia 💖`}
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Cada paso te acercará más a nuestro primer encuentro ✨
      </p>
      <Link href="/riddles">
        <button
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            background: "#4f46e5",
            color: "#fff",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Comenzar
        </button>
      </Link>
    </div>
  );
}
