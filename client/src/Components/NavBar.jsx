import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../Assets/Logo.png'


function NavBar(){
  const navigate = useNavigate()

  return(
    <nav className="navbar" >
      <img src={Logo} title="Who's Burger Homepage" onClick={() => navigate('')} />
      <ul>
        <li onClick={() => navigate('menu')} title="Menu">
          <a className="navbar-item">Menu</a>
          </li>
          <li onClick={() => navigate('botm')} title="BOTM">
          <a className="navbar-item">BOTM</a>
          </li>
          <li onClick={() => navigate('about')} title="About">
          <a className="navbar-item" >About</a>
          </li>
          <li onClick={() => navigate('contact')} title="Contact">
          <a className="navbar-item" >Contact</a>
          </li>
          <li onClick={() => navigate('cart')} title="Cart">
          <a className="navbar-item">Cart</a>
          </li>
      </ul>
      <div className=" nav-profile">
        <a className="navbar-item" exact to="/profile">Profile</a>
      </div>
    </nav>
  )
}

export default NavBar

