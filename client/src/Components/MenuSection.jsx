import React from "react";
import MenuItem from "./MenuItem";

function MenuSection({title, foods, img, scroll}){

  return(
    <>
      <h1 className="menu-section-header" ref={scroll}>{title}</h1>
      <div className="menu-section-container">
        {foods.map(food => <MenuItem key={food} name={food} picture={img} />)}
      </div>
    </>
  )
}

export default MenuSection