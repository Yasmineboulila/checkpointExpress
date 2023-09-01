import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Home() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home page</Nav.Link>
            <Nav.Link href="/serices">Our serices</Nav.Link>
            <Nav.Link href="/contact"> Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Home;