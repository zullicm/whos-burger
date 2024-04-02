import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from '../Assets/Logo.png'


function NavBar(){
  const navigate = useNavigate()

  return(
    <nav className="navbar" >
      <img src={Logo} onClick={() => navigate('')} />
      <ul>
        <li onClick={() => navigate('menu')}>
          <NavLink className="navbar-item" exact to="/menu">Menu</NavLink>
          </li>
          <li onClick={() => navigate('botm')}>
          <NavLink className="navbar-item" exact to="/botm">BOTM</NavLink>
          </li>
          <li onClick={() => navigate('about')}>
          <NavLink className="navbar-item" exact to="/about">About</NavLink>
          </li>
          <li onClick={() => navigate('contact')}>
          <NavLink className="navbar-item" exact to="/contact">Contact</NavLink>
          </li>
          <li onClick={() => navigate('cart')}>
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

