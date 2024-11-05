import React from 'react';
import { useState } from 'react';

const ToLocaleLowerCaseComp = () => {
  return (
    <>
      <ToLocaleLowerCaseExample/>
    </>
  );
}

export default ToLocaleLowerCaseComp;

function ToLocaleLowerCaseExample(){

  const [inputText, setInputText] = useState('');
  const [lowerCaseText, setLowerCaseText] = useState('');

  const handleConvertToLowerCase = () => {
    const lowerText = inputText.toLocaleLowerCase();
    setLowerCaseText(lowerText)
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value)
  }
  return(
    <>
    <input type="text" value={inputText} onChange={handleChange} />
    <br />
    <button onClick={handleConvertToLowerCase}>Convert to Lowercase</button>
    <p>Lowercase text: {lowerCaseText}</p>
    </>
  )
}
