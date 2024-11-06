import React, { useState } from "react";

const ToExponentialComp = () => {
  const [number, setNumber] = useState("");
  const [exponentialResult, setExponentialResult] = useState("");

  const handleConvert = () => {
    const parsedNumber = parseFloat(number);
    if (!isNaN(parsedNumber)) {
      setExponentialResult(parsedNumber.toExponential());
    } else {
      setExponentialResult("Invalid number");
    }
  };

  return (
    <>
      <h1>Convert Number to Exponential Notation</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleConvert}>Convert</button>
      <p>Exponential Notation: {exponentialResult}</p>
    </>
  );
};

export default ToExponentialComp;
