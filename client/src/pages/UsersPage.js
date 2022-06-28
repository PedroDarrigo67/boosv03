import { useUsers } from "../context/userContext";
import { userCard } from "../components/userCard";
import {NavbarDemo} from '../components/NavbarDemo';


export function UsersPage() {
  const { users } = useUsers();

  return (
    <div>
        <NavbarDemo/>
    
          {users.map((user) => (
          
            <div key={user._id} user={user}>
              {user.username} - {user.calificacion} - {user.date}
           
          </div>
           ))}
    
    </div>
  )
}

