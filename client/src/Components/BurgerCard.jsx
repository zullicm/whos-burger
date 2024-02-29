import React from "react";

function BurgerCard({burger, picture}){

  return(
    <div className="burger-card">
      <div className="menu-image">
        <img src={picture} />
      </div>
      <div className="burger-short">
        <div className="text-a-left">{burger}</div>
        <div className="text-a-right">PRICE</div>
      </div>
    </div>
  )
}

export default BurgerCard