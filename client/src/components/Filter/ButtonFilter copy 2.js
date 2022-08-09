import React from "react";
import { usePosts } from "../../context/postContext";


const ButtonsFilter = ({ filterItem, setItem, menuItems }) => {
  const { posts } = usePosts();
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(posts)}
        >
          All
        </button>

        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => filterItem("venta")}
        >
          venta
        </button>

        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => filterItem("alquiler")}
        >
          alquiler
        </button>


        {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("venta")}
        >
          Breakfast
        </button>



        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Dinner")}
        >
          Dinner
        </button> */}
      </div>
    </>
  );
};

export default ButtonsFilter;