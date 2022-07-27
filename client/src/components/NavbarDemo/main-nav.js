import {NavLink} from "react-router-dom";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsFillFilePostFill, BsHouseFill } from "react-icons/bs";
import { AiOutlineApi, AiOutlineFileAdd } from "react-icons/ai";


const MainNav = () => (
  <div className="navbar-nav mr-auto text-black-50">


    <NavLink
      to="/posts"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
      >
      <BsFillFilePostFill/> Post
    </NavLink>
    
    
    <NavLink
      to="/new"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
      >
      <AiOutlineFileAdd/> Nuevo
    </NavLink>


    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
      >
      <BiUser/> Usuario
    </NavLink>

    <NavLink
      to="/vendida"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      <BsHouseFill/>Prop cerrada
    </NavLink>
    <NavLink
      to="/external-api"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      <AiOutlineApi/>External API
    </NavLink>
  </div>
);

export default MainNav;
