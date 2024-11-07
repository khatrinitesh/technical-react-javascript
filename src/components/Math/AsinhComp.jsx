import React, { useState } from 'react';

const AcoshComp = () => {
    const [value, setValue] = useState(0);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    setValue(inputValue);
    setResult(Math.asinh(inputValue)); // Calculate asinh of input value
  };


   
  return (
    <>
     <h1>Hyperbolic Arcsine Calculator</h1>
      <input
        type="number"
        step="0.01"
        value={value}
        onChange={handleChange}
      />
      <p>
        The hyperbolic arcsine (asinh) of {value} is: {result}
      </p>
    </>
  );
}

export default AcoshComp;

