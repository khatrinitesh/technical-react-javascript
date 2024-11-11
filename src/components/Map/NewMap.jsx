import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewMapComp = () => {
    const [items,setItems] = useState(
        new Map([
            [1, 'Item 1'],
            [2, 'Item 2'],
            [3, 'Item 3'],
            [4, 'Item 4'],
        ])
    )

    const handleDel = (key) => {
        const newItem = new Map(items)
        newItem.delete(key)
        setItems(newItem)
    }
  return (
    <>
      <div className="items-container">
      <ul>
        {[...items].map(([key,value]) => (
            <motion.li
            key={key}
            style={{
              padding: '10px',
              marginBottom: '10px',
              background: '#f4f4f4',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            {value}
            <button onClick={() => handleDel(key)}>Delete</button>
          </motion.li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default NewMapComp;
