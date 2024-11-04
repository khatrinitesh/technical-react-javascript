import React, { useState } from 'react';

const ToStringComp = () => {
  return (
    <>
      <ArrayToStringExample/>
    </>
  );
}

export default ToStringComp;

function ArrayToStringExample(){
    const [fruits] = useState(['Apple', 'Banana', 'Cherry', 'Date']); // Original array

      // Convert the array to a string using join
    const modifiedFruits = fruits.toString(); /// "Apple | Banana | Cherry | Date"
    return(
        <>
        <h1>Original Array: {JSON.stringify(fruits)}</h1>
        <h1>Modified Array: {JSON.stringify(modifiedFruits)}</h1>
        </>
    )
}
