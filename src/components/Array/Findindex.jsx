import React from 'react'

const FindLastComp = () => {

    const tasks = [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: true },
        { id: 4, text: 'Task 4', completed: false },
      ];

      
      const findLastCompletedTask = (arr) =>{
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i].completed){
                return arr[i];
            }
        }
        return null;
      };

      const lastCompletedTask = findLastCompletedTask(tasks);

  return (
    <div>
       <h2>Last Completed Task</h2>
      {lastCompletedTask ? (
        <p>{lastCompletedTask.text}</p>
      ) : (
        <p>No completed tasks found.</p>
      )}
    </div>
  )
}

export default FindLastComp
