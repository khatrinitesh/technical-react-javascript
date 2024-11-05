import React, { useState } from 'react';

const PadStartComp = () => {
    const [input,setInput] = useState('');
    const [paddedString,setPaddedString] = useState('');

    const handlePadStart = (e) => {
        const padded = input.padStart(10,'*')
        setInput(e.target.value)
        setPaddedString(padded);
    }
  return (
    <>
     <input type="text" value={input} onChange={handlePadStart} />
      <button onClick={handlePadStart}>Pad Start</button>
      <p>Padded String: {paddedString}</p> 
    </>
  );
}

export default PadStartComp;
