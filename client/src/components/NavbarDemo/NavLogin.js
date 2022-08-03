import {Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import {LogoutButton} from '../log/LogoutButton';
import {NavLink} from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import MainNav from "./main-nav";
import "./Navbar.css";

// expand="lg" variant="light" classname="colot-nav" fixed="top"

export function NavLogin() {
  const { user } = useAuth0();
  return (
    <div>
      <Navbar variant="light" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">          
            <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="router-link-exact-active"
                text-color="white"
              ><BsHouseFill/> InmoProf</NavLink>
          </Navbar.Brand> 
          <Nav className="me-auto">
            <MainNav />          
        </Nav>

        <Navbar.Text className="text-muted">
                  usuario: {user.name} 
                </Navbar.Text>
                <Navbar.Text>
                  <LogoutButton/>
                </Navbar.Text>
      </Container>
      </Navbar>
    </div>
  )
}

