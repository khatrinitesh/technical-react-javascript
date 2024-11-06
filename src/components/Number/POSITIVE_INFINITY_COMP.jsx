import React, { useState } from 'react';

const POSITIVE_INFINITY_COMP = () => {

    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
  
    const handleCheck = () => {
      const value = parseFloat(input);
      if (value === Infinity) {
        setMessage('The number is positive infinity!');
      } else if (value > Infinity) {
        setMessage('The number is larger than infinity (impossible)');
      } else {
        setMessage('The number is within the valid range.');
      }
    };
  
  return (
    <div>
       <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck}>Check if Infinity</button>
      <p>{message}</p>
    </div>
  );
}

export default POSITIVE_INFINITY_COMP;
