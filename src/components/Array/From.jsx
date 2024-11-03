import React from 'react'

const FromComp = () => {



  return (
    <>
    <StringToArray/>
    </>
  )
}

export default FromComp


const StringToArray = () =>{

    const myString = 'hello world';

    const charArray = Array.from(myString)
    return(
        <>
            <h2>Character Array</h2>
            <ul>
                {charArray.map((char,index) =>(
                    <>
                    <li key={index}>{char}</li>
                    </>
                ))}
            </ul>
        </>
    )
}





