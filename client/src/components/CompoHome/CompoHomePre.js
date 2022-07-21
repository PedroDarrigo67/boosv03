import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col } from 'react-bootstrap';
import { PostCardpre } from '../Card/PostCardpre';
import Image1 from '../../image/Administrador.png'
import { usePosts } from "../../context/postContext";


export function CompoHomePre() {
  const { posts } = usePosts();
  return (
    <div> 
      <div>PostCardpre</div>
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
              <p className="mt-4"> pagina administrativa. 
              </p>  
            </Col>
          </Row>
          <Row>
            <Card body  className='text-center bg-dark text-white my-1 py-1'>
              Presione la tarjeta de la propiedad que desea ver con mas detalle</Card>
          </Row>
            <div>  
              {posts.map((post) => (
                <PostCardpre  key={post._id} post={post} />
                  ))}
            </div>
           </Container>  
     </div>
  )
}

