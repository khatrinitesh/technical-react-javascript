import React from 'react'

const IsArrayComp = () => {

  return (
    <>
    <ArrayCheck/>
    </>
  )
}

export default IsArrayComp

const ArrayCheck = () => {
  const testArray = [1,2,3]
  const testString = 'Hello World';

  const isArrayCheck1 = Array.isArray(testArray);

  const isArrayCheck2 = Array.isArray(testString);
  return(
    <>
      <h2>Array Check</h2>
      <p>{`is testArray an array? ${isArrayCheck1} ? 'yes' : 'no'`}</p>
      <p>{`is testString an array? ${isArrayCheck2} ? 'yes' : 'no'`}</p>
    </>
  )
}







