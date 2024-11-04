import React from 'react';

const AtComp = () => {
  return (
    <>
      <CharacterAtComp/>
    </>
  );
}

export default AtComp;

const CharacterAtComp = () => {
    const myString = 'Hello World'

    const charAtIndex = myString.at(7);
    const charAtNegativeIndex = myString.charAt(myString.length - 1);

    return(
        <>
        <h3>Character Retrieval using at()</h3>
        <p>Character at index 7: {charAtIndex}</p>
        <p>Character at index -1: {charAtNegativeIndex}</p>
        {resultNegative}
        </>
    )
}
