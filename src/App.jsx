import React, { useState } from "react";
import "./App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateCompatibility = () => {
    if (name1.trim() === "" || name2.trim() === "") {
      setError("Por favor, ingresa los nombres de ambas personas.");
      window.alert(error);
      setResult(null);
    } else {
      const compatibility = Math.floor(Math.random() * 101);
      setResult(compatibility);
      setError("");
    }
  };

  return (
    <div className="App">
      <h1>Calculadora del Amor 💟</h1>
      <div className="form">
        <input
          className="text-input"
          type="text"
          placeholder="Nombre de la persona 1"
          value={name1}
          required
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Nombre de la persona 2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          required
        />
        <button className="btn" onClick={calculateCompatibility}>Calcular</button>

        {result !== null && !error && ( result < 30 ? (<p>Porcentaje de compatibilidad: {result}% 😞 No hay amor 💔</p>) : result >= 30 && result < 70 ? (<p>Porcentaje de compatibilidad: {result}% 🥰 Hay amor 💖</p>) : <p>Porcentaje de compatibilidad: {result}% 👩‍❤️‍👨💞 Son almas gemelas ❤️</p>)}
        
      </div>
      
    </div>
  );
}

export default App;
