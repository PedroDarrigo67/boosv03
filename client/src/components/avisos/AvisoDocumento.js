import { NavbarDemo } from "../NavbarDemo/NavbarDemo";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function AvisoDocumento() {
  return (
    <div>
      <NavbarDemo/>
      <br/><br/><br/>
      <Container>
        <Row></Row>
        <Row>  
        <Card style={{ width: '73rem', height: '30rem' }} className="px:3" border="primary">
        
        <Row>
        
          <Col sm={1}></Col>
          <Col sm={10}>
          <Row>
          
              <Card.Title>Informacion necesaria para aprobar una nueva publicacion</Card.Title>
              <Card.Text>
                <Col sm={1}></Col>
                <Col sm={11}>
                    <Row>
                      Para cada nueva publicacion, usted debera seguir los siguientes pasos.
                    </Row>
                    <Row>  

                      <Col sm={1}></Col>
                      <Col sm={8}>
                        <Row>1 - enviar: </Row>
                        <Row>
                          <Col sm={1}></Col>
                            <Col sm={8}>  
                              - Documento 1.
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={1}></Col>
                            <Col sm={8}>  
                              - Documento 2.
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={1}></Col>
                            <Col sm={8}>  
                              - Documento 3.
                          </Col>
                        </Row>


                    



                      </Col>
                      </Row>  
                      <Row>a la direccion de correo "......@...".</Row> 
                      <Row>2 - Adjuntar en el mail, "Nombre de la publicacion".</Row> 
                      <Row>3 - Usted recibira, despues del analisis del administrador, si se procede a publicar.</Row>
                      <Row>4 - Se le informara tambien el codigo de publicacion. </Row>                    
                    </Col>
              </Card.Text>
            
          </Row>
          </Col>
          </Row>  
          </Card>
          </Row>
      </Container>
      

    </div>
  )
}

