import React, { useState } from 'react';

const RepeatComp = () => {
    const [input,setInput] = useState('')
    const [repeatCount,setRepeatCount] = useState(1);
    const [repeatedString,setRepeatedString] = useState('');

    const handleRepeat = (e) => {
        const repeated = input.repeat(repeatCount)
        setRepeatedString(repeated);
        setInput(e.target.value);
    }
  return (
    <>
      <input 
        type="text" 
        value={input} 
        onChange={handleRepeat} 
        placeholder="Enter text"
      />
         <input 
        type="number" 
        value={repeatCount} 
        onChange={(e) => setRepeatCount(Number(e.target.value))} 
        min="0"
      />
      <button onClick={handleRepeat}>Repeat</button>
      <p>Repeated String: {repeatedString}</p>
    </>
  );
}

export default RepeatComp;
