import React from "react";
import MenuSection from "./MenuSection";
import BurgerImage from '../Assets/Burger black.png'
import ShakeImage from '../Assets/Shakes black.png'
import DrinkImage from "../Assets/Drinks black.png"

function PopularSection(){
  const popularItems = ["Bacon Burger", "Lemonade's", "Swirl"]
  const popularImgs = [BurgerImage, DrinkImage, ShakeImage]

  return(
    <div>
      <MenuSection title="Popular Items" foods={popularItems} img={popularImgs} scroll={null} />
    </div>
  )
}

export default PopularSection