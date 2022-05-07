import { ItemListContainer } from "components/PlatosYCartas/ItemListContainer";
import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import milanesa from "./imagenes/milanesa.jpeg";
import Contador from "./components/PlatosYCartas/Contador";
import { getFakeApiCarta } from "./utils/ItemList";

function App() {
  const [carta, setCarta] = useState([]);

  const [cargando, setCargando] = useState(false);

  const actualizarCarta = async () => {
    visibilidadCargador(true);
    const cartaDesdeApi = await getFakeApiCarta();
    setCarta([...carta, ...cartaDesdeApi]);
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

  useEffect(() => {
    actualizarCarta();
  }, []);

  return (
    <div>
      <NavBar />
      <div id="cargador">Cargando...</div>
      <ItemListContainer carta={carta} postres={carta} />
      <Contador />
    </div>
  );
}

export default App;
