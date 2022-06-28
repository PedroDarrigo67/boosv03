import { Formik, Form, Field } from 'formik';
import { useUsers } from '../context/userContext';
import { useNavigate } from "react-router-dom";
import {NavbarDemo} from '../components/NavbarDemo';

export function UserForm() {
  const { createUser } = useUsers()
  const navigate = useNavigate();

  return (
    <div>
      <NavbarDemo/>
      <Formik 
        initialValues={
          {
            username:'', 
            password:'',
          }}
          onSubmit={ async (values, action) => { 
            await createUser(values)
            navigate('/')

          }}
          >
         
         {({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
          <Field name='username' placeholder="username" />
          <Field name='password' placeholder="password" type="password"/>

          

          <button type="submit">Guardar</button>
        </Form>
         )} 



       </Formik>


    </div>
  )
}

