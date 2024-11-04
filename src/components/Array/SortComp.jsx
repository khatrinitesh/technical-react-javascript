import React, { useState }  from 'react';

const SortComp = () => {
  return (
    <>
    <SortString/>
    </>
  );
}

export default SortComp;

function SortString(){
    const [fruits, setFruits] = useState(['banana', 'apple', 'orange', 'grape']); // Example array of strings

    const sortFruits = () => {
        const sortedFruits = [...fruits].sort();
        setFruits(sortedFruits)
    }
    return(
        <>
         <h1>Fruits: {JSON.stringify(fruits)}</h1>
         <button onClick={sortFruits}>Sort Fruits</button>
        </>
    )
}

function SortNum(){
    const [numbers, setNumbers] = useState([5, 3, 8, 1, 2]); // Example array of numbers

    const sortNumbers = () => {
        const sortedNumbers = [...numbers].sort((a, b) => a - b); // Sort in ascending order
        setNumbers(sortedNumbers); // Update the state with the sorted array
      };
    return(
        <>
        <h1>Numbers: {JSON.stringify(numbers)}</h1>
        <button onClick={sortNumbers}>Sort Numbers</button>
        </>
    )
}

