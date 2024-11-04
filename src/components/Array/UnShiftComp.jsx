import React, { useState } from 'react';

const UnShiftComp = () => {
  return (
    <>
      <PrependWithConcat/>
    </>
  );
}

export default UnShiftComp;


function PrependWithConcat(){
    const [fruits, setFruits] = useState(['Banana', 'Cherry', 'Date']); // Initial array

    const addFruit = (newFruit) => {
        const updatedFruits = newFruit.concat(fruits);
        setFruits(updatedFruits);
    }
    return(
        <>
            <h1>Fruits: {JSON.stringify(fruits)}</h1>
            <button onClick={() => addFruit('Apple, ')}>Add Apple</button>
        </>
    )
}
