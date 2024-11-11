import React, { useState } from "react";

const NewSet = () => {
  return (
    <>
      <UniqueItemList />
    </>
  );
};

export default NewSet;

const UniqueItemList = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItems = new Set([...items, item]);
    setItems([...newItems]);
  };

  const deleteItem = (item) => {
    const newItems = new Set(items);
    newItems.delete(item);
    setItems([...newItems]);
  };

  return (
    <>
      <button onClick={() => addItem("item 1")}>add item 1</button>
      <button onClick={() => addItem("item 2")}>add item 2</button>
      <button onClick={() => addItem("item 3")}>add item 3</button>
      <ul>
      {[...items].map((item, index) => (
        <li key={index}>
            {item}
            <button onClick={() => deleteItem(item)}>Delete</button>
        </li>
        ))}
        {/* {items.map((item,index) => (
            <li key={index}>{item} <button onClick={() => deleteItem(item)}>Delete</button></li>
         ))} */}
      </ul>
    </>
  );
};
