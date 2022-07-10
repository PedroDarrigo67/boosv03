import { useAuth0 } from "@auth0/auth0-react";
import { NavLogin} from './NavLogin';
import { NavLogout} from './NavLogout';

export function NavbarDemo() {
  
  const {isAuthenticated } = useAuth0();
      
  
  return (
    <div>  
      {isAuthenticated ? <NavLogin/> : <NavLogout/> }
    </div>
  )
}

