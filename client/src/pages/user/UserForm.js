import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { useUsers } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';


export function UserForm() {
  const { createUser, getUser } = useUsers();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username:"",
    password: "",
    mailito: "",    
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setUser({
          username: user.username,
          password: user.password,
          mailito: user.mailito,
          
        });
      }
    })();
  }, [params.id, getUser]);

  return (
     <div>
     <NavbarDemo/>
      <Container>
        <Row>
          <Col sm={4}>
            
          </Col>  
          <Col>
         <Formik
          initialValues={user}
          enableReinitialize
          validationSchema={Yup.object({
            username: Yup.string().required("un nombre es requerido"),
            password: Yup.string().required("Description es requerido"),
            mailito: Yup.string().required("direccion es requerido"),
            // image: Yup.mixed().required("The image required"),
          })}
          onSubmit={async (values, actions) => {
            
              await createUser(values);
            
            actions.resetForm();
            actions.setSubmitting(false);
            navigate("/");
          }}
        >
          {({ setFieldValue, isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              

              <div className="static-modal">
            <Modal.Dialog>


          <Modal.Body>
                  <label htmlFor="description"> Denominacion </label>
          </Modal.Body>



          <Modal.Body>
              <h6>username</h6>
              <Field
                placeholder="username"
                name="username"
                />
              <ErrorMessage
                component="p"
                name="username"
                className="text-red-400 text-sm"
                />
          </Modal.Body>
          <Modal.Body>
              <h6>password</h6>
              <Field
                placeholder="password"
                name="password"
                type="password"
                />
              <ErrorMessage
                component="p"
                name="password"
                className="text-red-400 text-sm"
                />
          </Modal.Body>  
          <Modal.Body>
              <h6>mail</h6>
              <Field
                placeholder="mailito"
                name="mailito"
                type="email"
                />
              <ErrorMessage
                component="p"
                name="mailito"
                className="text-red-400 text-sm"
                />
          </Modal.Body>  
          
                   
          
       <Modal.Footer>
          <Button 
            bsStyle="primary"
            type="submit"
            disabled={isSubmitting}
            >
            {isSubmitting ? (
                      <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                    ) : (
                    "save"
                    )}
            </Button>
        </Modal.Footer>
        </Modal.Dialog>
        </div>;                 
        </Form>
          )}
        </Formik>
          </Col>
        </Row>
        </Container>
    </div>
  );
}
