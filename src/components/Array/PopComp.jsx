import React, { useState } from 'react'

const PopComp = () => {

  return (
    <>
    <PopExample/>
    </>
  )
}

export default PopComp


const PopExample = () => {
    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry', 'Date']);
  
    const removeLastFruit = () => {
      setFruits((prevFruits) => {
        const newFruits = [...prevFruits]
        const removedLastElement = newFruits.pop()
        console.log(removedLastElement);
        return newFruits
      })
    };
  
    return (
      <div>
        <h2>Fruit List</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <button onClick={removeLastFruit}>Remove Last Fruit</button>
      </div>
    );
  };



