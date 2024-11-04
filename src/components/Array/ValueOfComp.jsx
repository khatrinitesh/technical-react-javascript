import React, { useState } from 'react';

const ValueOfComp = () => {
  return (
    <>
      <ValueOfArrayExample/>
    </>
  );
}

export default ValueOfComp;


function ValueOfArrayExample(){
    const [fruits, setFruits] = useState(['Banana', 'Cherry', 'Date']); // Initial array

    const fruitsValue = fruits.valueOf();
    return(
        <>
            <h1>Fruits Array: {JSON.stringify(fruits)}</h1>
            <h1>Value of Fruits: {JSON.stringify(fruitsValue)}</h1>
        </>
    )
}
