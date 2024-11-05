import { useStatStyles } from '@chakra-ui/react';
import React, { useState } from 'react';

const LastIndexOfComp = () => {
  return (
    <>
      <LastIndexExample/>
    </>
  );
}

export default LastIndexOfComp;

const LastIndexExample = () => {


    const myString = 'Hello, world! Welcome to the world of React.'
    const searchValue = 'world'


    const lastIndex = myString.lastIndexOf(searchValue)
    return(
        <>
         <p>The last index of "{searchValue}" is: {lastIndex}</p>
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
