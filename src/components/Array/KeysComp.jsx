import React from 'react'

const KeysComp = () => {

  return (
    <>
    <KeysExample/>
    </>
  )
}

export default KeysComp

const KeysExample = () => {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

    const fruitKeys = fruits.keys()
    return(
        <>
        <h2>Fruit List with Keys</h2>
        {[...fruitKeys].map((key) => (
            <> 
            <li key={key}>
                Index: {key}, fruit: {fruits[key]}
            </li>
            </>
        ))}
        </>
    )
}