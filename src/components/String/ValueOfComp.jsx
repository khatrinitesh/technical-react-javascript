import React from 'react';
import { useState } from 'react';

const ValueComp = () => {
  return (
    <>
      <ValueOfExample />
    </>
  );
}

export default ValueComp;

function IsFiniteExample(){
    const [inputText, setInputText] = useState('');
    const [primitiveValue, setPrimitiveValue] = useState('');

    const handleGetPrimitiveValue = () => {
        const strObject = new String(inputText);  // Creating a String object
        const primitiveStr = strObject.valueOf();  // Extracting the primitive value
        setPrimitiveValue(primitiveStr);
    };

  return(
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
      />
      <br />
      <button onClick={handleGetPrimitiveValue}>Get Primitive Value</button>
      <p>Primitive Value: "{primitiveValue}"</p>
    </>
  )
}
