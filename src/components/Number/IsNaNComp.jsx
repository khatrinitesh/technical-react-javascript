import React, { useState } from 'react';

const IsNaNComp = () => {

    const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    
    if(Number.isNaN(Number(value))){
      setError(true)
    }
    else{
      setError(false)
    }
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      {error && <p style={{ color: 'red' }}>Please enter a valid number!</p>}
    </div>
  );
}

export default IsNaNComp;
