import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../Assets/Logo.png'


function NavBar(){

  return(
    <nav className="navbar" >
      <NavLink><img src={Logo}/></NavLink>
      <ul>
        <li>
          <NavLink className="navbar-item" exact to="/menu">Menu</NavLink>
          </li>
          <li>
          <NavLink className="navbar-item" exact to="/botm">BOTM</NavLink>
          </li>
          <li>
          <NavLink className="navbar-item" exact to="/about">About</NavLink>
          </li>
          <li>
          <NavLink className="navbar-item" exact to="/contact">Contact</NavLink>
          </li>
          <li>
          <NavLink className="navbar-item" exact to="/cart">Cart</NavLink>
          </li>
      </ul>
      <div className=" nav-profile">
        <NavLink className="navbar-item" exact to="/profile">Profile</NavLink>
      </div>
    </nav>
  )
}

export default NavBar

