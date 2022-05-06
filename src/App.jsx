import { ItemListContainer } from "components/PlatosYCartas/ItemListContainer";
import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import milanesa from "./imagenes/milanesa.jpeg";
import Contador from './components/PlatosYCartas/Contador';
import { getFakeApiCarta } from "./utils/ItemList";

function App() {
  const [carta, setCarta] = useState([]); //1) 

  const [cargando, setCargando] = useState(false);

  const actualizarCarta = async () => { //2) vamos a mock api (servidor)
    visibilidadCargador(true);//4)
    const cartaDesdeApi = await getFakeApiCarta(); //para el código hasta que la promesa se ejecute (2s) y devuelva un valor
    setCarta([...carta, ...cartaDesdeApi]);//dsps de esos 2s , la lista de platos se almacena en el estado carta
    visibilidadCargador(false);
  };

  const visibilidadCargador = (esVisible) => {
    const cargador = document.getElementById("cargador");
    if (esVisible) {
      cargador.style.visibility = "visible";
    } else {
      cargador.style.visibility = "hidden";
    }
  };

  useEffect(() => { //5) ejecuta la carta de la api una sola vez, cuando se carga el componente
    actualizarCarta();
  }, []);

  return (
    <div>
      <NavBar />
      <div id="cargador">Cargando...</div>
      <ItemListContainer carta={carta} postres={carta} />
      {/*6 A través del parámetro carta, enviamos la lista de platos al componente ItemListContainer*/}
      <Contador />
    </div>
  );
}

export default App;
