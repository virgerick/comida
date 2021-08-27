import React, { ReactElement, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {}

export default function NavBar({}: Props): ReactElement {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="sticky-top" >
        <Container>
          <Navbar.Brand onClick={handleShow}>
            <FaBars style={{ cursor: "pointer" }} />
          </Navbar.Brand>
          <Navbar.Brand href="/">Comidas</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/platos" className="nav-link">Platos</Link>
              <Link to="/category" className="nav-link">Categorias</Link>
              {/* <Nav.Link href="/platos">Platos</Nav.Link>
              <Nav.Link href="/category">Categorias</Nav.Link>
              <Nav.Link href="/roles">Roles</Nav.Link> */}
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Offcanvas show={show} onHide={handleClose} backdrop={false} placement="start" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >Comida</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        </Offcanvas.Body>
      </Offcanvas>
      </Navbar>
      
    
  );
}
