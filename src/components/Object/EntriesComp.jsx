import React, { useState } from 'react'

const EntriesComp = () => {

    const [person,setPerson] = useState({
        name:'nitesh',
        age:35,
        occupation:'engineer'
    });

    const entries = Object.entries(person);
  return (
    <>
      <h1>Person Details</h1>
      <ul>
        {entries.map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <hr/>
      <MyComponent/>
    </>
  )
}

export default EntriesComp


function MyComponent() {
    const [person, setPerson] = useState({
      name: 'Alice',
      age: 30,
      occupation: 'Engineer',
      location: 'New York',
    });
  
    // Filter entries to only show properties that are strings
    const stringEntries = Object.entries(person).filter(([key,value]) => typeof value === 'string')
  
    return (
      <div>
        <h1>Person Details</h1>
        <ul>
          {stringEntries.map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  