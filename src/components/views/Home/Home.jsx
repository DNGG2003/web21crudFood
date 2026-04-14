import { Container, Form, Row } from "react-bootstrap";
import CardProducto from "../Producto/CardProducto";

const Home = () => {
  return (
    <>
      <img
        className="banner shadow-lg rounded-3"
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5 cabin-sketch-regular">
        <h1 className="display-4 cabin-sketch-bold">Nuestros Productos</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Buscar un producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del producto"
            />
          </Form.Group>
        </Form>
        <Row>
          <CardProducto></CardProducto>
          {/* <p>No hay productos disponibles</p> */}
        </Row>
      </Container>
    </>
  );
};

export default Home;
