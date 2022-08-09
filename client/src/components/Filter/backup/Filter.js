import React, { useState } from "react";
import Data from "./Data";
import CardFilter from "./CardFilter";
import ButtonsFilter from "./ButtonFilter";

const Filter = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
          <ButtonsFilter
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <CardFilter item={item} />
        </div>
      </div>
    </>
  );
};

export default Filter;