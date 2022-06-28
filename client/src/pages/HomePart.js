import { usePosts } from "../context/postContext";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import {NavbarDemo} from '../components/NavbarDemo';


export function HomePart() {
  
  const { posts } = usePosts()
  console.log(posts)
  const params = useParams();
  console.log(params.id)

  return(
    <div>
      <Card style={{ width: '80rem' }}>
        {posts.map(post => (<div key={params.id}>
            {post._id===params.id ? <div>
               
              <NavbarDemo/> 
               <Container>
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Col sm={8}>
                        <h6>{post.nombre}</h6>
                      </Col>
                      <Col sm={2}>
                        <h5>{post.tipo}</h5>
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
                     <Col sm={1}></Col>
                      <Col sm={6}>Amb.:{post.ambientes} pla.:{post.plantas} Hab.:{post.habitaciones}</Col>
                    </Row>
                    <Row>
                      <Col sm={1}></Col>
                      <Col sm={6}>Ban.:{post.banos} m2 cont.:{post.metrosconstruidos} m2 terr.:{post.metrosterreno}</Col>
                    
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
                  <Col sm={2}>{post.usuario}</Col>
                  <Col sm={6}></Col>
                      <Col sm={4}>
                        {post._id}
                      </Col>
                </Row>
                  
            
            
            
            
            
            
            
              
            </Container>
            
            </div>:<p></p>}












        
        
          </div>
          ))}
          </Card>
         </div>
  )
}
