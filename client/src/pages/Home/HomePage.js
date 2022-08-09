import {Container, Row, Col } from 'react-bootstrap';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import {useAuth0} from '@auth0/auth0-react';
import Loading  from "../../components/log/Loading";
import  CompoHomePage from "../../components/CompoHome/CompoHomePage";
import  Hero from "../../views/hero";
import  HomeContent from "../../views/home-content";
import Image from 'react-bootstrap/Image';
import Image1 from '../../image/cordoba.jpg'
import { NavbarPie } from '../../components/NavbarDemo/NavbarPie';

export function HomePage() {
  const { isAuthenticated, isLoading } = useAuth0();
   
  if (isLoading) {
    return <Loading/>
  }



  return (
    <div>    
    <br/><br/>
      <NavbarDemo/>

      {isAuthenticated ?  <CompoHomePage/>: 
        null}
          <Hero/>
          <HomeContent/>
          <br/>

      <footer> 
        <NavbarPie/>
      </footer>
    </div>
  )
}

