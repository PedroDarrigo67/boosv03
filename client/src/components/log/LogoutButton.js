import {useAuth0} from '@auth0/auth0-react';
import {Button} from 'react-bootstrap';
  
  export function LogoutButton() {
    const {logout} = useAuth0();
    return (
      <div> 
        <Button
        onClick={() => logout()}
        id="qsLoginBtn"
        variant="primary"
        className="btn-margin"
        >
          LogOut
        </Button>
      
      
       </div>
    )
  }
  
 