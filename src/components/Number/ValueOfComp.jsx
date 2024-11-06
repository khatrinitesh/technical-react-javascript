import React, { useState } from 'react';

const ValueOfComp = () => {
    const [number, setNumber] = useState(789); // Initial primitive number
    const [primitiveValue, setPrimitiveValue] = useState(null); // Store the primitive value
  
    const handleConvert = () => {
      // Calling valueOf() on the primitive number
      const value = number.valueOf(); // Even for a primitive number, valueOf() returns the number itself
      setPrimitiveValue(value);
    };
  return (
    <>
      <h2>Using valueOf() on Primitive Number</h2>
      <p>Original Number: {number}</p>
      <p>Primitive Value: {primitiveValue}</p>

      <button onClick={handleConvert}>Get Primitive Value</button>
    </>
  );
}

export default ValueOfComp;