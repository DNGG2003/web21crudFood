import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-3 mainSection cabin-sketch-regular">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg"
              alt="pizza"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fs-2">Pizza Margarita Clásica</Card.Title>
              <hr />
              <Card.Text className="fs-5">
                Nuestra pizza margarita artesanal hecha con masa madre, salsa de
                tomate casera, queso mozzarella de búfala premium y hojas
                frescas de albahaca. Horneada en horno de piedra para obtener
                ese crujiente perfecto.
                <br />
                <br />
                <span className="fw-semibold ">Categoria:</span> comida
                <br className="mb-3" />
                <span className="fw-semibold ">Precio: $4500</span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
