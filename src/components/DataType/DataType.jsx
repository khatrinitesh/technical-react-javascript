import React, { useState } from "react";

const DataType = () => {
    const greeting = "Hello, Welcome to React!";
  const itemCount = 5;
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const user = { name: "John Doe", age: 30, hobby: "Reading" };
  return (
    <>
      <Example greeting={greeting} 
        itemCount={itemCount} 
        items={items} 
        user={user}  />
    </>
  );
};

export default DataType;

const Example = ({ greeting, itemCount, items, user }) => {
  return (
    <>
      <h2>{greeting}</h2>
      <p>There are {itemCount} items in the list.</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>User Info:</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Hobby: {user.hobby}</p>
    </>
  );
};

// const Example = () => {
//     const [name,setName] = useState('test1');
//     const [count,setCount] = useState(0);
//     const [isHappy,setIsHappy] = useState(true);
//     const [shoppingList,setIsShoppingList] = useState(['milk','eggs'])
//     const [user,setUser] = useState({name:'test',age:34})
//     const [itemNum,setItemNum] = useState(1);

//     const addItemToList = () => {
//         setIsShoppingList(
//             [
//                 ...shoppingList,
//                 `Item ${itemNum}`
//             ]
//         );
//         setItemNum(itemNum + 1)
//     }
//     const toggleHappiness = () => setIsHappy(!isHappy);
//     const updateName = () => setUser({...user,name:'test2'});
//     const incrementCount = () => {
//         setCount(prevC => prevC + 1)
//     }
//     const decrementCount = () => {
//         setCount(prevC => prevC - 1)
//     }

//     return(
//         <>
//             <h1>{name}</h1>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             <button onClick={incrementCount}>+</button>
//             <button onClick={decrementCount}>-</button>
//             {count}
//             <br/>
//             <button onClick={toggleHappiness}>Toggle - {isHappy ? 'smile 😀' : 'sad 😞'}</button>
//             <ul>
//                 {shoppingList.map((item,index) => <li key={index}>{item}</li>)}
//             </ul>
//             <button onClick={addItemToList}>Add item</button>
//             <button onClick={updateName}>Update Name</button>
//             <pre>{JSON.stringify(user,null,2)}</pre>
//         </>
//     )
// }

// const Example = () => {
//     const name = 'test' // string
//     const isFun = true; // boolean
//     const age = 35; // number
//     const hobbies = ['cricket','tablet tennis','cycling ride'] // array
//     const user = {name,age,hobby:'coding'} // object
//     return(
//         <>
//         <h2>Name: {name}</h2>
//       <p>Age: {age}</p>
//       <p>Fun: {isFun ? 'yes' : 'no'}</p>
//       <hr/>
//       <p><strong><u>Hobbies:</u></strong></p>
//       <ul>
//       {hobbies.map((hobby,index) => {
//         return (
//             <>
//              <li key={index}>{hobby}</li>
//             </>
//         )
//       })}
//       </ul>
//       {JSON.stringify(user,null,2)}
//         </>
//     )
// }
