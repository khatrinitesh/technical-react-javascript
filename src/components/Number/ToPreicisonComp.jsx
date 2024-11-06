import React, { useState } from 'react';

const ToPreicisonComp = () => {
    const [number, setNumber] = useState(0.000123456); // Small number
    const [precision,setPrecision] = useState(4);


  return (
    <>
     <h2>Formatting Small Numbers with toPrecision</h2> 
     <p>Original Number: {number}</p>
      <p>
        Formatted Number (Precision {precision}):{" "}
        {number.toPrecision(precision)}
      </p>
      <label>
        Set Precision (Significant Digits):
        <input
          type="number"
          value={precision}
          onChange={(e) => setPrecision(parseInt(e.target.value))}
          min="1"
          max="20"
        />
      </label>
    </>
  );
}

export default ToPreicisonComp;
