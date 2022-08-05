import React from "react";

const Card = ({ posts}) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {posts.map((post) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={post._id}
              >
                <div className="card-img-top text-center">
                  {post.nombre}
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
