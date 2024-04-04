import React from "react";
import MenuItem from "./MenuItem";

function MenuSection({title, foods, img, scroll}){

  return(
    <>
      <h1>{title}</h1>
      <div className="menu-section-container">
        {foods.map(food => <MenuItem key={food} name={food} picture={img} scroll={scroll} />)}
      </div>
    </>
  )
}

export default MenuSection