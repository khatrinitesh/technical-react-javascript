import React, { useState } from "react";

const ToFixedComp = () => {
  const [number, setNumber] = useState(0.4444);
  const [fixedResult, setFixedResult] = useState(""); // Store the fixed number result
  const [decimalPlaces, setDecimalPlaces] = useState(2); // Default to 2 decimal places

  const handleConvert = () => {
    const parsedNumber = parseFloat(number); // Parse the input number
    if (!isNaN(parsedNumber)) {
      // Use toFixed() to round the number to the specified decimal places
      setFixedResult(parsedNumber.toFixed(decimalPlaces));
    } else {
      setFixedResult("Invalid number");
    }
  };

  return (
    <>
      <h2>Fixed Decimal Conversion</h2>
      <p>Original Decimal Number: {number}</p>
      <p>Modified Fixed Number: {fixedResult}</p>
      <input
        type="number"
        value={decimalPlaces}
        onChange={(e) => setDecimalPlaces(parseInt(e.target.value, 10))}
        min="0"
        max="10"
      />
      <span> Decimal Places</span>
      <br />
      <button onClick={handleConvert}>Click to Convert</button>
    </>
  );
};

export default ToFixedComp;
