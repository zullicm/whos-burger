import React, { useContext, useState } from "react";
import { UserContext } from "../Context/user";
import UserProfile from "../Components/UserProfile";
import LoginForm from "../Components/Forms/LoginForm";
import SignUpForm from "../Components/Forms/SignUpForm";

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

