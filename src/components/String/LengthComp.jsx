
import React, { useState } from 'react';

const LengthComp = () => {
  return (
    <>
      <LengthExample/>
    </>
  );
}

export default LengthComp;

const LengthExample = () => {

    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
      };
    

    return(
        <>
        <input type="text" value={input} onChange={handleChange} />
        <p>Length of the string: {input.length}</p>
        </>
    )
}

// const ConcatExample = () => {
//     const string1 = "Hello, ";
//     const string2 = "World!";
//     const string3 = " How are you?";

//     const combineString = string1.concat(string2,string3)
//     return(
//         <>
//         <h3>String Concatenation using concat()</h3>
//         <h3>Combined String: {combineString}</h3>
//         </>
//     )
// }
