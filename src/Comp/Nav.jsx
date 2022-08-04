import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.png"
import "./Comp.css"

function BasicExample() {
  return (<>
    <Navbar expand="lg" className='head' style={{position:"absolute"}} >
    <img src={logo} width="12%" />

      <Container fluid="xxl">
        {/* <Navbar.Brand href="/">
          <img src={logo} height="100px" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default BasicExample;