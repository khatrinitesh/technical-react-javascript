import React, { useState } from "react";

const ToReversedComp = () => {
  return (
    <>
    <ReverseArrayExample/>
    </>
  );
};

export default ToReversedComp;

function ReverseArrayExample(){
    const [numbers] = useState([1, 2, 3, 4, 5]); // Original array

     // Create a reversed array using toReversed()
    const reversedNumbers = numbers.toReversed(); // New reversed array
    return(
        <>
        <h1>Original Array: {JSON.stringify(numbers)}</h1>
        <h1>Reversed Array: {JSON.stringify(reversedNumbers)}</h1>
        </>
    )
}
