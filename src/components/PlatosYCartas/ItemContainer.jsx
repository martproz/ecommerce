import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export const ItemContainer = ({nombre}) => { //desestructuración: en vez de (props) y después (props.nombre)

  return (
  <ReactBootStrap.ListGroup.Item>
    {nombre}
  </ReactBootStrap.ListGroup.Item>
  )
}
