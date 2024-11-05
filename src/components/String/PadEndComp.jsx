import React, { useState } from 'react';

const PadEndComp = () => {

    const [input,setInput] = useState('');
    const [paddedString,setPaddedString] = useState('');

    const handlePadEnd = (e) => {
        const padded = input.padEnd(10,'*')
        setInput(e.target.value)
        setPaddedString(padded);
    }
  return (
    <>
      <input type="text" value={input} onChange={handlePadEnd} />
      <button onClick={handlePadEnd}>Pad End</button>
      <p>Padded String: {paddedString}</p>
    </>
  );
}

export default PadEndComp;
