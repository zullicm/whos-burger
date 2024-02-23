import React, { useEffect, useState } from "react";

function CreateBurger(){
  const [lettuce, setLettuce] = useState(false)
  const [tomato, setTomato] = useState(false)
  const [pickles, setPickles] = useState(false)
  const [onion, setOnion] = useState(false)
  const [burgers, setBurgers] = useState([])
  


  useEffect(() =>{
    fetch('/burgers')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          setBurgers(user)
        })
      }
    })
  },[])


  function handleSubmit(){
    const ingredients = [
      lettuce? "lettuce" : null,
      tomato? "tomato" : null,
      pickles? "pickles" : null,
      onion? "onion" : null,
    ]
    console.log(ingredients.filter(ingredient => ingredient !== null))
    const burger = new FormData
    burger.append("burger[ingredients]", ingredients)
    burger.append("burger[price]", 10.00)

    fetch("/burgers", {
      method: "POST",
      body: burger,
    })
    .then(r => {
      if(r.ok){
        r.json().then(data => console.log(data))
      }else{
        r.json().then(e => console.log(e))
      }
    })
  }

  return(
    <div>
      <p>Create Burger</p>
      <label>
        <input 
        type="checkbox"
        checked={lettuce}
        onChange={()=>setLettuce(!lettuce)}
        />
        lettuce?
      </label>
      <label>
        <input 
        type="checkbox"
        checked={tomato}
        onChange={()=>setTomato(!tomato)}
        />
        tomato?
      </label>
      <label>
        <input 
        type="checkbox"
        checked={pickles}
        onChange={()=>setPickles(!pickles)}
        />
        pickles?
      </label>
      <label>
        <input 
        type="checkbox"
        checked={onion}
        onChange={()=>setOnion(!onion)}
        />
        onion?
      </label>
      <br/>
      <button onClick={handleSubmit}>Create Burger</button>
      <br/>
      
    </div>
  )
}

export default CreateBurger