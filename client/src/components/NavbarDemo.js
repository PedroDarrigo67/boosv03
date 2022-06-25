import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import {LoginButton} from './LoginButton';
import {LogoutButton} from './LogoutButton';

const StyledLink = styled(Link)`
  color: ${({ inverted }) => (inverted ? "white" : "chartreuse")};
`


export function NavbarDemo() {
  
  
    const {isAuthenticated} = useAuth0();
  
      
  
  return (
    <div>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>   
        <Navbar.Brand href="/">InmoProf</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/new">Edicion</Link>
           
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>






          
      </Container>
    </Navbar>
  </div>
  )
}

