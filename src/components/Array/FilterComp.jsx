import React from 'react'

const FilterComp = () => {

  const tasks = [
    { id: 1, text: 'Task 1', completed: true },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: true },
  ];

  const completedTasks = tasks.filter((item) => item.completed)
  return (
    <>
      {completedTasks.map((val) =>(
        <div key={val.id}>
          <h3>{val.text}</h3>
          <p>{val.completed}</p>
        </div>
      ))}
    </>
  )
}

export default FilterComp
