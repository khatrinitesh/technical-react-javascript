import React, { useState } from 'react';


const user = { name: 'John', email: 'john@example.com' };

const PreventExtensionsComp = () => {

   
  return (
    <>
         <UserProfile user={user} />;
    </>
  );
}

export default PreventExtensionsComp;

const UserProfile = ({ user }) => {
    const [userData, setUserData] = useState(user);
  
    const handleLoginStatus = () => {
      setUserData(prevUserData => ({
        ...prevUserData,
        isLoggedIn: true,  // Now we are adding a new property in an immutable way
      }));
    };
  
    return (
      <div>
        <h1>{userData.name}</h1>
        <p>{userData.email}</p>
        <button onClick={handleLoginStatus}>Log In</button>
      </div>
    );
  };