import React from 'react';

const ConcatComp = () => {
  return (
    <>
      <ConcatExample/>
    </>
  );
}

export default ConcatComp;

const ConcatExample = () => {

    const S1 = 'hello'
    const S2 = 'how are you'
    const S3 = 'What are you doing'

    const combinedS = `${S1} ${S2} ${S3}`
    return(
        <>
        {combinedS}
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
