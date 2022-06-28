
import { useUsers} from "../context/userContext";



import {Container, Row, Col} from 'react-bootstrap';

export function UserCard({ user}) {
  
  return (
    <div>
      {user.username}
      </div>
  )
}
