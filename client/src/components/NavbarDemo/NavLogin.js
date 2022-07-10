import {Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {LogoutButton} from '../log/LogoutButton';

export function NavLogin() {
  const { user } = useAuth0();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">        
        <Container>   
          <Navbar.Brand href="/">InmoProf</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                <Row> 
                  <Col sm={4}>            
                    <Link to="/new">NuevoPost</Link>
                  </Col>
                  <Col sm={4}>
                    <Link to="/users">Usuario</Link>
                    </Col>
                  <Col sm={4}>
                <Link to="/users/new">NuevoUser</Link>
                </Col>
                </Row>
              </Nav>              
              <Nav>              
                <Navbar.Text>
                  log: {user.name} 
                </Navbar.Text>
                <Navbar.Text>
                  <LogoutButton/>
                </Navbar.Text>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

