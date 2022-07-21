import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Formulario from "./Formulario";
import Letra from "./Letra";

const Letras = () => {
  const { alerta, letra, cargando } = useLetras();

  return (
    <>
      <header>Lyrics Finders</header>

      <Formulario />

      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra/>
        ) : cargando ? (
          'Loading'
        ) : (
          <p className="text-center">Let's find your lyrics here</p>
        )}
      </main>
    </>
  );
};

export default Letras;
