import { keyframes } from '@emotion/react'
import React, { useState } from 'react'

const FromEntriesComp = () => {
    const [formData,setFormData] = useState([
        ['name',''],
        ['email',''],
        ['age',''],
    ])

    const handleChange = (e) =>{
        const updatedData = formData.map(([key,value]) => key === e.target.value ? [key,e.target.value] : [key,value])
        setFormData(updatedData)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formObject = Object.fromEntries(formData)
        console.log(formObject)
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.find(([key]) => key === 'name')[1]}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.find(([key]) => key === 'email')[1]}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.find(([key]) => key === 'age')[1]}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default FromEntriesComp
