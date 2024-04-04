import React from "react";
import BurgerImage from '../Assets/Burger black.png'
import ComboImage from '../Assets/Combos black.png'
import ShakeImage from '../Assets/Shakes black.png'
import SideImage from "../Assets/Sides black.png"
import DrinkImage from "../Assets/Drinks black.png"
import Modal from "../Modals/Modal";
import MenuSection from "../Components/MenuSection";

function MenuPage(){
  const burgers = ["Plain Cheeseburger", "Plain Burger", "Bacon Burger", "Santa Fe Burger", "Taco Burger"]
  const combos = ["Burger w/ Drink & Side", "Burger w/ Shake & Side", "Burger & Side", "Burger & Drink", "Burger & Shake", ]
  const sides = ["French Fries","Onion Rings", "Fried Pickles", "Corn Fritters", "Fried Mac & Cheese Bites"]
  const drinks = ["Soft Drink's", "Lemonade's", "Powerade's", "Ice Tea's", "Water"]
  const shakes = ["Vanilla", "Chocolate", "Swirl", "Cookie's & Cream", "Root Beer Float", "Strawberry",]

  return(
    <div className="menu">
      <h3>Menu</h3>
      <MenuSection title="Burger's" foods={burgers} img={BurgerImage} />
      <MenuSection title="Combo's" foods={combos} img={ComboImage} />
      <MenuSection title="Side's" foods={sides} img={SideImage} />
      <MenuSection title="Drink's" foods={drinks} img={DrinkImage} />
      <MenuSection title="Shake's" foods={shakes} img={ShakeImage} />
      {/* <Modal /> */}
    </div>
  )
}

export default MenuPage