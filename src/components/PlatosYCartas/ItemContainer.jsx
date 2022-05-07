import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export const ItemContainer = ({nombre}) => { 

  return (
  <ReactBootStrap.ListGroup.Item>
    {nombre}
  </ReactBootStrap.ListGroup.Item>
  )
}
