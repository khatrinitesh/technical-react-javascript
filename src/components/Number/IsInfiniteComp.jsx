import React from 'react';
import { useState } from 'react';

const IsInfiniteComp = () => {
  return (
    <>
      <IsFiniteExample />
    </>
  );
}

export default IsInfiniteComp;

function IsFiniteExample(){
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(null);

    const handleCheckValue = () => {
        // Check if the input value is a finite number
        const isNumberFinite = Number.isFinite(Number(inputValue)); // Convert to number and check
        setIsValid(isNumberFinite);
      };

  return(
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <br />
      <button onClick={handleCheckValue}>Check if Finite Number</button>
      {isValid === null ? null : (
        <p>{isValid ? "Valid finite number" : "Invalid value, not a finite number"}</p>
      )}
    </>
  )
}
