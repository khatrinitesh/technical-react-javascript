import React, { useState } from 'react';

const StartsWithComp = () => {
    const [inputText,setInputText] = useState('');
    const [isMatch,setIsMatch] = useState(false);

    const handleCheckStartsWith = () => {
        const result = 'React'
        setIsMatch(inputText.startsWith(result));
    }
  return (
    <>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleCheckStartsWith}>Check starts with 'React'</button>
      {isMatch ? 'yes, it starts with react' : 'no, it does not start with react. '}
    </>
  );
}

export default StartsWithComp;
