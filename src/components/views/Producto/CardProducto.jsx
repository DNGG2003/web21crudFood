import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";

const CardProducto = () => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg"
            alt="pizza"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title>Pizza Margarita Clásica</Card.Title>
          <Card.Text>
            Pizza tradicional con salsa de tomate, mozzarella y albahaca.
            <br className="mb-2" />
            <span className="fw-bold">Precio: $4500</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Link className="me-2 btn btn-success" to={"/detalle/"}>
            Ver más
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
