import React from "react";

function MenuItem({name, picture, scroll}){

  return(
    <div ref={scroll} className="menu-item">
      <div className="menu-image">
        <img src={picture} />
      </div>
      <div className="menu-item-short">
        <div className="text-a-left">{name}</div>
        <div className="text-a-right">PRICE</div>
      </div>
    </div>
  )
}

export default MenuItem