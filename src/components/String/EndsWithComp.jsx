import React from 'react';

const EndsWithComp = () => {
  return (
    <>
      <EndsWithExample/>
    </>
  );
}

export default EndsWithComp;

const EndsWithExample = () => {

    const S1 = 'hello world'
    const checkValue1 = 'hello'
    const checkValue2 = 'world'
    return(
        <>
         {S1.endsWith(checkValue1) ? 'yes - it is endswith' : 'no, it is not endswith'}
         <br />
         {S1.endsWith(checkValue2) ? 'yes - it is endswith' : 'no, it is not endswith'}
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
