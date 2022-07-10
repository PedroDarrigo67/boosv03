import { useUsers } from "../../context/userContext";

import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import {Container, Row, Col} from 'react-bootstrap';




export function UsersPage() {
  const { users } = useUsers();

  return (
    <div>
        <NavbarDemo/>
    
          {users.map((user) => (
          
            <div key={user._id} user={user}>
            <Container>
              <Row>
                <Col sm={2}></Col>
                <Col sm={10}>User: {user.username} - Calif: {user.calificacion} - mail: {user.mailito} - Fecha Alta: {user.date}</Col>
              </Row>
            
               
            </Container>
          </div>
           ))}
    
    </div>
  )
}

