"use client";

export default function Page() {
  const consejos = [
    "Llega 2 minutos tarde para que todos crean que eres importante.",
    "Di ‘tranquilo’ cuando alguien claramente no está tranquilo.",
    "Come papas fritas frente a alguien sin ofrecerle.",
    "Mira series y suelta spoilers diciendo: ‘uy perdón’.",
    "Escribe ‘ok.’ con punto final para generar tensión innecesaria.",
    "Cuando alguien pregunte la hora, responde: ‘hora de comprarte un reloj’.",
    "Usa el último pedazo de papel higiénico y no lo reemplaces.",
    "Deja el microondas en 1 segundo para que el siguiente lo escuche.",
    "Haz preguntas en clase justo cuando el profesor va a terminar.",
    "Di ‘yo lo hubiera hecho mejor’ sin explicar cómo.",
  ];

  const consejoAleatorio =
    consejos[Math.floor(Math.random() * consejos.length)];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f0f0f, #1e1e1e)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#222",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "600px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            color: "#ff4d4d",
          }}
        >
          Generador de Consejos para Ser Mala Persona 😈
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          {consejoAleatorio}
        </p>

        <button
          onClick={() => window.location.reload()}
          style={{
            background: "#ff4d4d",
            border: "none",
            padding: "15px 25px",
            borderRadius: "12px",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#ff1a1a";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#ff4d4d";
          }}
        >
          Dame otro consejo maligno
        </button>
      </div>
    </main>
  );
}
