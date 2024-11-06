import React from 'react'

const FreezeComp = () => {

    // Create a person object and freeze it to prevent modification
    const person = Object.freeze({
        name: 'Alice',
        age: 30,
        occupation: 'Engineer',
      });

      // trying to modify the frozen object this wont work 
      const handleChange = () =>{
        person.name = 'bob'
        console.log(person.name)
      }
  return (
    <>
      <h1>Person Details</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
      <button onClick={handleChange}>Try to Change Name</button> 
    </>
  )
}

export default FreezeComp
