import React from 'react'

const FlatComp = () => {



  return (
    <>
     <GroceryList/>
    </>
  )
}

export default FlatComp


const GroceryList = () => {
    const groceryItems = [
        ['Apple', 'Banana'],
        ['Carrot', 'Lettuce'],
        ['Orange', 'Grapes'],
      ];

      const flatGroceryItems = groceryItems.flat();

    return(
        <>
        <h2 style={{fontWeight:'bold',fontSize:'20px'}}>Grocery List</h2>
        <ul>
            {flatGroceryItems.map((item,index) =>(
                <div key={index}>
                    {index + 1}) {item}F
                </div>
            ))}
        </ul>
        </>
    )
}