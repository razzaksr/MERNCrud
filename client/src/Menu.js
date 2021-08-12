import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Menu=()=>{
    return(
        <>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#">My MERN Stack App</Navbar.Brand>
                    <Navbar.Toggle aria-control="items"></Navbar.Toggle>
                    <Navbar.Collapse id="items">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="me-3 text-dark btn btn-outline-info">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/new" className="me-3 text-dark btn btn-outline-info">
                                NewExpert
                            </Nav.Link>
                            <Nav.Link href="/edit" className="me-3 text-dark btn btn-outline-info">
                                EditExpert
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;