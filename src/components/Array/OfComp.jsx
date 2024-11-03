import React, { useState } from 'react'

const OfComp = () => {

  return (
    <>
    <Example/>
    </>
  )
}

export default OfComp

const Example = () => {
    const fruits = Array.of('Apple', 'Banana', 'Cherry', 'Date')


    return(
        <>
        <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
        </>
    )
}

