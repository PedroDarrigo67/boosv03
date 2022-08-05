import {NavLink} from "react-router-dom";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { AiOutlineApi, AiOutlineFileAdd } from "react-icons/ai";


const MainNav = () => (
  <div className="navbar-nav mr-auto text-black-50">

    <NavLink
      to="/posts/ven"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      <BsHouseFill/>Prop cerrada
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
      to="/users"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
      >
      <BiUser/> Usuario
    </NavLink>
    
    <NavLink
      to=""
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      <AiOutlineApi/>External API
    </NavLink>
  </div>
);

export default MainNav;
