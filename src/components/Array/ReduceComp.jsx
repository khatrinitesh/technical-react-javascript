import React, { useState } from 'react';

const ReduceComp = () => {
    const [numbers] = useState([1, 2, 3, 4, 5]); // Example array of numbers

    const sum = numbers.reduce((accmulator,currentValue) => {
        return accmulator + currentValue;
    },0);

  return (
    <>
       <CountCurrences/>  
    </>
  );
}

export default ReduceComp;

function CountCurrences(){
    const [fruits] = useState(['apple', 'banana', 'apple', 'orange', 'banana', 'banana']);

    const fruitCount = fruits.reduce((acc,fruit) => {
        acc[fruit] = acc[fruit || 0] + 1
        return acc;
    },{});
    return(
        <>
        <h1>Fruit count:</h1>
        <pre>{JSON.stringify(fruitCount,null,2)}</pre>
        </>
    )
}
