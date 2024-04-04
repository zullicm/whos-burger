import React from "react";
import MenuItem from "./MenuItem";

function MenuSection({title, foods, img}){

  return(
    <>
      <h1>{title}</h1>
      <div className="menu-section-container">
        {foods.map(food => <MenuItem key={food} name={food} picture={img} />)}
      </div>
    </>
  )
}

export default MenuSection