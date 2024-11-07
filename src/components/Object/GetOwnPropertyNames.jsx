import React, { useState } from "react";

const GetOwnPropertyNames = () => {
  // const obj = {
  //     name:'test',
  //     age:35,
  //     _hidden:'secret'
  // }

  // const propertyNames = Object.getOwnPropertyNames(obj)

  const [person, setPerson] = useState({
    name: "John",
    age: 30,
    _password: "secret",
  });

  const showPropertyNames = () =>{
    const propertyNames = Object.getOwnPropertyNames(person);
    setPerson(propertyNames)
    console.log(propertyNames)
  }

  return(
    <>
    <button onClick={showPropertyNames}>Show property names</button>
    </>
  )
};

export default GetOwnPropertyNames;
