import React from 'react'

const FlatMapComp = () => {



  return (
    <>
    <UserHobbies/>
    </>
  )
}

export default FlatMapComp

const UserHobbies = () =>{
  const users = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Hiking'] },
    { id: 2, name: 'Bob', hobbies: ['Gaming', 'Cooking'] },
    { id: 3, name: 'Charlie', hobbies: ['Gardening'] },
  ]

  const allHobbies = users.flatMap((val) => val.hobbies)
  return(
    <>
    {allHobbies.map((val) =>(
      <>
       <div key={val.id}>
        <h3>{val}</h3>
       </div>
      </>
    ))}
    </>
  )
}



