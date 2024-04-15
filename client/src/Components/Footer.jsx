import React from "react";
import Logo from '../Assets/Logo.png'

function Footer(){

  return(
    <div id="footer">
      <div className="footer-sec1">
        <img src={Logo} />
        <p className="footer-p1">"Who's Burger" is not a real resturant.<br/>It is a personal project.</p>
      </div>
      <div className="footer-sec2">
        <p>Locations:</p>
        <p>Address, PA</p>
        <p>Address, NY</p>
        <p>Address, NJ</p>
      </div>
      <div className="footer-sec3">
        <p>Contacts:</p>
        <p>PA, (555)555-5000</p>
        <p>NY, (555)555-5000</p>
        <p>NJ, (555)555-5000</p>
        <p>You can also find us on <br/>Doordash and UberEats</p>
      </div>
    </div>
  )
}

export default Footer