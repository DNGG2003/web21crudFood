import { Card, Button, Row, Col, Form } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Card className=" shadow p-3 mb-5 bg-body rounded card-login">
        <Row xs={1} md={2}>
          <Col>
            <Card.Body>
              <h1 className="text-center mb-4">Iniciar sesion</h1>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ej: juanperez@mail.com"
                  />
                  <Form.Text className="text-danger">
                    mensaje console.error;
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa una contraseña"
                  />
                  <Form.Text className="text-danger">mensaje error</Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
            </Card.Body>
          </Col>
          <Col>
            <img
              src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg"
              alt="Imagen comida"
              className="img-login rounded-3 w-100"
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Login;
