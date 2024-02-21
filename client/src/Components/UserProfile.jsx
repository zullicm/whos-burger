import React from "react";

function UserProfile({user}){
  const {id, email, first_name, last_name, image_url} = user
  return(
    <div>
      <p>{`Welcome back, ${first_name}!`}</p>
      <img src={image_url}/>
    </div>
  )
}

export default UserProfile