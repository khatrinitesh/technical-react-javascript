import React, { useState } from 'react';

const WithComp = () => {
  return (
    <>
      <UpdateArrayExample/>
    </>
  );
}

export default WithComp;

function UpdateArrayExample(){
    const [fruits,setFruits] = useState(['apple','banana','watermelon'])

    const updatedFruits = () => {
        const updatedFruits = fruits.map((fruit => fruit + ' (fresh) '))
        setFruits(updatedFruits)
    }
    return(
        <>
        <h1>Fruits: {JSON.stringify(fruits)}</h1>
        <button onClick={updatedFruits} >updated fruits</button>
        </>
    )
}
