import React from 'react'
import { ItemContainer } from './ItemContainer'
import '../PlatosYCartas/PlatosYCartas.css'
import * as ReactBootStrap from 'react-bootstrap';

export const ItemListContainer = (props) => {
  return (
    <ReactBootStrap.Container>
      <ReactBootStrap.Row>
        <ReactBootStrap.Col>
          <h2>Carta de platos</h2>
          <ReactBootStrap.ListGroup>
            {props.carta.map((plato) => (
              <ItemContainer nombre={plato.nombre} />
            ))}
          </ReactBootStrap.ListGroup>
        </ReactBootStrap.Col>
      </ReactBootStrap.Row>
    </ReactBootStrap.Container>
  );
};
