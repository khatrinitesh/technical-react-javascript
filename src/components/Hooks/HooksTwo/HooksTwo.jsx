import React, { useState } from 'react';

const HooksTwo = () => {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState('');

    const handleChange = () => {
        setUsers([...users,user])
        setUser('');
    }

    const total = users.length 
    const last = users[users.length-1]

    const unique = [...new Set(users)].length
  return (
    <>
    <h2>Total: {total}</h2>
    <h2>Last: {last}</h2>
    <h2>Unique: {unique}</h2>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder='enter type...' />
      <button onClick={handleChange}>Click add list name</button>
      {users.map((val,index) => (
        <h3 key={index}>{val}</h3>
      ))}
    </>
  );
}

export default HooksTwo;
