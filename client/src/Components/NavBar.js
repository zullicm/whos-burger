import React from "react";

function NavBar(){

  return(
    <nav className="navbar" >
      <a href="/" className="site-logo">Site Logo</a>
      <ul>
        <li>
          <a href="/menu">Menu</a>
          </li>
          <li>
          <a href="/botm">BOTM</a>
          </li>
          <li>
          <a href="/about">About</a>
          </li>
          <li>
          <a href="/contact">Contact</a>
          </li>
          <li>
          <a href="/cart">Cart</a>
          </li>
          <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

