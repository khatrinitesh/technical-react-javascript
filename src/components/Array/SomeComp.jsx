import React, { useState }  from 'react';

const SomeComp = () => {
  return (
    <>
    <SomeExample/>
    </>
  );
}

export default SomeComp;


function SomeExample(){
    const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Original array

    const hasEvenNumber = [...numbers].some(num => num % 2 === 0)  // Check if any number is even
    return(
        <>
         <h1>Original Array: {JSON.stringify(numbers)}</h1>
         <h1>Sliced Array: {JSON.stringify(hasEvenNumber)}</h1>
        </>
    )
}
