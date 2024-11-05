import React, { useState } from "react";

const SliceComp = () => {
  const [inputText, setInputText] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(inputText.length);
  const [slicedText, setSlicedText] = useState("");

  const handleSlice = () => {
    const sliced = inputText.slice(startIndex, endIndex);
    setSlicedText(sliced);
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
      />
      <br />
      <input
        type="number"
        value={startIndex}
        onChange={(e) => setStartIndex(Number(e.target.value))}
        placeholder="Start index"
      />
      <br />
      <input
        type="number"
        value={endIndex}
        onChange={(e) => setEndIndex(Number(e.target.value))}
        placeholder="End index"
      />
      <br />
      <button onClick={handleSlice}>Slice</button>
      <p>Original Text: {inputText}</p>
      <p>Sliced Text: {slicedText}</p>
    </>
  );
};

export default SliceComp;
