import { Button, Table } from "react-bootstrap";
import { Link } from "react-router";
import ItemProducto from "./Producto/ItemProducto";

const Administrador = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-between aling-items-center mt-5">
        <h1 className="display-4">Productos disponibles </h1>
        <div>
          <Link className="btn btn-primary me-2" to="/administrador/crear">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button variant="info" className="text-light">
            <i className="bi bi-database-fill-up"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover variant="dark">
        <thead className="text-center">
          <th>#</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </thead>
        <tbody>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
