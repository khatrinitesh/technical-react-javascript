import React from 'react'

const JoinComp = () => {

  return (
    <>
    <JoinExample/>
    </>
  )
}

export default JoinComp


const JoinExample = () => {

    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

    const fruitString = fruits.join(', ');
    return(
        <>
        <h2>Fruit list</h2>
        <p>{fruitString}</p>
        </>
    )
}





