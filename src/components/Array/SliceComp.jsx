import React, { useState }  from 'react';

const SliceComp = () => {

    


  return (
    <>
    <SliceExample/>
    </>
  );
}

export default SliceComp;


function SliceExample(){
    const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Original array

    const slicedArray = [...numbers].slice(2,8)  // This will return [3, 4, 5]
    return(
        <>
         <h1>Original Array: {JSON.stringify(numbers)}</h1>
         <h1>Sliced Array: {JSON.stringify(slicedArray)}</h1>
        </>
    )
}
