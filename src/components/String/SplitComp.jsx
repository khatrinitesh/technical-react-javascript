import React, { useState } from 'react';

const SplitComp = () => {

    const [inputText,setInputText] = useState('');
    const [wordArray,setWordArray] = useState([]);

    const handleSplit = () => {
        const words = inputText.split(' ');
        setWordArray(words)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInputText(e.target.value)
    }
  return (
    <>
      <input type="text" value={inputText} onChange={handleChange}/>
      <button onClick={handleSplit}>Click Split</button>
      <p>Word Array: {JSON.stringify(wordArray)}</p>
    </>
  );
}

export default SplitComp;
