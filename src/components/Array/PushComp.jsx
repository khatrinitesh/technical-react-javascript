import React, { useState } from 'react';
import ArrayExample from './Array';

const PushComp = () => {
    const [myArray, setMyArray] = useState([]);
    const [counter, setCounter] = useState(1); // Start with 1 or any desired number

    const addPush = () => {
        setMyArray(prevArray => [...prevArray,counter])
        setCounter(prevCounter => prevCounter + 1)
    }
  return (
    <>
      <button onClick={addPush}>add element</button>
      <div>{JSON.stringify(myArray)}</div>
    </>
  );
}

export default PushComp;
