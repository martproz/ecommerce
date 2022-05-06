import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export const Contador = () => {

   const [contador, setContador] = useState(0)

  //  useEffect(()=> {console.log('Algun estado se modifico')}) //useEffect para cambio global
  //  useEffect(() => {console.log('Carga inicial de componentes')}, [] ) //useEffect para el evento onMount
  //  useEffect(() => {console.log(contador)},[contador]) //se modifican los datos sólo cuando cambie el contador
  //  useEffect(()=> {console.log(`Valor contador 1 = ${contador} valor contador 2 = ${contadorNuevo}`)}, [contador, setContadorNuevo] )

  return (
    <div>Contador
      <p>{contador}</p>
      <ReactBootStrap.Button onClick={() => {setContador (contador + 1)}} variant="primary">Incrementar</ReactBootStrap.Button>{' '}
      <ReactBootStrap.Button onClick={() => {setContador (contador - 1)}} variant="danger">Disminuir</ReactBootStrap.Button>{' '}
   </div>
  )
} 

export default Contador;
