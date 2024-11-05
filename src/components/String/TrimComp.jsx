import React from 'react';
import { useState } from 'react';

const TrimComp = () => {
  return (
    <>
      <TrimExample />
    </>
  );
}

export default TrimComp;

function TrimExample(){
    const [inputText,setInputText] = useState('');
    const [trimmedText,setTrimmedText] = useState();

    const handleTrimText = () => {
        const trimmed = inputText.trim();
        setTrimmedText(trimmed)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInputText(e.target.value)
    }

  return(
    <>
        <input type="text" value={inputText} onChange={handleChange}  />
        <button onClick={handleTrimText}>Trim whitespace</button>
        <p>Trimmed text: {trimmedText} </p>
    </>
  )
}
