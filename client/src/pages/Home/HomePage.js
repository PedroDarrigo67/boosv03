import {Container, Row, Col } from 'react-bootstrap';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import {useAuth0} from '@auth0/auth0-react';
import { CompoHomePage} from "../../components/CompoHome/CompoHomePage";
import  Hero from "../../views/hero";
import  HomeContent from "../../views/home-content";
import Image from 'react-bootstrap/Image';
import Image1 from '../../image/cordoba.jpg'

export function HomePage() {
   const { isAuthenticated, isLoading } = useAuth0();
   
  if (isLoading) {
    return <h1>Is Loading</h1>
  }



  return (
    <div>    
      <NavbarDemo/>

      {isAuthenticated ?  <CompoHomePage/>: 
        null}
          <Hero/>
          <HomeContent/>
          <br/>

      <footer 
        style={{ 
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "black"
        }}>
        <Container className='px-1'>
          <p className='text-center text-white'>
            Copyright &copy; Your website 2022 - By: Inmoprof
          </p>
        </Container>
      </footer>
    </div>
  )
}

