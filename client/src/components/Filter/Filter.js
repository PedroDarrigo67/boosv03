import {useEffect, useState} from 'react';
import axios from "axios";
import Data from "./Data";
import CardFilter from "./CardFilter";
import ButtonsFilter from "./ButtonFilter";
import { usePosts } from "../../context/postContext";
import  Hero from "../../views/hero";
import { NavbarDemo } from "../NavbarDemo/NavbarDemo";


const Filter = () => {
  const { posts } = usePosts();
  const [item, setItem] = useState(posts);
  
  const menuItems = [...new Set(item.map((Val) => Val.tipo))];

  const filterItem = (curcat) => {
    
    const newItem = item.filter((newVal) => {
      return newVal.tipo === curcat;
    });
    setItem(newItem);
    };
  
    const peticionGet=async()=>{
    await axios.get("/posts")
    .then(response=>{
      setItem(response.data);      
    }).catch(error=>{
      console.log(error);
    })
    }
    useEffect(()=>{
    peticionGet();
    },[])  


  return (
    <>
      <div className="container-fluid">
      <NavbarDemo/>
      <br/><br/>
      <Hero/>
        <div className="row">
          <h4 className="col-12 text-center my-3 fw-bold">Elige tu tipo de publicacion</h4>
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