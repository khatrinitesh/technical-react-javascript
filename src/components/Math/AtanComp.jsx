import React, { useState } from 'react';

const AtanComp = () => {

    const [value, setValue] = useState(0);
    const [result, setResult] = useState(null);
  
    const handleChange = (e) => {
      const inputValue = parseFloat(e.target.value);
      setValue(inputValue);
      setResult(Math.atan(inputValue)); // Calculate atan of input value
    };
  return (
    <>
       <h1>Arctangent Calculator</h1>
      <input
        type="number"
        step="0.01"
        value={value}
        onChange={handleChange}
      />
      <p>
        The arctangent (atan) of {value} is: {result}
      </p>
    </>
  );
}

export default AtanComp;
