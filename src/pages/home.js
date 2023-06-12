import React from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return (
        <Container>
            <h3>Home - Aula 2 Descomplica</h3>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="https://startdev.net/assets/img/blog/b3.jpg" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://startdev.net/assets/img/blog/b3.jpg" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://startdev.net/assets/img/blog/b3.jpg" thumbnail />
                </Col>
            </Row>
        </Container>
    );
}