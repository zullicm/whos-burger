import React, { useState, useContext } from "react";
import { UserContext } from "../Context/user";

function LoginForm({changeForm}){
  const [show, setShow] = useState("password")
  const {user, setUser} = useContext(UserContext)
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    }
  )

  function getUsers(){
    fetch('/users')
    .then(res => res.json())
    .then(users => console.log(users))
  }
  

  function showPass(e){
    e.preventDefault();
    if(show === "password"){
      setShow("text")
    }else{
      setShow("password")
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(r => {
      if(r.ok){
        r.json().then(data => setCurrentUser(data))
      }else{
        r.json().then(e => handleError(e))
      }
    })
  }


  function setCurrentUser(user){
    setUser(user)
    console.log("OKAY")
  }

  function handleError(e){
    console.log(e)
    console.log("NOT OKAY")
  }


  return(
    <div>
      <button onClick={getUsers}>All Users</button>
      
        <label className="left">Email: </label>
      <input 
          id="email" 
          name="email" 
          placeholder="johndoe@gmail.com" 
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({
            ...formData,
            email: e.target.value
            }
          )}
          ></input>
          <br/>
          <label className="left">Password</label>
        <input 
          name="password" 
          placeholder="Password" 
          type={show}
          value={formData.password}
          onChange={(e) => setFormData({
            ...formData,
            password: e.target.value
          })}
          ></input>
          <br/>
        <button onClick={e => showPass(e)}>SHOW PASSWORD?</button>
      <br/>
      <button onClick={e => handleSubmit(e)}>Login</button>
      <br/>
      <p>Already have an account?</p>
    <button onClick={() => changeForm(false)}>Sign Up</button>
    </div>
  )
}

export default LoginForm