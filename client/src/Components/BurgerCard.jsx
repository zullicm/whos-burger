import React from "react";

function BurgerCard({burger, picture}){

  return(
    <div className="burger-card">
      <img src={picture} />
    </div>
  )
}

export default BurgerCard