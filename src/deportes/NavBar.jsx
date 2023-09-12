import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link,Outlet} from 'react-router-dom'

export const NavbarComp = () => {
  return (
    <>
    <Navbar bg="dark" variant={"dark"}  expand="lg" >
    <Container>
      <Navbar.Brand href="#home">TUSPORTS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as = {Link} to={'/creadoras'}>CREADORAS</Nav.Link>
          <Nav.Link href="#pricing">REGISTRATE</Nav.Link>
          <NavDropdown title="DEPORTES" id="collapsible-nav-dropdown">
            <NavDropdown.Item as = {Link} to={'/basketball'}>BASKETBALL</NavDropdown.Item>
            <NavDropdown.Item as = {Link} to={'/natacion'}>
              NATACION
            </NavDropdown.Item>
            <NavDropdown.Item as = {Link} to={'/gimnasia'}>GIMNASIA</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as = {Link} to={'/atletismo'}>
              ATLETISMO
            </NavDropdown.Item>
            <NavDropdown.Item as = {Link} to={'/ciclismo'}>
              CICLISMO
            </NavDropdown.Item>
         
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as = {Link} to={'/contactenos'}>CONTACTENOS</Nav.Link>
          <Nav.Link as = {Link} to={'/quien'}>
           QUIENES SOMOS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <section>
        <Outlet>
  
        </Outlet>

      </section>
  </>
  );
}

export default NavbarComp;

