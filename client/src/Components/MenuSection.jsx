import React from "react";
import MenuItem from "./MenuItem";

function MenuSection({title, foods, img, scroll}){
  const popularItems = []
    for (let index = 0; index < img.length; index++) 
      {popularItems.push(<MenuItem key={foods[index]} name={foods[index]} picture={img[index]} />)}
  
  return(
    <>
      <h1 className="menu-section-header" ref={scroll}>{title}</h1>
      <div className="menu-section-container">
        { Array.isArray(img) ? popularItems.map(item => item) : foods.map(food => <MenuItem key={food} name={food} picture={img} />)}
      </div>
    </>
  )
}

export default MenuSection