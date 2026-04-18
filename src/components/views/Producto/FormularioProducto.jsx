import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState = { errors },
  } = useForm();

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Titulo Form</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit()}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del producto debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre del producto debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 5000"
            // step={0.1}
            {...register("precio", {
              required: "El precio del producto debe ser un dato obligatorio",
              min: {
                value: 100,
                message: "El precio minimo del producto debe ser al menos $100",
              },
              max: {
                value: 100000,
                message: "El precio minimo del producto debe ser $100000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/pizza/"
            {...register("imagen", {
              required: "La URL de la imagen es un dato obligatorio",
              pattern: {
                value: /^https?:\/\/[^\s]+\.(png|jpg|jpeg|gif|bmp|webp|svg)$/,
                message:
                  "La imagen debe ser un url de imagen valida terminada en (png|jpg|jpeg|gif|bmp|webp|svg)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
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
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza tradicional con salsa de tomate, mozzarella y albahaca."
            as="textarea"
            {...register("descripcionBreve", {
              required: "La descripcion breve es un dato obligatorio",
              minLength: {
                value: 5,
                message: "La descripcion debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "La descripcion breve debe tener como maximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Nuestra pizza margarita artesanal hecha con masa madre, salsa de tomate casera, queso mozzarella de búfala premium y hojas frescas de albahaca. Horneada en horno de piedra para obtener ese crujiente perfecto."
            as="textarea"
            rows={4}
            {...register("descripcionAmplia", {
              required: "La descripcion amplia es un dato obligatorio ",
              minLength: {
                value: 10,
                message: "La descripcion debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message: "La descripcion debe tener como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
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
