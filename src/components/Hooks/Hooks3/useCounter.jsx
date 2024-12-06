import React, { useState } from 'react';

const useCounter = (initialValue=0) => {

    const [count,setCount] = useState(initialValue);

    const increment = () => setCount(prevC => prevC + 1);
    const decrement = () => setCount(prevC => prevC - 1);
    const reset = () => setCount(0);
  

    return {increment,decrement,reset,count}
}

export default useCounter;
