import React, { useState } from 'react';

const ReplaceComp = () => {

    const [inputText, setInputText] = useState('');
    const [replacedText, setReplacedText] = useState('');
    const [searchWord,setSearchWord] = useState('World');
    const [replaceWord,setReplaceWord] = useState('React')

    const handleReplace = () => {
        const updatedText = inputText.replace(searchWord,replaceWord)
        setReplacedText(updatedText);
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }
  return (
    <>
      <input type="text" value={inputText} onChange={handleChange} />
      <br />
      <input 
        type="text" 
        value={searchWord} 
        onChange={(e) => setSearchWord(e.target.value)} 
        placeholder="Word to search for"
      />
      <br />
      <input 
        type="text" 
        value={replaceWord} 
        onChange={(e) => setReplaceWord(e.target.value)} 
        placeholder="Replace with"
      />
      <br />
      <button onChange={handleReplace}>Replace</button>
      <p>Original: {inputText}</p>
      <p>Replaced: {replacedText}</p>
    </>
  );
}

export default ReplaceComp;
