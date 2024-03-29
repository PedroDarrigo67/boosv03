import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Rosario from "../imagenes/rosario.png";
import Cordoba from "../imagenes/cordoba.png";
import Buenos from "../imagenes/buenosaires.png";
import SanLuis from "../imagenes/sanluis.png";
import Comodoro from "../imagenes/comodoro.png";
import Mendoza from "../imagenes/mendoza.png";
import logo from "../image/inmoprofTransp.png"

import "./image.css"

const Hero = () => (
  <div className="text-center hero">
    <Container>
     <br/><br/>     
         <Row>
           <Col s={11}>
               <Row>
                  <Col sm={3}><Image style={{ width: '6rem' }} src={logo} rounded /></Col> 
                  <Col sm={8}><h3 className="text-bold">Bienvenido al portal 
                     colaborativo más importante de la región!</h3></Col>
               </Row>
               <br/>
               <Row>
                  <p className="text-center text-body">
                     En este portal podrás encontrar las propiedades que tus clientes 
                     te están solicitando, o encontrarle el cliente a tus propiedades 
                     colaborando con otros profesionales, sabiendo de antemano que el 
                     colega con el que te contactes tiene la voluntad de compartir 
                     honorarios! así entre todos vamos a aumentar las probabilidades de cierre!.
                  </p>
               </Row>
            </Col> 
            <Col s={2}>
               <Row> 
                  <Col sm={3} className="rotate">
                     <Image style={{ width: '8rem' }} src={Cordoba} rounded />
                  </Col>
                  <Col sm={3} className="rotate1">
                     <Image style={{ width: '8rem' }} src={Rosario} rounded />
                  </Col>
                  <Col sm={3}>
                     <Image style={{ width: '8rem' }} src={Buenos} rounded />
                  </Col> 
               </Row>
               <Row> 
                 <Col sm={3} className="rotate1">
                    <Image style={{ width: '8rem' }} src={Mendoza} rounded />
                 </Col>
                 <Col sm={3} >
                    <Image style={{ width: '8rem' }} src={SanLuis} rounded />
                 </Col>
                 <Col sm={3} className="rotate2">
                    <Image style={{ width: '8rem' }} src={Comodoro} rounded />
                 </Col>
              </Row>            
           </Col> 
         </Row>         
    </Container>
  </div>
);

export default Hero;
