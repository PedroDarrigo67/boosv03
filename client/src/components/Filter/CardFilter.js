import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val._id}
              >
              
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    Tipo: {Val.tipo} 
                    ID: {Val._id}
                    Nombre: {Val.nombre}
                    Detalle: {Val.detalle}
                  </div>
                  <div className="card-text">{Val.nombre}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;