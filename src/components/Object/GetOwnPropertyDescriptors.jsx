import React from 'react'

const GetOwnPropertyDescriptors = () => {

    const person = {
        name:'test',
        age:35 
    }

    const result = Object.getOwnPropertyDescriptor(person,'name')

    const Final = JSON.stringify(result)
    
  return (
    <>
      <h2>GetOwnPropertyDescriptors: {Final}</h2>

    </>
  )
}

export default GetOwnPropertyDescriptors
