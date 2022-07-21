import {NavbarDemo} from '../../components/NavbarDemo/NavbarDemo';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePosts } from "../../context/postContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useAuth0} from '@auth0/auth0-react';
import {MapCarga} from '../../components/map/MapCarga';
import {Container, Row, Col } from 'react-bootstrap';








export function PostModal() {
  const [show, setShow] = useState(false)  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

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
            navigate("/");
          }}
          >
          {({ setFieldValue, isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>

            <Modal
             show={show}
             onHide={handleClose}
             backdrop="static"
             keyboard={false}
            > 
        
        
            <Modal.Header closeButton>
              <Modal.Title>Nueva Publicacion</Modal.Title>
            </Modal.Header> 
                       

            <Modal.Body>
              <Container>
                <Row>
                  <Col>
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
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>direccion</h6>
                    <Field
                      placeholder="direccion"
                      name="direccion"
                    />
                    <ErrorMessage
                      component="p"
                      name="direccion"
                      className="text-red-400 text-sm"
                    />
                  </Col>  
                  <Col>  
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
                  </Col>
                  <Col>     
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
                  </Col>
                  <Col>
                    <h6>tipo de operacion</h6>
                    <Field
                      placeholder="tipo"
                      name="tipo"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <br/>  
                    <MapCarga/>
                  </Col>
                  <Col>
                  <h6>Ingrese un detalle</h6>             
                  <Field
                    component="textarea"
                    name="detalle"
                    id="detalle"
                    placeholder="detalle informacion"
                    rows="2"
                    cols="57"
                    />
                  <ErrorMessage
                    component="p"
                    name="detalle"
                    className="text-red-400 text-sm"
                    />          
                  </Col>                  
                  <Col>
                    <h6>precio</h6>
                      <Field
                      placeholder="precio"
                      name="precio"
                    />
                  </Col>
                
                  <Col>
                    <h6>moneda</h6>
                    <Field
                      placeholder="moneda"
                      name="moneda"
                    />
                  </Col>
                  <Col>
                    <h6>ambientes</h6>
                    <Field
                      placeholder="ambientes"
                      name="ambientes"
                    />
                  </Col>
                  <Col>
                    <h6>plantas</h6>
                    <Field
                      placeholder="plantas"
                      name="planta"
                    />
                  </Col>
                  <Col>
                    <h6>habitaciones</h6>
                    <Field
                      placeholder="habitaciones"
                      name="habitaciones"
                    />
                  </Col>
                  <Col>
                    <h6>banos</h6>
                    <Field
                      placeholder="banos"
                      name="banos"
                    />
                  </Col>
                  <Col>
                    <h6>m2 construidos</h6>
                    <Field
                      placeholder="metrosconstruidos"
                      name="metrosconstruidos"
                    />
                  </Col>
                  <Col>
                    <h6>m2 terreno</h6>
                    <Field
                      placeholder="metrosterreno"
                      name="metrosterreno"
                    />
                  </Col>
              </Row>  
            </Container>
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
            <input
              type="file"
              name="imagea"
              onChange={(e) => setFieldValue("imagea", e.target.files[0])}/>
            <ErrorMessage
              component="p"
              name="imagea"/>     
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
          


           



      </Modal>


      </Form>    
      )}
      
      </Formik>      

    </div>
  )
}

