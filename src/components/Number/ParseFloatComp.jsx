import React, { useState } from 'react';

const ParseFloatComp = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const parsedValue = parseFloat(input);

    if (isNaN(parsedValue)) {
      setMessage('Please enter a valid number.');
    } else {
      setMessage(`You entered a valid number: ${parsedValue}`);
    }
  };

  return (
    <div>
        <h1>Validate Input with parseFloat()</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default ParseFloatComp;
