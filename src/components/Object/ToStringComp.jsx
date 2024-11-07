import React from 'react';


function ToStringCompFinal(){
    return(
        <>
         <ToStringComp person={person} />
        </>
    )
}

export default ToStringCompFinal

const person = {
    name: "John Doe",
    age: 28,
    toExample: function () {
      return `${this.name}, ${this.age} years old`;
    }
  };

const ToStringComp = ({person}) => {

    const personString = person.toExample();

  return (
    <>
        <h1>Person Profile</h1>
        <p>{personString}</p>
    </>
  );
}

