import React, { useState } from 'react';

const AcosComp = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(null);
  
    const handleChange = (e) => {
      const inputValue = parseFloat(e.target.value);
      if (inputValue >= -1 && inputValue <= 1) {
        setValue(inputValue);
        setResult(Math.acos(inputValue));
      } else {
        setResult("Value must be between -1 and 1.");
      }
    };
   
  return (
    <>
      <h1>Arccosine Calculator</h1>
      <input
        type="number"
        step="0.01"
        min="-1"
        max="1"
        value={value}
        onChange={handleChange}
      />
      <p>
        The arccosine (inverse cosine) of {value} is:{" "}
        {result === null ? "Enter a value" : result}
      </p>
    </>
  );
}

export default AcosComp;

