import { useState } from "react";
import Letras from "./Components/Letras";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Letras></Letras>
    </>
  );
}

export default App;
