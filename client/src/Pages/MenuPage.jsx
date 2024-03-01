import React from "react";
import MenuItem from "../Components/MenuItem";
import BurgerImage from '../Assets/Burger black.png'
import ShakeImage from '../Assets/Shakes black.png'
import Modal from "../Modals/Modal";

function MenuPage(){
  const burgers = ["Plain Cheeseburger", "Plain Burger", "Bacon Burger", "Santa Fe Burger", "Taco Burger"]
  
  const sides = ["Vanilla", "Chocolate", "Swirl", "Cookie's & Cream", "Root Beer Float", "Strawberry",]

  return(
    <div className="menu">
      <h3>Menu</h3>
      <h1>Burgers</h1>
      <div className="menu-section-container">
        {burgers.map(burger => <MenuItem key={burger} name={burger} picture={BurgerImage} />)}
      </div>
      <h1>Shakes</h1>
      <div className="menu-section-container">
        {sides.map(sides => <MenuItem key={sides} name={sides} picture={ShakeImage} />)}
      </div>
      {/* <Modal /> */}
    </div>
  )
}

export default MenuPage