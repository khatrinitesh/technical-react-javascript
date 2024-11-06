import React, { useState } from 'react'

const DefineProperty = () => {
    const [person, setPerson] = useState({
        name: 'Alice',
        age: 30,
      });

      const modifiedPerson = {...person}

      Object.defineProperty(modifiedPerson,'greeting',{
        value:`Hello, ${modifiedPerson.name}!`,
        writable:true,
        enumerable:true,
        configurable:true
      })

      Object.defineProperty(modifiedPerson,'fullname',{
        get(){
            return `${modifiedPerson.name} Smith`
        },
        enumerable:true
      });

      Object.defineProperty(modifiedPerson,'setAge',{
        set(newAge){
            modifiedPerson.age = newAge;
        },
        enumerable:true
      });

      modifiedPerson.setAge = 35;

  return (
    <>
       <h1>Name: {person.name}</h1>
      <h2>Greeting: {modifiedPerson.greeting}</h2>
      <h3>Age: {person.age}</h3>
      <h4>Full Name: {modifiedPerson.fullName}</h4>
      <h5>Updated Age: {modifiedPerson.age}</h5>
    </>
  )
}

export default DefineProperty
