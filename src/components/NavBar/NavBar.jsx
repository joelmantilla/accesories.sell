
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">JAMS-ACCESORIES</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Tablets</Nav.Link>
      <Nav.Link href="#pricing">Celulares</Nav.Link>
      <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Fundas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Auriculares</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cargadores</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>

      <Nav.Link eventKey={2} href="#memes">
          
      <img className='w-25' src='https://i.pinimg.com/474x/f5/bd/cb/f5bdcb14bb2affdc58660f43281daadd.jpg' alt="esto es un icono" />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



  )
}



export default NavBar