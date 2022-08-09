import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePosts } from "../../context/postContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import {useAuth0} from '@auth0/auth0-react';
import { Map } from '../../components/map/Map'



export function PostForm() {
  
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [post, setPost] = useState({
    nombre:"",
    detalle: "",
    direccion: "",
    altura: "",
    barrio: "",
    ambientes:"",
    precio: null,
    moneda: "",
    expensas:null,
    plantas: "",
    habitaciones: "",
    banos: "",
    antiguedad: '',
    metrosconstruidos: "",
    metrosterreno: "",
    tipo: "",
    usuario:"",
    userselect:"",
    image: null,
    imagea: null,
    imagec: null, 
       
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
          expensas: post.expensas,
          plantas: post.plantas,
          habitaciones: post.habitaciones,
          banos: post.banos,
          antiguedad: post.antiguedad,
          metrosconstruidos: post.metrosconstruidos,
          metrosterreno: post.metrosterreno,
          tipo: post.tipo,
          usuario: post.usuario,
          image: post.image,
          imagea: post.imagea,
          imagec: post.imagec,
          
        });
      }
    })();
  }, [params.id, getPost]); 

  

  return (
     <div>
     <NavbarDemo/>
     <br/><br/>
      <Container>
        <Row>
          <Col sm={4}>
            
          </Col>  
          <Col>
         <Formik
          initialValues={post}
          enableReinitialize
          validationSchema={Yup.object({
            nombre: Yup.string().required("un nombre es requerido"),
            detalle: Yup.string().required("Description es requerido"),
            direccion: Yup.string().required("direccion es requerido"),
            //altura: Yup.string().required("direccion es requerido"),
            image: Yup.mixed().required("The image required"),
            imagea: Yup.mixed().required("The image required"),
            //imagec: Yup.mixed().required("The image required"),
            tipo: Yup.string().required("Tipo de operacion es requerido"),
            precio: Yup.string().required("Precio es requerido"),
            expensas: Yup.string().required("Expensas es requerido"),
            moneda: Yup.string().required("Expensas es requerido"),
          })}            

          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.resetForm();
            actions.setSubmitting(false);
            navigate("/aviso");
          }}
        >
          {({ setFieldValue, isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              
            <Modal.Dialog
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >

                  <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">  
                          <label htmlFor="description"> Ingrese nueva publicacion </label>
                    </Modal.Title>
                  </Modal.Header>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                      <p className="text-primary">Todos los campoe que dicen "Campo obligatorio", 
                      deberan ser completados con informacion porque sino puede no cargarse la publicacion</p>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>Ingrese un titulo</h6>
                        <Field
                          placeholder="nombre"
                          name="nombre"
                          />
                          <p className="text-primary">Campo obligatorio</p>
                        <ErrorMessage
                          component="p"
                          name="nombre"
                          className="text-red-400 text-sm"
                          />
                      </Modal.Body>
                    </Col>
                    <Col sm={4}>
                      <Row><br /></Row>                      
                        <Row>Ingrese informacion para que resalte su publicacion</Row>
                    </Col>         
                    <Col sm={4}>
                        <Modal.Body>
                          <h6>Tipo de operacion</h6>
                          <Field
                            placeholder="tipo"
                            name="tipo"
                            /><p className="text-primary">Campo obligatorio</p>
                      </Modal.Body>   
                    </Col>           
                  </Row>
                  <Row>
                    <Col sm={4}>
                        <Modal.Body>
                          <h6>Direccion</h6>
                          <Field
                            placeholder="direccion"
                            name="direccion"
                            /><p className="text-primary">Campo obligatorio</p>
                          <ErrorMessage
                            component="p"
                            name="direccion"
                            className="text-red-400 text-sm"
                            />
                        </Modal.Body>
                      </Col>
                      <Col sm={4}>
                          <Modal.Body>
                          <h6>altura</h6>
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
                      <Col sm={4}>
                        <Modal.Body>
                        <h6>barrio</h6>
                        <Field
                          placeholder="barrio"
                          name="barrio"
                          />
                        <ErrorMessage
                          component="p"
                          name="barrio"
                          className="text-red-400 text-sm"
                          />
                        </Modal.Body> 
                      </Col>
                    </Row>  
                  <Row>
                    <Col sm={4}>
                      <Modal.Body>
                        <Map/>
                      </Modal.Body>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>Ingrese un detalle</h6>                    
                        <Field
                          component="textarea"
                          name="detalle"
                          id="detalle"
                          placeholder="detalle informacion"
                          rows="3"
                          cols="50"
                        /><p className="text-primary">Campo obligatorio</p>
                        <ErrorMessage
                          component="p"
                          name="detalle"
                          className="text-red-400 text-sm"
                        />          
                      </Modal.Body>          
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>precio</h6>
                        <Field
                          placeholder="precio"
                          name="precio"
                          /><p className="text-primary">Campo obligatorio</p>
                      </Modal.Body>
                    </Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>moneda</h6>
                        <Field
                          placeholder="moneda"
                          name="moneda"
                          /><p className="text-primary">Campo obligatorio</p>
                      </Modal.Body>
                    </Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>expensas</h6>
                        <Field
                          placeholder="expensas"
                          name="expensas"
                          /><p className="text-primary">Campo obligatorio</p>
                      </Modal.Body>   
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>ambientes</h6>
                        <Field
                          placeholder="ambientes"
                          name="ambientes"
                          />
                      </Modal.Body>   
                    </Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>plantas</h6>
                        <Field
                          placeholder="plantas"
                          name="planta"
                          />
                      </Modal.Body>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                        <Modal.Body>
                        <h6>habitaciones</h6>
                        <Field
                          placeholder="habitaciones"
                          name="habitaciones"
                          />
                        </Modal.Body>   
                    </Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>banos</h6>
                        <Field
                          placeholder="banos"
                          name="banos"
                          />
                      </Modal.Body>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>antiguedad</h6>
                        <Field
                          placeholder="antiguedad"
                          name="antiguedad"
                          />
                      </Modal.Body>  
                    </Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>m2 construidos</h6>
                        <Field
                          placeholder="metrosconstruidos"
                          name="metrosconstruidos"
                          />
                      </Modal.Body>
                    </Col>
                    <Col sm={4}>
                      <Modal.Body>
                        <h6>m2 terreno</h6>
                        <Field
                          placeholder="metrosterreno"
                          name="metrosterreno"
                          />
                      </Modal.Body>
                    </Col>
                  </Row>
                    <Row>
                      <Col sm={1}></Col>                                   
                      <Col sm={4}>
                        <div>1 Imagen</div> 
                        <input
                          type="file"
                          name="image"
                          onChange={(e) => setFieldValue("image", e.target.files[0])}/>
                          <p className="text-primary">Campo obligatorio</p>
                        <ErrorMessage
                          component="p"
                          name="image"/>   
                      </Col>   
                    </Row>
                    <Row>
                    <Col sm={1}></Col>

                    <Col sm={4}>
                      <div>2 Imagen</div>  
                      <input
                        type="file"
                        name="imagea"
                        onChange={(e) => setFieldValue("imagea", e.target.files[0])}/>
                        <p className="text-primary">Campo obligatorio</p>
                      <ErrorMessage
                        component="p"
                        name="imagea"/>     
                      </Col>    
                      </Row>
                    <Row>
                    <Col sm={1}></Col>            
                  
                    <Col sm={4}>
                      <div>3 Imagen</div>
                      <input
                        type="file"
                        name="imagec"
                        onChange={(e) => setFieldValue("imagec", e.target.files[0])}/>
                        <p className="text-primary">Campo obligatorio</p>
                      <ErrorMessage
                        component="p"
                        name="imagec"/>     
                  </Col>
                    </Row>
                  
                <Modal.Footer>

                <Button onClick={(e) => setFieldValue("usuario", user.name)}>Cargar usuario</Button>
                    <Field
                        placeholder="usuario"
                        name="usuario"
                        /><p className="text-primary">Campo obligatorio</p>
                  
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
        </Form>
          )}
        </Formik>
          </Col>
        </Row>
        </Container>
    </div>
  );
}
