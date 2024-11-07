import React from 'react'

const GetOwnPropertyDescriptor = () => {

    const person = {
        name:'test',
        age:35 
    }

    const result = Object.getOwnPropertyDescriptor(person,'name')

    const Final = JSON.stringify(result)
    
  return (
    <>
      <h2>GetOwnPropertyDescriptor: {Final}</h2>

    </>
  )
}

export default GetOwnPropertyDescriptor
