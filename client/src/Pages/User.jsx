import React, { useContext, useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import { UserContext } from "../Context/user";
import UserProfile from "../Components/UserProfile";

function User(){
  const [form, setForm] = useState(false)
  const {user} = useContext(UserContext)
  console.log(user)
  return(
    <>
      {user ? <UserProfile user={user} /> : form?<LoginForm changeForm={setForm}/>:<SignUpForm changeForm={setForm}/> }
      
    </>
  )
}

export default User

