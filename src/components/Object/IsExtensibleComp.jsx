import React, { useState } from 'react'

const IsExtensibleComp = () => {
  const [state, setState] = useState({ name: 'John' });

  const handleChange = () => {
    // Ensure state is extensible before modifying it
    if (Object.isExtensible(state)) {
      setState(prevState => ({
        ...prevState,
        age: 30
      }));
    } else {
      console.log('State is not extensible, cannot add new properties');
    }
  };

      
  return (
    <>
       <p>Name: {state.name}</p>
       <button onClick={handleChange}>Add Age</button>
       <div class="animate-pulse">
    <div class="h-4 bg-gray-200 rounded w-1/4">Consequat voluptate ex ullamco aliqua ipsum consectetur nisi sit est adipisicing labore exercitation veniam.</div>
</div>
    </>
  )
}

export default IsExtensibleComp
