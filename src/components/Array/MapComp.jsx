import React, { useState } from 'react'

const MapComp = () => {

  return (
    <>
    <MapExample/>
    </>
  )
}

export default MapComp

const MapExample = () => {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

    const fruitItems = fruits.map((fruit,index) =>(
        <>
         <div key={index}>{fruit}</div>
        </>
    ))
    return(
        <>
         <ul>
            {fruitItems}
         </ul>
        </>
    )
}
