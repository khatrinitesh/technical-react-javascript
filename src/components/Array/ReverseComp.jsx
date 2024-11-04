import React, { useState }  from 'react';

const ReverseComp = () => {
   

  return (
    <>
    <ReverseString/>
    </>
  );
}

export default ReverseComp;

function ReverseString(){

    const [input] = useState('hello');

    const reversedString = input.split('').reverse().join('');
    return(
        <>
         <h1>Original String: {input}</h1>
         <h1>Reversed String: {reversedString}</h1>
        </>
    )
}

function ReverseExample2(){
    const [fruits] = useState(['mango','apple','watermelon','grape','cherry'])

    const reverseFruits = [...fruits].reverse();
    return(
        <>
        <h2>Original Fruits: {JSON.stringify(fruits)}</h2>
        <h2>Reverse Fruits: {JSON.stringify(reverseFruits)}</h2>
        </>
    )
}

function ReverseExample() {
    const [numbers] = useState([1, 2, 3, 4, 5]); // Original array

    // Create a reversed copy of the array
    const reversedNumbers = [...numbers].reverse(); // Using spread operator to avoid mutating state

    return(
        <>
        <h1>Original Array: {JSON.stringify(numbers)}</h1>
        <h1>Reversed Array: {JSON.stringify(reversedNumbers)}</h1>
        </>
    )
}
