import { NavbarDemo } from "../NavbarDemo/NavbarDemo";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function AvisoDocumento() {
  return (
    <div>
      <NavbarDemo/>
      <br/><br/><br/><br/>
      <Container>
        <Row></Row>
        <Row>  
        <Card style={{ width: '73rem', height: '80rem' }} className="px:3" border="primary">
        
        <Row>
        
          <Col sm={1}></Col>
          <Col sm={10}>
          <Row>
          
              <Card.Title>Informacion necesaria para aprobar una nueva publicacion</Card.Title>
              <Card.Text>
                <Col sm={1}></Col>
                <Col sm={12}>
                      <Row>
                        Con este conjunto de normas pretendemos garantizar a los clientes de INMOPROF  
                        unos niveles de profesionalidad y calidad acordes y adecuados a los especialistas 
                        formales que cada uno de ellos a depositado en nuestra platafotma agencia.
                      </Row>
                    <Row> 
                      <Col sm={1}></Col>
                      <Col sm={10}>
                        <Row>1.	Secreto profesional y confidencial: Todos los usuarios se 
                        comprometen a mantener en secreto los datos, confidencias y cualquier información 
                        que le sea facilitada por los clientes y asociados, en la medida que su difusión 
                        no resulte indispensable para el cumplimiento del encargo confiado.
                        </Row>
                        <Row>2.	INMOPROF  está comprometido a respetar este deber después de haber cesado 
                            la prestación de sus servicios y a no utilizar estos datos para acciones posteriores 
                            no vinculadas a su labor inmobiliaria, sin el pleno consentimiento de los actores 
                            implicados, según la normativa vigente. El deber de secreto se 
                            extiende a cuantos asuntos conozca  los profesionales de INMOPROF  por 
                            trabajar en colaboración con  los usuarios de la plataforma.
                        </Row>
                        <Row>3.	Responsabilidad profesional y lealtad a INMOPROF de parte de los usuarios, 
                            quienes llevan a cabo sus funciones correctas y fielmente, evitando toda conducta 
                            que afecte a la recta y estricta conclusión de su competencia.
                        </Row>
                        <Row>4.	Los usuarios se comprometen a a elevar el nivel de la profesión, 
                            y de abstenerse de hacer una publicidad falsa y perjudicial para la 
                            profesión.y/ o en competencia desleal para con la plataforma INMOPROF
                        </Row>
                        <Row>5.	Dignidad, honestidad y honradez tanto los usuarios como  INMOPROF, 
                            mantiene en todo momento, el honor y la dignidad de su profesión y se 
                            abstiene de cualquier comportamiento que puede tender a descreditar. 
                            El personal de INMOPROF está comprometido a hacer más trasparente el mercado 
                            inmobiliario al cliente, asegurándole ante cualquier duda o petición de opinión 
                            o consejo.
                        </Row>
                        <Row>6.	Integridad profesional  IMNOPROF y los usuarios  siempre actúan veraz y 
                            diligentemente en el desempeño de sus obligaciones con respeto a sus colegas 
                            y a los clientes.
                        </Row>
                        <Row>7.	Deben apoyar y practicar el derecho a prever y recibir la información  
                            Tanto INMOPROF , como los usuarios estan comprometidos en respetar y 
                            apoyar el derecho de los clientes a tener información veraz sobre los 
                            distintos aspectos relacionados con el desarrollo de la actvidad 
                            corretajecon el único límite marcado por el deber del secreto profesional.
                        </Row>
                        <Row>8.	Deben transmitir datos con exactitud  Los usuarios se comprometen a  
                            custodiar y resguardar  la información que está a su cuidado. Dicha información 
                            estará resguardada de alteraciones inapropiadas y transmitidas 
                            con puntualidad y fidelidad.
                        </Row>
                        <Row><h6>9.	Relaciones entre los USUARIOS y los clientes.</h6>
                        </Row>
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={11}>1.	Los Usuarios trabajan  en servicio de los clientes  con honestidad, 
                            profesionalidad, eficacia en imparcialidad.</Col>                        
                        </Row>
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={11}>2.	Prestando el mejor servicio al cliente. Facilita toda la información 
                          que solicite el cliente (siempre que no se refiera a terceros no vinculados 
                          con el solicitante) y está comprometido en responder las solicitudes de 
                          información con prontitud y eficacia.</Col>                        
                        </Row>
                        <Row>8.	Deben transmitir datos con exactitud  Los usuarios se comprometen a  
                            custodiar y resguardar  la información que está a su cuidado. Dicha información 
                            estará resguardada de alteraciones inapropiadas y transmitidas 
                            con puntualidad y fidelidad.
                        </Row><h6>Otras normas de conducta</h6>
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={11}>1.	El USUARIO y los profesionales de INMOPROF defenderán los 
                          intereses de la parte con quien este vinculado contractualmente.</Col>                        
                        </Row>
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={11}>2.	El USUARIO se abstiene de maniobras tendientes a “ puentear” 
                          a otro USUARIO colaboradora que tenga vinculación contractual profesional 
                          con los propietarios de dicho inmueble.DICHA CONDUCTA ES PASIBLE DE DARSE 
                          DE BAJA AL USUARIO  POR PARTE DE INMOPROF.</Col>                        
                        </Row>
                        <Row>
                          <Col sm={1}></Col>
                          <Col sm={11}>3.	El USUARIO, autoriza a INMOPROF a difundir en la plataforma
                           los precios de venta de un inmueble vendido en la mencionada plataforma.</Col>                        
                        </Row>
                      </Col>
                      </Row>                                       
                    </Col>
              </Card.Text>
            </Row>
          </Col>
          </Row>  
          </Card>
          
          </Row>
      </Container>
      <br/><br/>

    </div>
  )
}

