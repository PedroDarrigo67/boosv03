import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePosts } from "../../context/postContext";
import { useUsers } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';



export function PostForm() {
  
  const { users } = useUsers();
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    nombre:"",
    detalle: "",
    direccion: "",
    altura: "",
    barrio: "",
    ambientes:"",
    precio: null,
    moneda: "",
    plantas: "",
    habitaciones: "",
    banos: "",
    metrosconstruidos: "",
    metrosterreno: "",
    tipo: "",
    usuario:"",
    userselect:"",
    image: null,
    imagea: null,
    imagec: null
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost({
          nombre: post.nombre,
          detalle: post.detalle,
          direccion: post.direccion,
          altura: post.altura,
          barrio: post.barrio,
          ambientes:post.ambientes,
          precio: post.precio,
          moneda: post.moneda,
          plantas: post.plantas,
          habitaciones: post.habitaciones,
          banos: post.banos,
          metrosconstruidos: post.metrosconstruidos,
          metrosterreno: post.metrosterreno,
          tipo: post.tipo,
          usuario: post.usuario,
          image: post.image,
          imagea: post.imagea,
          imagec: post.imagec
        });
      }
    })();
  }, [params.id, getPost]);

  return (
     <div>
     <NavbarDemo/>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={post}
              enableReinitialize
              validationSchema={Yup.object({
                nombre: Yup.string().required("un nombre es requerido"),
                detalle: Yup.string().required("Description es requerido"),
                direccion: Yup.string().required("direccion es requerido"),
                altura: Yup.string().required("direccion es requerido"),
              })}
              onSubmit={async (values, actions) => {
              if (params.id) {
                  await updatePost(params.id, values);
              } else {
                  await createPost(values);
              }
              actions.resetForm();
              actions.setSubmitting(false);
              // navigate("/");
            }}
            >
              {({ setFieldValue, isSubmitting, handleSubmit }) => (
            
            <Form onSubmit={handleSubmit}>
              <div className="static-modal">
                <Modal.Dialog>
                  <Row>
                    <Col>
                      <Modal.Body>
                        <label htmlFor="description"> Denominacion </label>
                      </Modal.Body>
                    </Col>
                    </Row>  
                    <Row> 
                <Col>  
                  <Modal.Body>
                    <h6>Ingrese un titulo</h6>
                      <Field
                        placeholder="nombre"
                        name="nombre"
                      />
                      <ErrorMessage
                        component="p"
                        name="nombre"
                        className="text-red-400 text-sm"
                      />
                  </Modal.Body>
                </Col>

                <Col>  
                <Modal.Body>
                    <h6>Ingrese Usuario</h6>
                      <select>
                        <Field
                          component="select"
                          name="usuario"                  
                          className="text-red-400 text-sm"
                          value="user.username"
                        />    
                      {users.map(user => (
                        <option key={user._id} value={user.id}>{user.username}</option>
                        ))}
                      </select>                
                    </Modal.Body>
                  </Col>

                <Col> 
                  <Modal.Body>
                    <h6>Direccion</h6>
                    <Field
                      placeholder="direccion"
                      name="direccion"
                    />
                    <ErrorMessage
                      component="p"
                      name="direccion"
                      className="text-red-400 text-sm"
                    />
                  </Modal.Body>  
                </Col>
                <Col> 
                    <Modal.Body>
                      <h6>Altura</h6>
                    <Field
                      placeholder="altura"
                      name="altura"
                    />
                    <ErrorMessage
                      component="p"
                      name="altura"
                      className="text-red-400 text-sm"
                    />
                    </Modal.Body>   
                 </Col>
                 <Col>  
                  <Modal.Body> 
                    <h6>Detalle publicacion</h6>
                    <Field
                      component="textarea"
                      name="detalle"
                      id="detalle"
                      placeholder="detalle informacion"
                      rows="3"
                      cols="60"
                    />
                  <ErrorMessage
                    component="p"
                    name="detalle"
                    className="text-red-400 text-sm"
                  />          
                  </Modal.Body>
                 </Col>



                <Col>
                  <Modal.Body>
                    <h6>precio</h6>
                  <Field
                    placeholder="precio"
                    name="precio"
                  />
                </Modal.Body>
                </Col>
                <Col>
                  <Modal.Body>
                    <h6>moneda</h6>
                  <Field
                    placeholder="moneda"
                    name="moneda"
                  />
                  </Modal.Body>
                </Col>      
                <Col>
                  <Modal.Body>
                  <h6>ambientes</h6>
                  <Field
                    placeholder="ambientes"
                    name="ambientes"
                  />
                  </Modal.Body>  
                </Col>    
                <Col>
                  <Modal.Body>
                  <h6>plantas</h6>
                  <Field
                    placeholder="plantas"
                    name="planta"
                  />
                  </Modal.Body>    
                </Col>   
                <Col>
                  <Modal.Body>
                    <h6>habitaciones</h6>
                  <Field
                    placeholder="habitaciones"
                    name="habitaciones"
                  />
                  </Modal.Body>
                </Col>         
                <Col>
                  <Modal.Body>
                    <h6>banos</h6>
                  <Field
                    placeholder="banos"
                    name="banos"
                  />
                  </Modal.Body>      
                </Col>        
                <Col>
                  <Modal.Body>
                    <h6>m2 construidos</h6>
                  <Field
                    placeholder="metrosconstruidos"
                    name="metrosconstruidos"
                  />
                  </Modal.Body>
                </Col>        
                <Col>
                  <Modal.Body>
                    <h6>m2 terreno</h6>
                  <Field
                    placeholder="metrosterreno"
                    name="metrosterreno"
                  />
                  </Modal.Body>
                </Col>
                <Col>
                  <Modal.Body>
                    <h6>tipo de operacion</h6>
                  <Field
                    placeholder="tipo"
                    name="tipo"
                  />
                </Modal.Body>
                </Col>          
              </Row>    
          <Modal.Body>
            <label htmlFor="image">Primera imagen</label>
          </Modal.Body>            
          <Modal.Body>
            <input
              type="file"
              name="image"
              onChange={(e) => setFieldValue("image", e.target.files[0])}/>
            <ErrorMessage
              component="p"
              name="image"/>     
          </Modal.Body>

          <Modal.Body>
            <label htmlFor="imagea">Segunda imagen</label>
          </Modal.Body>            
          <Modal.Body>
            <input
              type="file"
              name="imagea"
              onChange={(e) => setFieldValue("imagea", e.target.files[0])}/>
            <ErrorMessage
              component="p"
              name="imagea"/>     
          </Modal.Body>

          <Modal.Body>
            <label htmlFor="imagec">Tercera Imagen</label>
          </Modal.Body>            
          <Modal.Body>
            <input
              type="file"
              name="imagec"
              onChange={(e) => setFieldValue("imagec", e.target.files[0])}/>
            <ErrorMessage
              component="p"
              name="imagec"/>     
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
