import React from "react";
import BurgerCard from "../Components/BurgerCard";
import BurgerSign from '../Assets/Burger Sign.jpg'
import Modal from "../Modals/Modal";

function MenuPage(){
  const burgers = ["Plain Cheeseburger", "Plain Burger", "Bacon Burger", "Santa Fe Burger", "Taco Burger"]
  return(
    <div className="menu" >
      <h3>Menu</h3>
      <p>Burgers</p>
      <div className="burger-container">
      {burgers.map(burger => <BurgerCard key={burger} burger={burger} picture={BurgerSign} />)}
      </div>
      {/* <Modal /> */}
    </div>
  )
}

export default MenuPage