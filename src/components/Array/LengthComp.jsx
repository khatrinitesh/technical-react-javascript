import React, { useState } from 'react'

const LengthComp = () => {

  return (
    <>
    <LengthCompExample/>
    </>
  )
}

export default LengthComp

const LengthCompExample = () => {
    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry']);

    const addFruit = () => {
        setFruits([...fruits,'New Fruit'])
    }
    return(
        <>
         <h2>Fruit List</h2>
      <ul>
        {fruits.map((fru
        
        it, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <p>Number of fruits: {fruits.length}</p>
      <button onClick={addFruit}>Add</button>
        </>
    )
}
