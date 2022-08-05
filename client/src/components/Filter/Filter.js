import React, { useState } from "react";
import { usePosts } from "../../context/postContext";
import Card from "./Card";
import Buttons from "./Buttons";

const Filter = () => {
  const { posts } = usePosts();
  const [post, setPost] = useState(posts);

  const menuItems = [...new Set(posts.filter((post) => post.tipo))];

  const filterItem = (curcat) => {
    const newItem = posts.filter((newVal) => {
      return newVal.tipo === curcat;
    });
    setPost(newItem);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
          




          <Card post={post} />
        </div>
      </div>
    </>
  );
};

export default Filter;