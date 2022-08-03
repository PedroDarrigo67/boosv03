import React, { useState } from 'react';
import { usePosts } from "../../context/postContext";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Map} from "../../components/map/Map"


export function HomePart() {
  const { posts } = usePosts()
  const params = useParams();
  const { user } = useAuth0();
  const [fullscreen] = useState(true);
  const [show, setShow] = useState(false)  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  return(
    <div className="background: primary">
     <NavbarDemo/> 
     <br/><br/>
      <Card 
        style={{ width: '80rem' }} >
        {posts.map(post => (<div key={params.id}>
            {post._id===params.id ? <div>
              <Card.Body>
                <Card.Title>{post.nombre}</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col sm={6}>
                        <Row>{post.detalle}</Row>
                        <br/>
                        <Row> 
                          <Col sm={4}><h5>{post.direccion}</h5></Col>
                          <Col sm={2}><h5>{post.altura}</h5></Col>
                        </Row>
                        <Row> 
                          <Col sm={6}><h5>Barrio: {post.barrio}</h5></Col>
                        </Row>
                      </Col>  
                      <Col sm={3}>
                        <Map/>                       
                      </Col>                      
                      <Col sm={3}>
                        <Carousel>
                          {(post.image) && (
                          <Carousel.Item>
                            <img
                              className="d-block w-max"
                              style={{ width: '18rem' }}
                              src={post.image.url}
                              alt="First slide"
                              />                              
                          </Carousel.Item>
                          )}
                          {(post.imagea) && (
                            <Carousel.Item>
                              <img
                                className="d-block w-max"
                                style={{ width: '18rem' }}
                                src={post.imagea.url}
                                alt="Second slide"
                              />        
                            </Carousel.Item>
                          )}
                            {(post.imagec) && ( 
                              <Carousel.Item >
                              <img
                                className="d-block w-max"
                                style={{ width: '18rem' }}
                                src={post.imagec.url}
                                alt="Second slide"
                              />        
                            </Carousel.Item>
                            )}
                          </Carousel>
                        </Col>                        
                    </Row>                    
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item>
                    <Container fluid>
                      <Row>
                        <Col sm={1}><h5>{post.tipo}</h5></Col>
                        <Col sm={1}>{post.moneda}</Col>
                        <Col sm={1}> {post.precio}</Col>                        
                        <Col sm={4}>
                          <Row>                          
                                Amb.:{post.ambientes} pla.:{post.plantas} Hab.:{post.habitaciones}
                          </Row>
                          <Row>
                            Ban.:{post.banos} m2 cont.:{post.metrosconstruidos} m2 terr.:{post.metrosterreno}
                            <br/>
                          </Row>
                        </Col>
                        <Col sm={1}></Col>                        
                      </Row>
                    </Container>
                  </ListGroup.Item>                  
                  <ListGroup.Item>
                  <Row>
                    <Col clasName="text-secondary" sm={2}>{post.usuario}</Col>
                    <Col sm={4}>Codigo publicacion: {post._id}</Col>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                        {post.usuario===user.name && (<Link to={`/edit/posts/${post._id}`} 
                         className="p-2 mb-4 bg-secondary text-white">Editar publicacion </Link>)}
                    </Col>
                  </Row>
                  </ListGroup.Item>
                     <Button variant="info" onClick={handleShow}>
                        Ver imagenes de la propiedad
                     </Button>
                     <Modal
                       show={show}
                       onHide={handleClose}
                       backdrop="static"
                       keyboard={false}
                       fullscreen={fullscreen}
                      >         
                        <Modal.Header closeButton>
                           <Modal.Title>Imagenes</Modal.Title>
                        </Modal.Header> 
                        <Modal.Body>
                        <Card className="bg-light text-white">
                          <Container>    
                              <br/>
                              <Row>
                                <Col sm={4}>
                                    <div>{post.image && <img src={post.image.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <Col sm={4}>
                                    <div>{post.imagea && <img src={post.imagea.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <Col sm={4}>
                                    <div>{post.imagec && <img src={post.imagec.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <br/>
                                <Col sm={4}>
                                    <div>{post.imageb && <img src={post.imageb.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <Col sm={4}>
                                    <div>{post.imaged && <img src={post.imaged.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <Col sm={4}>
                                    <div>{post.imagee && <img src={post.imagee.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <Col sm={4}>
                                    <div>{post.imagef && <img src={post.imagef.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <Col sm={4}>
                                    <div>{post.imageg && <img src={post.imageg.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                                <Col sm={4}>
                                    <div>{post.imageh && <img src={post.imageh.url} alt={post.title} className="rounded-3" style={{ width: '22rem' }}/>}</div>
                                </Col>
                              </Row>
                              <br/>
                            </Container>
                           </Card> 
            </Modal.Body>
            </Modal>
                  </ListGroup>
             </div>:<p></p>}</div>
          ))}
          </Card>
         </div>
  )
}
