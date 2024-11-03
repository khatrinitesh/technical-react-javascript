import React from 'react'

const ForEachComp = () => {



  return (
    <>
    <UsersList/>
    </>
  )
}

export default ForEachComp

const UsersList = () =>{
    const users = [
        { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    ]

    const logUserNames = () =>{
        users.forEach((user) =>{
            console.log(user)
        })
    }
    logUserNames();
    return(
        <>
        <h2 style={{color:'red',fontWeight:'bold'}}>User list</h2>
        {users.map((user) =>(
            <>
            <h2 key={user.id}>{user.name}</h2>
            </>
        ))}
        </>
    )
}



