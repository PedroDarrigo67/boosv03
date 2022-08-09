import {useEffect, useState} from 'react';
import axios from "axios";
import PostCardFilter from "../Card/PostCardFilter";
import ButtonsFilter from "../Filter/ButtonFilter";
import { usePosts } from "../../context/postContext";
import  Hero from "../../views/hero";
import { NavbarDemo } from "../NavbarDemo/NavbarDemo";
import {Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import { FiFilter } from "react-icons/fi";


const CompoHomePage = () => {
  const { posts } = usePosts();
  const [item, setItem] = useState(posts);
  const { user } = useAuth0();
  
  const menuItems = [...new Set(item.map((Val) => Val.tipo))];

  const filterItem = (curcat) => {
    
    const newItem = item.filter((newVal) => {
      return newVal.tipo === curcat;
    });
    setItem(newItem);
    };
  
    const peticionGet=async()=>{
    await axios.get("/posts")
    .then(response=>{
      setItem(response.data);      
    }).catch(error=>{
      console.log(error);
    })
    }
    useEffect(()=>{
    peticionGet();
    },[])  

  return (
    <>
      <div>
      <NavbarDemo/>
      <br/><br/>
      <Hero/>
        <Container>
          <Row>
              <Col sm={0}></Col>
              <Col sm={12}>
                <Card className="p-2 bg-light" style={{ width: '72rem' }}>
                  <Container>
                    <Row>          
                      <Col sm={6}> <h6 className="fw-bold"><FiFilter/>  Elige tu tipo de publicacion</h6></Col>
                      <Col sm={4}>
                        <ButtonsFilter className="m-3 p-md-3"
                          filterItem={filterItem}
                          setItem={setItem}
                          menuItems={menuItems}
                        />
                      </Col>
                    </Row>
                    </Container>
                    <Row>
              </Row>
            </Card>
              </Col>            
            </Row>
          </Container>
        <div className="row">
          <PostCardFilter item={item} />
        </div>
        <br/>
        <Row>
          <Col sm={0}></Col>
          <Col sm={2}>
            {user.sub==="google-oauth2|107981664545875597842" && (<Link to="/posts/pre" 
                      className="p-2 mb-2 bg-danger text-white rounded-2"> Admin Pedro</Link>)}
          </Col>       
        </Row>
        <Row>
          <Col sm={0}></Col>
          <Col sm={2}>
            {user.sub==="google-oauth2|113430184194669712462" && (<Link to="/posts/pre" 
                    className="p-2 mb-2 bg-danger text-white rounded-2"> Admin Maxi</Link>)}
          </Col>       
        </Row>



        
      </div>
    </>
  );
};

export default CompoHomePage;