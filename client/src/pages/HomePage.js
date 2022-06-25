import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { usePosts } from "../context/postContext";
import { PostCard} from '../components/PostCard';


import {NavbarDemo} from '../components/NavbarDemo';
import Image1 from '../image/cordoba.png'

export function HomePage() {
  const { posts } = usePosts();
  return (
    <div>    
      <NavbarDemo/>
      
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
        {posts.map((post) => (
        <CardGroup>
            <PostCard key={post._id} post={post} />
        </CardGroup> ))}
      </Container>
      <footer className='py-5 my-5 bg-dark'>
        <Container className='px-4'>
          <p className='text-center text-white'>
            Copyright &copy; Your website 2022
          </p>
        </Container>
      </footer>
    </div>
  )
}

