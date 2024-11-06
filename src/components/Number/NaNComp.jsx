import React, { useState } from 'react';

const NaNComp = () => {
    const [inputText,setInputText] = useState('');
    const [result,setResult] = useState(null);


    const handleCalc = () => {
        const value = parseFloat(inputText) 
        const calculated = value / 0 
        setResult(calculated)
    }
  return (
    <div>
      <input type="text" onChange={(e) => setInputText(e.target.value)} placeholder="Enter a number" maxLength={10} inputMode='numeric' />
      <button onClick={handleCalc}>Divide by 0</button>
      <p>Result: {isNaN(result) ? 'NaN (Not-a-Number)' : result}</p>
    </div>
  );
}

export default NaNComp;
