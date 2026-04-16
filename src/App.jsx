import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Home from "./components/views/Home/Home";
import DetalleProducto from "./components/views/Producto/DetalleProducto";
import Login from "./components/views/Login";
import Administrador from "./components/views/Administrador";
import FormularioProducto from "./components/views/Producto/FormularioProducto";
import Error404 from "./components/views/Error404";
import { useEffect, useState } from "react";

const App = () => {
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false; //Con esta linea de codigo guardamos la informacion en el sesionStorage
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);
  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <main>
          <Routes>
            {/* El path es la ubicacion */}
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/detalle"
              element={<DetalleProducto></DetalleProducto>}
            />
            <Route
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
            />
            <Route
              path="/administrador"
              element={<Administrador></Administrador>}
            />
            <Route
              path="/crear"
              element={<FormularioProducto></FormularioProducto>}
            />
            {/* Utilizamos el id porque en este caso vamos a estar reutilizando el FormularioProducto, pero la diferencia va a ser que este formulario ya va a venir cargado con datos */}
            <Route
              path="/editar/:id"
              element={<FormularioProducto></FormularioProducto>}
            />
            <Route path="*" element={<Error404></Error404>} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
