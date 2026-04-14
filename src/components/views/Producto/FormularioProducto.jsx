import React from "react";
import { Form, Button } from "react-bootstrap";

const FormularioProducto = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Titulo Form</h1>
      <hr />
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Pizza" />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 5000"
            // step={0.1}
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/pizza/"
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Acompañamientos">Acompañamientos</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Ensaladas">Ensaladas</option>
            <option value="Hamburguesas">Hamburguesas</option>
            <option value="Postres">Postres</option>
            <option value="Pizzas">Pizzas</option>
            <option value="Sándwiches y Wraps">Sándwiches y Wraps</option>
            <option value="Veggie/Veganas">Veggie/Veganas</option>
          </Form.Select>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza tradicional con salsa de tomate, mozzarella y albahaca."
            as="textarea"
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Nuestra pizza margarita artesanal hecha con masa madre, salsa de tomate casera, queso mozzarella de búfala premium y hojas frescas de albahaca. Horneada en horno de piedra para obtener ese crujiente perfecto."
            as="textarea"
            rows={4}
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        export default FormularioProducto
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
