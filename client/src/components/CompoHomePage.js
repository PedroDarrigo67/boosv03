import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Container, Row, Col } from 'react-bootstrap';
import { PostCard} from './post/PostCard';
import Image1 from '../image/cordoba.jpg'
import { usePosts } from "../context/postContext";


export function CompoHomePage() {
  const { posts } = usePosts();
  return (
    <div> 
    
    <Container>
          <Row className="px-4 my-5">
            <Col sm={6}>   
              <Image 
                src={Image1}
                responsive 
                fluid
                rounded />         
            </Col>
              <Col sm={5}>
              <h1 className="font-weigh-light">InmoProf</h1>
              <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipiscing 
                elit senectus, tempor massa mattis tristique orci cras 
                lectus penatibus, sed aliquam id per eleifend interdum 
                dapibus. Commodo convallis nullam per diam, mi etiam nisl. 
              </p>  
            </Col>
          </Row>
          <Row>
            <Card body  className='text-center bg-dark text-white my-1 py-1'>
              Presione la tarjeta de la propiedad que desea ver con mas detalle</Card>;
          </Row>

            <div>  
              
                {posts.map((post) => (
                <CardGroup>
                  <PostCard key={post._id} post={post} />
                </CardGroup> ))}

            
            
              
              

            
            </div>
            
            







          </Container>  

    
    
    
    
    
     </div>
  )
}

