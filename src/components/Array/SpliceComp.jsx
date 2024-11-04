import React, { useState } from "react";

const SpliceComp = () => {
  return (
    <>
      <AddElement />
    </>
  );
};

export default SpliceComp;

function AddElement() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addNum = (index, number) => {
    const newNumbers = [...numbers];
    newNumbers.splice(index, 0, number);
    setNumbers(newNumbers);
  };
  return (
    <>
      <h1>Numbers:</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={() => addNum(2, 3)}>Add 3 at index</button>
    </>
  );
}

function RemoveElement() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry", "Date"]);

  const removeFruit = (index) => {
    const newFruits = [...fruits];
    newFruits.splice(index, 1);
    setFruits(newFruits);
  };
  return (
    <>
      <h1>Fruits:</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit} <button onClick={() => removeFruit(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
