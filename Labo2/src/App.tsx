import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<boolean>(false);

  const incrementar = () => {
    if (count < 50) setCount(count + 5);
  };

  return (
    <>

      <div>
        <h3>Contador de límites</h3>
        <p style={{ fontSize: "20px" }}>Valor: {count} </p>
        <button onClick={incrementar}>Incrementar</button>
        <button disabled={count <= 0} onClick={() => setCount(count - 5)}>
          {count <= 0 ? "Bloqueado" : "Decrementar"}
        </button>

        <p style={count < 50 ? { color: "blue" } : { color: "red" }}>
          {count < 50 ? "No llegó al límite" : "Llegó al límite"}
        </p>
      </div>
      <div
        style={
          !color
            ? { backgroundColor: "#fff", color: "#111", padding: "10px", marginTop: "20px" }
            : { backgroundColor: "#111", color: "#fff", padding: "10px", marginTop: "20px" }
        }
      >
        <h3>{!color ? "Modo claro" : "Modo oscuro"}</h3>
        <p>Este bloque cambia sus estilos usando un booleano en el estado</p>
        <button onClick={() => setColor(!color)}>
          Cambiar a {color ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>
    </>
  );
}

export default App;
