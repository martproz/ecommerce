import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CartWidget } from "./CartWidget";

function NavBar() {
  return (
    <div>
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            La Cocina de Antoniet
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#home">
                Inicio
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#link">
                Link
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Comidas"
                id="basic-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Entradas
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Platos principales
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Postres
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  Bebidas
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
          <CartWidget />
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default NavBar;
