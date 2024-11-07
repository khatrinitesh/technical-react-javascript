import React from 'react';

const KeysComp = () => {

    const data = { a: 1, b: 2, c: 3 };

    const renderList = Object.keys(data).map((key) => (
        <div key={key}>{data[key]}</div>
    ))
  return (
    <>
      {renderList}
    </>
  );
}

export default KeysComp;
