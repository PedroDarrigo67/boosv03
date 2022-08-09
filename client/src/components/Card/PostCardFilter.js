import React from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { usePosts } from "../../context/postContext";
import { Map } from "../map/Map";

const PostCardFilter = ({ item }) => {
  const navigate = useNavigate();
  const { posts } = usePosts();
  return (
    <>
    <div>      
      <div className="container-fluid">                  
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="px-1 my-1 shadow-2"
                onClick={() => navigate(`/posts/${Val._id}`)}
                key={Val._id}
                >
                {(Val.habilitada==="pub") && <div>   
                  <Card style={{ width: '77rem' }}>
                    <Card.Body >
                      <Container>
                        <Row>
                          <Row>
                            <Col sm={4}>
                              <Row>
                                <p>{Val.nombre}</p>
                              </Row>
                              <Row> 
                                <Col sm={6}>
                                  {Val.image && <img src={Val.image.url} alt={Val.title} className="w-100 p-0 rounded-3"/>}
                                </Col>
                                <Col sm={6}>
                                  {Val.imagea && <img src={Val.imagea.url} alt={Val.title} className="w-100 p-0 rounded-3"/>}
                                </Col>
                              </Row>
                            </Col>
                            <Col sm={8}>
                              <Row><h6>{Val.direccion} - {Val.altura} - {Val.barrio}</h6>  </Row>
                              <Row><p>{Val.detalle}</p></Row>
                              </Col>
                          </Row>
                        </Row>


                        <Row>
                          
                          <Col sm={6}>
                            <Row>
                              <Col sm={4}>
                                  {Val.imagec && <img src={Val.imagec.url} alt={Val.title} className="w-100 p-0 rounded-3"/>}
                               </Col>
                               <Col sm={4}><Map/></Col> 
                            </Row>
                          </Col>
                          <Col sm={6}>
                            <Row> 
                              <Col sm={6}></Col>
                              <Col sm={5} className="p-1 mb-2 bg-success text-white text-center
                              "><h4>{Val.tipo}</h4></Col> 
                            </Row>
                            <Row>  
                              <Col sm={3}><h6>{Val.moneda} - {Val.precio}</h6></Col>
                              <Col sm={3}><h6>Expensas: {Val.expensas}</h6></Col> 
                            </Row>
                            
                            <Row>
                              <Col sm={12}>
                                                                    </Col>
                                </Row>                                 
                                <Row>
                                  <Col sm={4}><p>Hambientes: {Val.ambientes}</p></Col> 
                                  <Col sm={4}><p>m2 Const: {Val.metrosconstruidos}</p> </Col>              
                                </Row>
                                <Row>  
                                  <Col sm={4}>Hambitaciones:{Val.habitaciones}</Col>
                                  <Col sm={4}>m2 Terreno:{Val.metrosterreno}</Col>              
                                </Row>
                                <Row>  
                                  <Col sm={4}>Plantas:{Val.plantas}</Col>
                                  <Col sm={4}></Col>
                                </Row>
                                  <Row>                                    
                                    <Col sm={8} className="text-black-50">cod. pub.: {Val._id}</Col>
                                    <Col sm={4} className="p-1 mb-2 bg-secondary text-white">
                                            usuario: {Val.usuario}</Col>
                                  </Row>  
                          </Col>
                        </Row>                           
                     </Container>      
                    </Card.Body>
                  </Card> 
                </div>}
                </div>
                );
               })}
              </div>
            </div>
      </div>
    </>
  );
};

export default PostCardFilter;