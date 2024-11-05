
import React, { useState } from 'react';

const MatchComp = () => {
  return (
    <>
      <MatchExample/>
    </>
  );
}

export default MatchComp;

const MatchExample = () => {


  const [input,setInput] = useState('');
  const [result,setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const pattern = /nitesh/i; //  Case-insensitive search for 'react
    const matches = input.match(pattern);
    setInput(e.target.value)
    setResult(matches ? matches[0] : 'no match found.');
  }
    

    return(
        <>
          <input type="text" value={input} onChange={handleSearch}  placeholder='enter text...' style={{border:'1px solid black'}}/>
          <button onClick={handleSearch}>Search</button>
          <p>Result: {result}</p>
        </>
    )
}