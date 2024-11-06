import React, { useState } from 'react'

const DefineProperties = () => {
     // State object with initial properties
  const [person, setPerson] = useState({
    name: 'Alice',
    age: 30,
  });
  const modifiedPerson = {...person}

  Object.defineProperties(modifiedPerson,{
    fullName:{
        get(){
            return `${this.name} Smith`
        },
        enumerable: true,
    },
    ageInMonths: {
        get() {
          return this.age * 12; // Returns age in months
        },
        enumerable: true,
      },
  })
  return (
    <>
       <h1>Name: {person.name}</h1>
      <h2>Full Name: {modifiedPerson.fullName}</h2>
      <h3>Age: {person.age}</h3>
      <h4>Age in Months: {modifiedPerson.ageInMonths}</h4>
    </>
  )
}

export default DefineProperties
