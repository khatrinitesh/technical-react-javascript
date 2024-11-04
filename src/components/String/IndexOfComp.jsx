import React from 'react';

const IndexOfComp = () => {
  return (
    <>
      <IndexOfExample/>
    </>
  );
}

export default IndexOfComp;

const IndexOfExample = () => {
   
    const myString = "Hello, World! Welcome to React.";
    const searchValue1 = "World";
    const searchValue2 = "React";
    const searchValue3 = "NotFound";
  
    // Using indexOf() to find the index of specified values
    const index1 = myString.indexOf(searchValue1); // Returns 7
    const index2 = myString.indexOf(searchValue2); // Returns 26
    const index3 = myString.indexOf(searchValue3); // Returns -1
    return(
        <>
        <h3>Finding Index using indexOf()</h3>
        <p>Index of "{searchValue1}": {index1} {index1 !== -1 ? '(found)' : '(not found)'}</p>
        <p>Index of "{searchValue2}": {index2} {index2 !== -1 ? '(found)' : '(not found)'}</p>
        <p>Index of "{searchValue3}": {index3} {index3 === -1 ? '(not found)' : '(found)'}</p>
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
