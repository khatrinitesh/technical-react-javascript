import React, { useState } from 'react';

const NEGATIVE_INFINITY_COMP = () => {

    const [result,setResult] = useState(null);

    const handleCalc = () => {
        const negativeInfinity = -1/0;
        setResult(negativeInfinity)
    }
  return (
    <>
        <h2>Negative infinity example</h2>
        <button onClick={handleCalc}>Calculate -Infinity</button>
        <p>result: {result === -Infinity ? 'negative infinity' : result}</p>
    </>
  );
}

export default NEGATIVE_INFINITY_COMP;
