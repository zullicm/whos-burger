import React from "react";

function MenuOptionsBar({burgerRef, comboRef, sideRef , drinkRef, shakeRef}){


  return(
    <div>
      <ul>
        <li>
          <button onClick={() => { 
            burgerRef.current?.scrollIntoView({
              behavior: 'smooth'
            })}}>
              Burger's
            </button>
        </li>
        <li>
          <button onClick={() => { 
            comboRef.current?.scrollIntoView({
              behavior: 'smooth'
            })}}>
              Combo's
            </button>
        </li>
        <li>
          <button onClick={() => { 
            sideRef.current?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
              Side's
            </button>
        </li>
        <li>
          <button onClick={() => { 
            drinkRef.current?.scrollIntoView({
              behavior: 'smooth'
            })}}>
              Drink's
            </button>
        </li>
        <li>
          <button onClick={() => { 
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