import React, { useState } from 'react';

const ToStringComp = () => {
    // const [number, setNumber] = useState(12345); // Initial number
    // const [formattedString, setFormattedString] = useState("");

    // const handleConvert = () => {
    //     const stringRepresentation = number.toString(); // Convert number to string
    //     setFormattedString(stringRepresentation);
    //   };


  return (
    <>
     {/* <h2>Convert Number to String</h2>
      <p>Original Number: {number}</p>
      <p>String Representation: {formattedString}</p>
      
      <button onClick={handleConvert}>Convert to String</button> */}
      <ToStringRadixExample/>
    </>
  );
}

export default ToStringComp;

const ToStringRadixExample = () => {
    const [number, setNumber] = useState(255); // Initial number
    const [radix, setRadix] = useState(16); // Default to hexadecimal (base 16)
    const [formattedString, setFormattedString] = useState("");
  
    const handleConvert = () => {
      const stringRepresentation = number.toString(radix); // Convert number to string with specified radix
      setFormattedString(stringRepresentation);
    };
  
    return (
      <div>
        <h2>Convert Number to String with Radix</h2>
        <p>Original Number: {number}</p>
  
        <label>
          Choose Base:
          <select value={radix} onChange={(e) => setRadix(Number(e.target.value))}>
            <option value="2">Binary (Base 2)</option>
            <option value="8">Octal (Base 8)</option>
            <option value="10">Decimal (Base 10)</option>
            <option value="16">Hexadecimal (Base 16)</option>
          </select>
        </label>
  
        <p>String Representation (Base {radix}): {formattedString}</p>
        <button onClick={handleConvert}>Convert</button>
      </div>
    );
  };
