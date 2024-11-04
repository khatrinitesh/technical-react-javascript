import React from 'react';

const FromCharCodeComp = () => {
  return (
    <>
      <FromCharCodeExample/>
    </>
  );
}

export default FromCharCodeComp;

const FromCharCodeExample = () => {
    // Example Unicode values
  const unicodeValues = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];

  const stringFromUnicode = String.fromCharCode(unicodeValues)

    return(
        <>
 <h3>Unicode to Characters using fromCharCode()</h3>
      <p>Unicode Values: {unicodeValues.join(', ')}</p>
      <p>Converted String: {stringFromUnicode}</p>
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
