"use client";

export default function Page() {
  const consejosSerios = [
    "En un velorio, intenta abrirle los ojos al fallecido para comprobar si no se está haciendo el dormido.",
    "En una entrevista de trabajo, pregunta cuánto tardan en despedir gente.",
    "En una boda, pregunta en voz alta cuánto durará el matrimonio.",
    "En un hospital, di ‘aquí huele a muerte’ apenas entres.",
    "En una cena familiar, menciona temas políticos solo para ver el caos.",
    "En un examen, suspira fuerte cada 10 segundos para poner nerviosos a los demás.",
    "En un ascensor lleno, pregunta si alguien también escuchó ese ruido extraño.",
    "En una primera cita, habla únicamente de tu ex.",
  ];

  const consejoSerioAleatorio =
    consejosSerios[Math.floor(Math.random() * consejosSerios.length)];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #111, #2a1a1a)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#2a1a1a",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            marginBottom: "20px",
            color: "#ff944d",
          }}
        >
          Cosas que deberías hacer en situaciones serias
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          {consejoSerioAleatorio}
        </p>

        <button
          onClick={() => window.location.reload()}
          style={{
            background: "#ff944d",
            border: "none",
            padding: "15px 25px",
            borderRadius: "12px",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Otro consejo terrible
        </button>
      </div>
    </main>
  );
}
