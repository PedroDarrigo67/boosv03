import { usePosts } from "../../context/postContext";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import { Map } from '../../components/map/Map';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export function HomePartpre() {
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
                  <Col sm={8}>
                    <Row>
                      <Col sm={8}>
                        <h4 className="text-primary">{post.nombre}</h4>
                      </Col>
                      <Col sm={2}>
                        <h3 className="p-1 mb-2 bg-success text-white">{post.tipo}</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={8}>
                        <p>{post.detalle}</p>
                      </Col>
                      <Col sm={4}>{post.moneda} {post.precio}</Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <h6>{post.description}</h6>
                      </Col>
                    </Row>  
                    <Row>
                    <Col><Map/></Col>
                      
                      <Col sm={6}>
                        <Row>
                          Amb.:{post.ambientes} pla.:{post.plantas} Hab.:{post.habitaciones}
                        </Row>
                        <Row>
                          Ban.:{post.banos} m2 cont.:{post.metrosconstruidos} m2 terr.:{post.metrosterreno}
                        </Row>
                      
                      </Col>
                      
                      
                      
                    </Row>
                    

                    
                        
                      
                    
                  </Col>











                  <Col sm={4}>
                      <Row>
                      <Col sm={6} my={1} py={1}>
                        <div className="bg-image hover-zoom">
                         {post.image && <img src={post.image.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                         </div>
                      </Col>
                      <Col sm={6} my={1} py={1}>
                         {post.imagea && <img src={post.imagea.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                      </Col>
                      </Row>
                      <Row>
                      <Col sm={6} my={1} py={1}>
                         {post.imagec && <img src={post.imagec.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                      </Col>
                      </Row>

                      
                      


                  </Col>








                </Row>
                <Row>
                  <Col clasName="text-secondary" sm={2}>{post.usuario}</Col>
                  
                  <Link to={`/edit/posts/${post._id}`} className="p-1 mb-2 bg-secondary text-white"> Edit</Link>

                  
                                
                  
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
