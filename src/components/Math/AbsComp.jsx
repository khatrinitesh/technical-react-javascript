import React, { useState } from 'react';

const AbsComp = () => {

    const [value,setValue] = useState(0);

    const isInRange = (min,max) => {
        return Math.abs(value - min) <= max
    }
  return (
    <div>
       <p>Current value: {value}</p>
       <p>Is the value within the range of 10 ± 3? {isInRange(10, 3) ? 'Yes' : 'No'}</p>
       <button onClick={() => setValue(value + 1)}>Increase Value</button>
      <button onClick={() => setValue(value - 1)}>Decrease Value</button>
      <hr/>
      <AbsoluteValues/>
    </div>
  );
}

export default AbsComp;

const AbsoluteValues = () => {
    const numbers = [-10, 5, -20, 15, -30];
    const absoluteNum = numbers.map((val) => Math.abs(val))
    return(
        <>
        {absoluteNum}
        </>
    )
}
