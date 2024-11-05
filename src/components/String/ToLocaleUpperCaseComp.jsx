import React from 'react';
import { useState } from 'react';

const ToLocaleUpperCaseComp = () => {
  return (
    <>
      <ToLocaleUpperCaseExample />
    </>
  );
}

export default ToLocaleUpperCaseComp;

function ToLocaleUpperCaseExample(){

  const [inputText, setInputText] = useState('');
  const [upperCaseText, setUpperCaseText] = useState('');

  const handleConvertToLowerCase = () => {
    const upperText = inputText.toLocaleUpperCase();
    setUpperCaseText(upperText)
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value)
  }
  return(
    <>
    <input type="text" value={inputText} onChange={handleChange} />
    <br />
    <button onClick={handleConvertToLowerCase}>Convert to uppercase</button>
    <p>uppercase text: {upperCaseText}</p>
    </>
  )
}
