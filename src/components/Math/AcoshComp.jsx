import React, { useState } from 'react';

const AcoshComp = () => {
    const [value, setValue] = useState(1);
    const [result, setResult] = useState(0);

  const handleChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    if (inputValue >= 1) {
      setValue(inputValue);
      setResult(Math.acosh(inputValue));
    } else {
      setResult('Value must be greater than or equal to 1.');
    }
  };

   
  return (
    <>
     <h1>Inverse Hyperbolic Cosine Calculator</h1>
      <input
        type="number"
        step="0.01"
        min="1"
        value={value}
        onChange={handleChange}
      />
      <p>
        The inverse hyperbolic cosine (acosh) of {value} is: {result}
      </p>
    </>
  );
}

export default AcoshComp;

