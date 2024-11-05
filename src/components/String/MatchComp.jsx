
import React, { useState } from 'react';

const LocaleCompareComp = () => {
  return (
    <>
      <LocaleCompareExample/>
    </>
  );
}

export default LocaleCompareComp;

const LocaleCompareExample = () => {

    const [string1,setString1] = useState('');
    const [string2,setString2] = useState('');
    const [result,setResult] = useState('');

    const compareStrings = () => {
        const comparisonResult = string1.localeCompare(string2);
        if(comparisonResult < 0){
            setResult(`"${string1}" is less than "${string2}"`);
        }
        else if(comparisonResult > 0){
            setResult(`"${string1}" is greater than "${string2}`)
        }
        else{
            setResult(`"${string1}" is equal to "${string2}"`);
        }
    }
    

    return(
        <>
              <input
        type="text"
        value={string1}
        onChange={(e) => setString1(e.target.value)}
        placeholder="Enter first string"
      />
      <input
        type="text"
        value={string2}
        onChange={(e) => setString2(e.target.value)}
        placeholder="Enter second string"
      />
      <button onClick={compareStrings}>Compare</button>
      {result && <p><u>{result}</u></p>}
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
