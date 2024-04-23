import React from "react";

function MenuOptionsBar({burgerRef, comboRef, sideRef , drinkRef, shakeRef}){


  return(
    <div className="menu-options-bar">
      <h2>Menu</h2>
      <ul className="options-bar">
        <li>
          <button id="burger-button" onClick={() => { 
            burgerRef.current?.scrollIntoView({
              behavior: 'smooth'
            })}}>
              Burger's
            </button>
        </li>
        <li>
          <button id="combo-button" onClick={() => { 
            comboRef.current?.scrollIntoView({
              behavior: 'smooth'
            })}}>
              Combo's
            </button>
        </li>
        <li>
          <button id="side-button" onClick={() => { 
            sideRef.current?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
              Side's
            </button>
        </li>
        <li>
          <button id="drink-button" onClick={() => { 
            drinkRef.current?.scrollIntoView({
              behavior: 'smooth'
            })}}>
              Drink's
            </button>
        </li>
        <li>
          <button id="shake-button" onClick={() => { 
            shakeRef.current?.scrollIntoView({
              behavior: 'smooth'
            })}}>
              Shake's
            </button>
        </li>
      </ul>
    </div>
  )
}

export default MenuOptionsBar

// buger - combo - side - drink - shake