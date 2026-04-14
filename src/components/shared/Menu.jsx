import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router";

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="fs-2">
            Crud Food
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={"/"} className={"nav-link"}>
                HOME
              </NavLink>
              <NavLink to={"/login"} className={"nav-link"}>
                LOGIN
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
