import React from 'react';
import { useState } from 'react';

const IsIntegerComp = () => {
  return (
    <>
      <IsIntegerExample />
    </>
  );
}

export default IsIntegerComp;

function IsIntegerExample(){
    const [inputValue, setInputValue] = useState('');
    const [isInteger, setIsInteger] = useState(null);
  
    const handleCheckValue = () => {
      // Check if the value is an integer
      const isInt = Number.isInteger(Number(inputValue)); // Convert input to number
      setIsInteger(isInt);
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
      <button onClick={handleCheckValue}>Check if Integer</button>
      {isInteger === null ? null : (
        <p>{isInteger ? "Valid integer" : "Invalid value, not an integer"}</p>
      )}
    </>
  )
}
