import React, { useState } from "react";

const ToSortedComp = () => {
  return (
    <>
    <SortArrayWithSlice/>
    </>
  );
};

export default ToSortedComp;


function SortArrayWithSlice(){
    const [numbers] = useState([5, 3, 8, 1, 2])

    const sortedNumbers = numbers.slice().sort((a,b) => a-b) //  Create a copy and sort it


    return(
        <>
        <h1>Original Array: {numbers}</h1>
        <h1>Sorted Array: {sortedNumbers}</h1>
        </>
    )
}

function ToSortedExample(){
    const [numbers] = useState([5, 3, 8, 1, 2]); // Original array

    const sortedNumbers = numbers.toSorted();
    return(
        <>
        <h2>Original Array: {numbers}</h2>
        <h2>Sorted  Array: {sortedNumbers}</h2>
        </>
    )
}
