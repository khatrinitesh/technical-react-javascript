import React from 'react';

const IncludesComp = () => {
  return (
    <>
      <IncludesExample/>
    </>
  );
}

export default IncludesComp;

const IncludesExample = () => {
    const words = 'how are you'
    const final = 'hasdsado'

    return(
        <>
        {words.includes(final) ? "yes, there is an including" : "no, there isn't an including"}
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
