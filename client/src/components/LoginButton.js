import { useAuth0 } from "@auth0/auth0-react";
import {Button} from 'react-bootstrap';
  
export function LoginButton() {
  const {loginWithRedirect} = useAuth0();
    return (
      <div> 
         <Button
        onClick={() => loginWithRedirect()}
        id="qsLoginBtn"
        variant="primary"
        className="btn-margin"
        >
          LogIn
        </Button>
      
        </div>
    )
  }
  
  
