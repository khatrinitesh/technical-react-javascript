import React from 'react';

const CodePointAtComp = () => {
  return (
    <>
      <CodePointAt/>
    </>
  );
}

export default CodePointAtComp;

const CodePointAt = () => {
    const myString = 'Hello World'

    const charAtIndex = myString.codePointAt(7);
    const charAtNegativeIndex = myString.codePointAt(myString.length - 1);

    return(
        <>
        <h3>Character Retrieval using at()</h3>
        <p>Character at index 7: {charAtIndex}</p>
        <p>Character at index -1: {charAtNegativeIndex}</p>
        </>
    )
}
