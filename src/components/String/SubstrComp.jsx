import React, { useState } from 'react';

const SubstrComp = () => {

    const [inputText, setInputText] = useState('');
    const [startIndex, setStartIndex] = useState(0);
    const [length, setLength] = useState(5);
    const [substring, setSubstring] = useState('');
  
    const handleExtractSubstring = () => {
      const extracted = inputText.substr(startIndex, length);
      setSubstring(extracted);
    };
  return (
    <>
    <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
      />
      <br />
      <input
        type="number"
        value={startIndex}
        onChange={(e) => setStartIndex(Number(e.target.value))}
        placeholder="Start index"
      />
      <br />
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        placeholder="Length"
      />
      <br />
      <button onClick={handleExtractSubstring}>Extract Substring</button>
      <p>Extracted Substring: {substring}</p>
    </>
  );
}

export default SubstrComp;
