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
                  <Col sm={2}></Col>
                    <Col sm={4}>
                      <h1>{post.title}</h1>
                  </Col>

                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h6>{post.description}</h6>
                    </Col>
                         
                      <Col sm={2}>
                         {post.image && <img src={post.image.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                      </Col>
                      <Col sm={2}>
                         {post.image && <img src={post.image.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
                      </Col>
                      <Col sm={2}>
                         {post.image && <img src={post.image.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
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
