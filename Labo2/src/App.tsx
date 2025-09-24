import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);

  const incrementar = () => {
    if (count < 50) {
      setCount(count + 5);
    }
  };

  return (
    <div>
      <h3>Contador de limites</h3>
      <p style={{ fontSize: "20px" }}>Valor: {count} </p>
      <button onClick={incrementar}>Incrementar</button>
      <button disabled={count <= 0} onClick={() => setCount(count - 5)}>
        {count <= 0 ? "Bloqueado" : "Decrementar"}
      </button>
      <p style={count < 50 ? { color: "blue" } : { color: "red" }}>
        {count < 50 ? "No llegó al límite" : "Llegó al límite"}
      </p>
    </div>
  );
}

export default App
