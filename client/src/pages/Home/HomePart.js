import { usePosts } from "../../context/postContext";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import { Map } from '../../components/map/Map';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Carousel from 'react-bootstrap/Carousel';

export function HomePart() {
  const { posts } = usePosts()
  const params = useParams();
  const { user } = useAuth0();

  return(
    <div>
     <NavbarDemo/> 
      <Card style={{ width: '90rem' }}>
        {posts.map(post => (<div key={params.id}>
            {post._id===params.id ? <div>
                <Container>
                <Row>
                  <Col sm={7}>
                    <Row>
                      <Col sm={8}>
                        <h4 className="text-primary">{post.nombre}</h4>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col sm={8}>
                        <p>{post.detalle}</p>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <h6>{post.description}</h6>
                      </Col>
                    </Row>  
                    <Row>
                    <Col><Map/></Col> 
                        
                      
                    </Row>
                  </Col>

                  <Col sm={5}>
                      <Row>
                        <Col sm={4}>
                          <h3 className="p-1 mb-2 bg-success text-white">{post.tipo}</h3>
                        </Col>
                        <Col sm={4}>
                        <h5>{post.moneda} {post.precio} </h5>
                        </Col>
                      <Row>
                          Amb.:{post.ambientes} pla.:{post.plantas} Hab.:{post.habitaciones}
                        </Row>
                        <Row>
                          Ban.:{post.banos} m2 cont.:{post.metrosconstruidos} m2 terr.:{post.metrosterreno}
                          <br/>
                        </Row>
                        <Row>
                          <br/>
                        </Row>
                      </Row>
                      
                      <Row>
                      <Col>

                          <Carousel>

                          {(post.image) && (
                            <Carousel.Item>
                              <img
                                className="d-block w-max"
                                src={post.image.url}
                                alt="First slide"
                                />                              
                            </Carousel.Item>
                          )}
                          {(post.imagea) && (
                            <Carousel.Item>
                              <img
                                className="d-block w-max"
                                src={post.imagea.url}
                                alt="Second slide"
                              />        
                            </Carousel.Item>
                          )}
                            {(post.imagec) && ( 
                              <Carousel.Item >
                              <img
                                className="d-block w-max"
                                src={post.imagec.url}
                                alt="Second slide"
                              />        
                            </Carousel.Item>
                            )}
                          </Carousel>                                                  
                      </Col>  
                    <Row><br /></Row>
                    <Row>
                      <Col sm={4} my={1} py={1}>
                        <div className="bg-image hover-zoom">
                         {post.imageb && <img src={post.imageb.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                         </div>
                      </Col>
                      <Col sm={4} my={1} py={1}>
                        <div className="bg-image hover-zoom">
                         {post.imaged && <img src={post.imaged.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                         </div>
                      </Col>
                      <Col sm={4} my={1} py={1}>
                        <div className="bg-image hover-zoom">
                         {post.imagee && <img src={post.imagee.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                         </div>
                      </Col>
                    </Row>

                      </Row>
                  </Col>
                  







                </Row>
                <Row>
                  <Col clasName="text-secondary" sm={2}>{post.usuario}</Col>
                  
                  {post.usuario===user.name && (<Link to={`/edit/posts/${post._id}`} 
                    className="p-1 mb-2 bg-secondary text-white"> Edit</Link>)}

                  
                                
                  
                  <Col sm={6}></Col>
                      <Col sm={4}>
                        {post._id}
                      </Col>
                </Row>
                  
            
            
            
            
            
            
            
              
            </Container>
            
            </div>:<p></p>}</div>
          ))}
          </Card>
         </div>
  )
}
