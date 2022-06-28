import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap';

export function PostCard({ post }) {
  const navigate = useNavigate();
  return (
    <div>
    <div className="px-1 my-1 shadow p-1 mb-1 bg-white rounded" onClick={() => navigate(`posts/${post._id}`)}>
      <Card style={{ width: '70rem' }} className='text-center ' >
        <Card.Body>
          <Container>  
            <Row>
              <Col sm={4}>
                <Card.Title>
                  <h4>{post.nombre}</h4>
                </Card.Title>
              </Col>
              <Col sm={6}>
                <Card.Subtitle className="mb-2 text-muted">{post.detalle}</Card.Subtitle></Col>
              <Col sm={6}></Col>
              <Col sm={3}>
                <Card.Title>
                 
                </Card.Title>
              </Col>
            </Row>
            
            <Row>
              <Col sm={4}>
                <Card.Title>
                  <h6>{post.direccion} - {post.altura} - {post.barrio}</h6>
                </Card.Title>
              </Col>              
              
            </Row>


            
            <Row>
              <Col sm={2}>
                <Card.Text>Hambientes: 
                {post.ambientes}
                  </Card.Text>
              </Col>
              <Col sm={3}>m2 Const:
                {post.metrosconstruidos}
              </Col>
              
            </Row>
            <Row>  
              <Col sm={2}>Hambitaciones:
                {post.habitaciones}
              </Col>
              <Col sm={3}>m2 Const:
                {post.metrosterreno}
              </Col>
              
              </Row>
            <Row>  
              <Col sm={2}>Plantas:
                {post.plantas}
              </Col>
              <Col sm={3}>
                
              </Col>
              <Col sm={2}>
                {post.image && <img src={post.image.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
              </Col>
              <Col sm={2}>
                {post.imagea && <img src={post.imagea.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
              </Col>
              <Col sm={2}>
                {post.imagec && <img src={post.imagec.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
              </Col>
            </Row>
            
            
            <Row>
              <Col sm={8}></Col>
              <Col sm={4}>cod. publicacion: {post._id}</Col>
            </Row>
          
          
          
          </Container>
        </Card.Body>
      </Card>      
    </div>
    </div>
  );
}
