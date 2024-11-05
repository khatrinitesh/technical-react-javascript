import React from 'react';
import { useState } from 'react';

const ToUpperCaseComp = () => {
  return (
    <>
      <ToLocaleUpperCaseExample />
    </>
  );
}

export default ToUpperCaseComp;

function ToLocaleUpperCaseExample(){

  const [inputText, setInputText] = useState('');
  const [upperCaseText, setUpperCaseText] = useState('');

  const handleConvertToUpperCase = () => {
    const uppertext = inputText.toLocaleUpperCase();
    setUpperCaseText(uppertext)
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value)
  }
  return(
    <>
    <input type="text" value={inputText} onChange={handleChange} />
    <br />
    <button onClick={handleConvertToUpperCase}>Convert to Uppercase</button>
    <p>Uppercase text: {upperCaseText}</p>
    </>
  )
}
