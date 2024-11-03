import React from 'react'

const IncludesComp = () => {

  return (
    <>
    <FavoriteFruits/>
    </>
  )
}

export default IncludesComp

const FavoriteFruits = () =>{
    const favoriteFruits = ['Apple', 'Banana', 'Mango', 'Orange'];

    const fruitToCheck = 'Mango';

    const isFruitIncluded = favoriteFruits.includes(fruitToCheck)
    return(
        <>
            <h2 style={{color:'red',fontWeight:'bold'}}>Favorite Fruits</h2>
      <ul>
        {favoriteFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <p>
        {isFruitIncluded
          ? `${fruitToCheck} is in your favorite fruits!`
          : `${fruitToCheck} is not in your favorite fruits.`}
      </p>
        </>
    )
}







