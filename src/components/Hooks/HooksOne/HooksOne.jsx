import React from 'react';
import { useState } from 'react';

const HooksOne = () => {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState('');

    const handleChange = () => {
        setUsers([...users,user])
        setUser(''); //clear the input field after addding a user
    }

    const total = users.length
    const last = users[users.length-1]


  return (
    <>
    <h2>Total: {total}</h2>
    <h2>Last: {last}</h2>
      <input type="text" value={user}  onChange={(event) => setUser(event.target.value) }/>
      <button onClick={handleChange}>Click</button>
      {users.map((val,index) => (
        <h4 key={index}>{val} <button onClick={() => btnDel(index)}></button></h4>
      ))}
    </>
  );
}

export default HooksOne;
