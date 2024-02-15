import React, { useState } from "react";

function User(){
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [image, setImage] = useState("")
  const [show, setShow] = useState("password")

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
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
        image: image
      }),
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
    console.log(user)
  }

  function handleError(e){
    console.log(e)
  }

  return(
    <div>
      <button onClick={getUsers}>All Users</button>
      <label className="left">First Name: </label>
      <input 
          id="first-name" 
          name="first-name" 
          placeholder="John" 
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          ></input>
      <label className="left"> Last Name: </label>
      <input 
          id="last-name" 
          name="last-name" 
          placeholder="Doe" 
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          ></input>
          <br/>
        <label className="left">Email: </label>
      <input 
          id="email" 
          name="email" 
          placeholder="johndoe@gmail.com" 
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br/>
          <label className="left">Password</label>
        <input 
          name="password" 
          placeholder="Password" 
          type={show}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br/>
        <label className="left"> Confirm Password</label>
        <input 
          name="password-confirmation" 
          placeholder="Confirm Password" 
          type={show}
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
          <br/>
        <button onClick={e => showPass(e)}>SHOW PASSWORD?</button>
        <br/>
      <label>Profile Image: </label>
      <input
      id="image"
      type="file"
      accept="image/*"
      onChange={(e) => {
        setImage(e.target.files[0])
        console.log(e.target.files[0])
        }
      }>
      </input>
      <button onClick={e => handleSubmit(e)}>SIGN UP</button>
    </div>
  )
}

export default User

// "first_name"
// "last_name"
// "email"
// "password_digest"