import {Container, Row, Col } from 'react-bootstrap';
import { PostCard} from '../Card/PostCard';
import { usePosts } from "../../context/postContext";
import {Link} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import  Hero from "../../views/hero";

export function CompoHomePage() {
  const { posts } = usePosts();
  const { user } = useAuth0();
  
  return (
    <div> 
      <Hero/>
        <Container>
          <br/>
          <Row>
            <h4>
              Presione la sobre la propiedad que desea ver con mas detalle - Publicaciones ({posts.length})</h4>
          </Row>
            <div>  
              {posts.map((post) => (
                <PostCard  key={post._id} post={post} />
                  ))}
            </div>
            <Row>
              <br/>
                <Col sm={3}>
                <br/>
                {user.sub==="google-oauth2|107981664545875597842" && (<Link to="/posts/pre" 
                    className="p-2 mb-2 bg-danger text-white rounded-2"> Admin Pedro</Link>)}
                </Col>
                <Col sm={9}></Col>
              </Row>
                <Row>
                {user.sub==="google-oauth2|113430184194669712462" && (<Link to="/posts/pre" 
                    className="p-2 mb-2 bg-danger text-white rounded-2"> Admin Maxi</Link>)}
                </Row>
          </Container>  
     </div>
  )
}

