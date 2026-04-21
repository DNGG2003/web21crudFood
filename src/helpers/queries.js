const productosBackend = import.meta.env.VITE_API_PRODUCTOS;

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(productosBackend);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
  // El try catch maneja el error en el caso de que tengamos algun error en la respuesta pedida
};

export const crearProducto = async (producto) => {
  // Por si falla, utilizamos el try catch
  try {
    console.log(producto);
    const respuesta = await fetch(productosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
  /*A la hora de hacer una solicitud POST, vamos a utilizar una funcion async, ya que no sabemos cuanto tiempo va a demorar esa respuesta. Por otro lado ya que estamos utilizando una solicitud POST vamos a tener dos parametros, el primer parametro es el objeto donde estamos haciendo la solicitud, que es el endpoint PRODUCTOSBACKEND que es donde esta guardado los datos y el segundo parametro va a estar compuesto por el method que utilizamos para la solicitud, el headers donde aclaramos que va a ser un producto de formato json y el BODY decimos que el producto va a ir en formato json */
};
