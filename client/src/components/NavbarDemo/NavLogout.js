import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LoginButton} from '../log/LoginButton';

export function NavLogout() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">        
        <Container>   
          <Navbar.Brand href="/">InmoProf</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
              </Nav>
           </Navbar.Collapse>
        </Container>
            <Nav.Link eventKey={2} href="#Logout">
            <LoginButton/> 
            </Nav.Link>
       </Navbar>
    </div>
  )
}

