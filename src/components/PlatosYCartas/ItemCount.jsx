import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      Contador
      <p>{contador}</p>
      <ReactBootStrap.Button
        onClick={() => {
          setContador(contador + 1);
        }}
        variant="primary"
      >
        Incrementar
      </ReactBootStrap.Button>{" "}
      <ReactBootStrap.Button
        onClick={() => {
          setContador(contador - 1);
        }}
        variant="danger"
      >
        Disminuir
      </ReactBootStrap.Button>{" "}
    </div>
  );
};

export default Contador;
