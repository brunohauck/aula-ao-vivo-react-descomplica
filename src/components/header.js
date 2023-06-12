import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header({ title }) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <h3>Header Component</h3>
                    <p>{title}</p>
                    <p>Faculdade - Descomplica</p>
                </Container>
            </Navbar>
        </>
    );
}

