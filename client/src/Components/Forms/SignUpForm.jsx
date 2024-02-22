import React, {useState, useContext} from "react";
import { UserContext } from "../../Context/user";

function SignUpForm({changeForm}){
  const {user, setUser} = useContext(UserContext)
  const [show, setShow] = useState("password")
  const [formData, setFormData] = useState(
    {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      image: ""
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

    const userData = new FormData()
    userData.append("user[first_name]", formData.first_name)
    userData.append("user[last_name]", formData.last_name)
    userData.append("user[email]", formData.email)
    userData.append("user[password]", formData.password)
    userData.append("user[password_confirmation]", formData.password_confirmation)
    userData.append("user[image]", formData.image)
    fetch("/users", {
      method: "POST",
      body: userData,
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
      <label className="left">First Name: </label>
      <input 
          id="first-name" 
          name="first-name" 
          placeholder="John" 
          type="text"
          value={formData.first_name}
          onChange={(e) => setFormData({
            ...formData, 
            first_name: e.target.value
          })}
          ></input>
      <label className="left"> Last Name: </label>
      <input 
          id="last-name" 
          name="last-name" 
          placeholder="Doe" 
          type="text"
          value={formData.last_name}
          onChange={(e) => setFormData({
            ...formData,
            last_name: e.target.value
          })}
          ></input>
          <br/>
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
        <label className="left"> Confirm Password</label>
        <input 
          name="password-confirmation" 
          placeholder="Confirm Password" 
          type={show}
          value={formData.password_confirmation}
          onChange={(e) => setFormData({
            ...formData,
            password_confirmation: e.target.value
          })}
          ></input>
          <br/>
        <button onClick={e => showPass(e)}>SHOW PASSWORD?</button>
        <br/>
      <label>Profile Image: </label>
      <input
      id="image"
      type="file"
      accept="image/*"
      onChange={(e) => setFormData({
        ...formData,
        image: e.target.files[0]
      })
      }>
      </input>
      <br/>
      <button onClick={e => handleSubmit(e)}>SIGN UP</button>
      <br/>
      <p>Already have an account?</p>
      <button onClick={() => changeForm(true)}>Login</button>
    </div>
  )
}

export default SignUpForm