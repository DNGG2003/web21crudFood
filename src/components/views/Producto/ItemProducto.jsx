import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemProducto = () => {
  return (
    <tr>
      <td className="text-center">Fila</td>
      <td>Nombre</td>
      <td className="text-end">$Precio</td>
      <td className="text-center">
        <img src="img" className="img-thumbnail" alt="desc"></img>
      </td>
      <td>Categoria</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={`/administrador/editar/`}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
