import React from 'react'
import _ from 'lodash';

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
  ];

const GroupByComp = () => {

      // Use Lodash's groupBy to group users by age
  const groupedByAge = _.groupBy(users, 'name');

  return (
    <>
       <h2>Grouped Users</h2>
     {Object.keys(groupedByAge).map((age) =>(
        <div key={age}>
            <h2>Age {age}</h2>
            <ul className='list-disc ms-[30px] ps-[30px]'>
            {groupedByAge[age].map((person,index) =>(
                <li key={index}>{person.name}</li>
            ))}
            </ul>
        </div>
     ))}
    </>
  )
}

export default GroupByComp
