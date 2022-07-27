import React from "react";
import image1  from "../imagenes/post1.png";
import image2  from "../imagenes/post2.png";
import image3  from "../imagenes/post3.png";
import { Row, Container, Col } from "react-bootstrap";


const HomeContent = () => (
  <div className="next-steps">
    <Container>

    <h3 >    Algunas de nuestras publicaciones!.......................       </h3>
    
      <Row>
        <Col sm={1}></Col>
        <Col sm={3}> <img src={image1} alt="post1" className="shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '14rem' }}/> 
        </Col> 
        <Col sm={3}> <img src={image2} alt="post2" className="shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '14rem' }}/>
         </Col> 
         <Col sm={3}> <img src={image3} alt="post3" className="shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '12rem' }}/>
         </Col>  
      </Row>   
    </Container>   
  </div>
  
);

export default HomeContent;
