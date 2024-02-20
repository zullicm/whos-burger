import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

  return(
    <nav className="navbar" >
      <NavLink className="site-logo" exact to="/">Who's Burger</NavLink>
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
          <li>
          <NavLink className="navbar-item" exact to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

