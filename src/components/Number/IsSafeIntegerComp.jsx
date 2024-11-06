import React, { useState } from 'react';

const IsSafeIntegerComp = () => {

    const [inputText,setInputText] = useState('');
    const [message,setMessage] = useState('')

    const handleChange = (e) => {
        const value = e.target.value 
        setInputText(value)
        if(Number.isSafeInteger(Number(value))){
            setMessage('This is a safe integer!')
        }
        else{
            setMessage('This is not a safe integer!')
        }
    }
  return (
    <>
      <input type="text" value={inputText} onChange={handleChange} />
      {message }
    </>
  );
}

export default IsSafeIntegerComp;
