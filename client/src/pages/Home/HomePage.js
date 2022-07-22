import {Container, Row, Col } from 'react-bootstrap';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import {useAuth0} from '@auth0/auth0-react';
import { CompoHomePage} from "../../components/CompoHome/CompoHomePage";
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

      {isAuthenticated ? <CompoHomePage/> : 
        <div> Por favor loguearse</div>}

        <Container>
          <Row className="px-4 my-5">
            <Col sm={6}>   
              <Image 
                src={Image1}
                responsive 
                fluid
                rounded />         
            </Col>
              <Col sm={5}>
              <h1 className="font-weigh-light">InmoProf</h1>
              <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipiscing 
                elit senectus, tempor massa mattis tristique orci cras 
                lectus penatibus, sed aliquam id per eleifend interdum 
                dapibus. Commodo convallis nullam per diam, mi etiam nisl. 
              </p>  
            </Col>
          </Row>
          </Container>
      <footer className='py-4 my-4 bg-dark'>
        <Container >
          <Row>
             <Col sm={3}></Col>             
             <Col sm={4}><p className='text-white'>Copyright &copy; Your website 2022</p></Col>
             <Col sm={3}></Col>
             <Col sm={2}><div className='text-white'>informacion:</div></Col>
          </Row>
          <Row> 
             <Col sm={3}></Col> 
             <Col sm={7}><div className='text-white'>CaPI Argentina</div></Col>
             <Col sm={2}><div className='text-white'>info.capicba@gmail.com</div></Col>
          </Row>        
        </Container>
      </footer>
    </div>
  )
}

