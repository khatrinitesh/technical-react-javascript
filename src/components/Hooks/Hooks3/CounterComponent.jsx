import React from 'react';
import useCounter from './useCounter';

const CounterComponent = () => {

    const {increment,decrement,reset,count} = useCounter(0);

    
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterComponent;
