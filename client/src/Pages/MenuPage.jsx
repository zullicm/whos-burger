import React, {useRef} from "react";
import BurgerImage from '../Assets/Burger black.png'
import ComboImage from '../Assets/Combos black.png'
import ShakeImage from '../Assets/Shakes black.png'
import SideImage from "../Assets/Sides black.png"
import DrinkImage from "../Assets/Drinks black.png"
import Modal from "../Modals/Modal";
import MenuSection from "../Components/MenuSection";
import MenuOptionsBar from "../Components/MenuOptionsBar";

function MenuPage(){
  const burgerRef = useRef()
  const comboRef = useRef()
  const sideRef = useRef()
  const drinkRef = useRef()
  const shakeRef = useRef()

  const burgers = ["Plain Cheeseburger", "Plain Burger", "Bacon Burger", "Santa Fe Burger", "Taco Burger"]
  const combos = ["Burger w/ Drink & Side", "Burger w/ Shake & Side", "Burger & Side", "Burger & Drink", "Burger & Shake", ]
  const sides = ["French Fries","Onion Rings", "Fried Pickles", "Corn Fritters", "Fried Mac & Cheese Bites"]
  const drinks = ["Soft Drink's", "Lemonade's", "Powerade's", "Ice Tea's", "Water"]
  const shakes = ["Vanilla", "Chocolate", "Swirl", "Cookie's & Cream", "Root Beer Float", "Strawberry",]

  return(
    <div className="menu">
      <MenuOptionsBar 
      burgerRef={burgerRef}  
      comboRef={comboRef}
      sideRef={sideRef}
      drinkRef={drinkRef}
      shakeRef={shakeRef}
      />
      <MenuSection title="Burger's" foods={burgers} img={BurgerImage} scroll={burgerRef} />
      <MenuSection title="Combo's" foods={combos} img={ComboImage} scroll={comboRef} />
      <MenuSection title="Side's" foods={sides} img={SideImage} scroll={sideRef} />
      <MenuSection title="Drink's" foods={drinks} img={DrinkImage} scroll={drinkRef} />
      <MenuSection title="Shake's" foods={shakes} img={ShakeImage} scroll={shakeRef} />
      {/* <Modal /> */}
    </div>
  )
}

export default MenuPage