import React, { useState } from 'react';

const ToSplicedComp = () => {
  return (
    <>
      <SpliceArrayExample/>
    </>
  );
}

export default ToSplicedComp;

function SpliceArrayExample(){
    const [fruits] = useState(['Apple', 'Banana', 'Cherry', 'Date']); // Original array

    // Create a new array by removing the second fruit and adding a new one
    const modifiedFruits = fruits.toSpliced(1, 1, 'Mango'); // Remove 'Banana' and add 'Mango'
    return(
        <>
        <h1>Original Array: {JSON.stringify(fruits)}</h1>
        <h1>Modified Array: {JSON.stringify(modifiedFruits)}</h1>
        </>
    )
}
