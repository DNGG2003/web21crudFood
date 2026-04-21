import { Button, Table } from "react-bootstrap";
import { Link } from "react-router";
import ItemProducto from "./Producto/ItemProducto";
import productosPrueba from "../../data/productosPrueba";
import { listarProductos } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Administrador = ({ setProductos, productos }) => {
  const cargarProductosPrueba = () => {
    setProductos(productosPrueba);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    // Solicitamos los datos del backend que en este caso es el db.json
    const respuesta = await listarProductos();
    // Verificamos que los datos lleguen correctamente, nos damos cuenta en el postman
    if (respuesta.status === 200) {
      // Metodo json() para extraer los datos de la respuesta del body
      const datos = await respuesta.json();
      //Cargo los productos en el state, que en este caso es setProductos
      setProductos(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "No se pudo obtener los productos, intentelo nuevamente",
        icon: "error",
      });
    }
  };

  return (
    <section className="container">
      <div className="d-flex justify-content-between aling-items-center mt-5">
        <h1 className="display-4">Productos disponibles </h1>
        <div>
          <Link className="btn btn-primary me-2" to="/crear">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button
            variant="info"
            className="text-light"
            onClick={cargarProductosPrueba}
          >
            <i className="bi bi-database-fill-up"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover variant="dark">
        <thead className="text-center">
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((itemProducto) => (
            <ItemProducto
              itemProducto={itemProducto}
              key={itemProducto.id}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
