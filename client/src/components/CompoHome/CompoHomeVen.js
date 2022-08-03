import Image from 'react-bootstrap/Image';
import {Container, Row, Col } from 'react-bootstrap';
import { PostCardven} from '../Card/PostCardven';
import Image1 from '../../image/vendida.png'
import { usePosts } from "../../context/postContext";
import { NavbarDemo } from "../NavbarDemo/NavbarDemo";

export function CompoHomeVen() {
  const { posts } = usePosts();
  return (
    <div>  
       <NavbarDemo/>
       <br/>
    <Container>
          <Row className="px-4 my-5">
            <Col sm={4}>   
              <Image 
                src={Image1}
                responsive 
                fluid
                rounded />         
            </Col>
              <Col sm={5}>
              <h1 className="font-weigh-light">InmoProf</h1>
              <p className="mt-4"> propiedades vendidas/alquiladas. 
              </p>  
            </Col>
          </Row>
          
            <div>  
              {posts.map((post) => (
                <PostCardven  key={post._id} post={post} />
                  ))}
            </div>
          </Container>      
     </div>
  )
}

