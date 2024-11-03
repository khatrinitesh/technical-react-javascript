import React from 'react'

const LastIndexOfComp = () => {

  return (
    <>
    <LastIndexOfExample/>
    </>
  )
}

export default LastIndexOfComp

const LastIndexOfExample = () => {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Apple', 'Date', 'Cherry'];

     // Fruit to search for
  const fruitToFind = 'Cherry';

  const lastIndexOfFruit = fruits.lastIndexOf(fruitToFind)
    return(
        <>
        {fruits.map((val,index) =>(
            <>
            <div key={index}>{val}</div>
            </>
        ))}
        {lastIndexOfFruit !== -1 ? `${lastIndexOfFruit} is last index number & ${fruitToFind} is last found at position` : `${fruitToFind} is not in the list.`}
        </>
    )
}