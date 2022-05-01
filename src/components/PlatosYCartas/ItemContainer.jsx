import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export const ItemContainer = (props) => {
  return (
  <ReactBootStrap.ListGroup.Item>
    {props.nombre}
  </ReactBootStrap.ListGroup.Item>
  )
}
