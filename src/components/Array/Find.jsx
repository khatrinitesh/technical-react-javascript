import React from 'react'

const FindComp = () => {

    const userslist = [
        { id: 1, name: 'Alice', active: false },
        { id: 2, name: 'Bob', active: true },
        { id: 3, name: 'Charlie', active: true },
    ]

    const resultList = userslist.find((val) => val.active);
  return (
    <div>
      {resultList ? (<>{resultList.name}</>) :(<>{resultList.name}</>)}
    </div>
  )
}

export default FindComp
