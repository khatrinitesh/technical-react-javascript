
import React, { useState } from 'react';

const AssignComp = () => {


    // const [user,setUser] = useState({
    //     name:'nitesh',
    //     age:25,
    // })

    // const updatedHandle = () => {
    //     const updatedUser = Object.assign({},user,{age:35,location:'usa'})
    //     setUser(updatedUser)
    // }

  return (
    <>
      {/* <h2>
        Name: {user.name}
        <br />
        Age: {user.age}
        <br />
        Location: {user.location}
        <br />
        <hr/>
        <button onClick={updatedHandle}>Clicked</button>
      </h2> */}
      <MergedObjectExample/>
    </>
  );
}

export default AssignComp;


const MergedObjectExample = () => {
    const [settings,setSettings] = useState({
        theme:'light',
        language:'English'
    })

    const updatedSettings = () => {
        const updatedChange = Object.assign({},settings,{theme:'dark',language:'arabic'})
        setSettings(updatedChange)
    }
    return(
        <>
         <span>{settings.theme}</span> 
         <br />
         <span>{settings.language}</span>
         <hr/>
         <button onClick={updatedSettings}>Click</button>
        </>
    )
}