import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function DisplayUser() {
  const { name, email, phone } = useSelector((state) => state);

  return (
    <div>


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Boba-Fett.png" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h2>Dados Salvos</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Telefone:</strong> {phone}</p>
          </Card.Text>
          <Button variant="primary">Editar</Button>
        </Card.Body>
      </Card>
    </div>


  );
}

export default DisplayUser;
