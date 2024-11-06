import React, { useState } from 'react'

const CreateComp = () => {
    const [user,setUser] = useState({
        name:'test',
        age:34
    });

    const newUser = Object.create(user);

    newUser.name = 'sachin' // modify the new 
    newUser.age = 45
  return (
    <>
      <h1>Original user: {user.name}, {user.age}</h1>
      <h1>New user: {newUser.name}, {newUser.age}</h1>
    </>
  )
}

export default CreateComp
