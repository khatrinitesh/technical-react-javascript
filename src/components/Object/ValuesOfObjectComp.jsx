import React, { useState } from 'react';

const ValuesOfObjectComp = () => {
    

  return (
    <>
         <h1>React App with Counter</h1>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment</button>
    </>
  );
}

export default ValuesOfObjectComp;

const CounterDisplay = ({ counter }) => {
    return (
      <div>
        <h1>Counter Value: {counter.valueOf()}</h1>
      </div>
    );
  };