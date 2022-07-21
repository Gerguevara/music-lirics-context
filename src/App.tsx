import Letras from "./Components/Letras";
import { LetrasProvider } from "./context/LetrasProvider";

function App() {
  return (
    <>
      <LetrasProvider>
        <Letras/>
      </LetrasProvider>
    </>
  );
}

export default App;
