import { useState, createContext } from "react";
import axios from "axios";
import { Props } from "../interfaces/contextInterface";

const LetrasContext = createContext({});

const LetrasProvider = ({ children }: Props ) => {

  const [alerta, setAlerta] = useState<string>('');
  const [letra, setLetra] = useState<string>('');
  const [cargando, setCargando] = useState<boolean>(false);

  const busquedaLetra = async (busqueda: any) => {

    setCargando(true);

    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios(url);
      setLetra(data.lyrics);
      setAlerta('')
    } catch (error) {
      setAlerta("Canción No Encontrada");
    }
    setCargando(false);
  };

  return (
    <LetrasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando,
      }}
    >
      {children}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };
export default LetrasContext;
