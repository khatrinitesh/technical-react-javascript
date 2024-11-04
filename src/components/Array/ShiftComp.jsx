import React, { useState }  from 'react';

const ShiftComp = () => {

    // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]); // Original array

    // const handleShift = () => {
    //     const firstElement = numbers.shift();
    //     setNumbers([...numbers])
    //     console.log(`${firstElement}`)
    // }


  return (
    <>
    <QueueExample/>
    </>
  );
}

export default ShiftComp;


function QueueExample(){
    const [queue, setQueue] = useState(['task1', 'task2', 'task3']); // Initial queue
    const processNextTask = () => {
        if (queue.length > 0) {
          const nextTask = queue.shift(); // Remove the first task
          setQueue([...queue]); // Update the state
          alert(`Processing: ${nextTask}`); // Show the processed task
        } else {
          alert('No tasks in the queue!');
        }
      };
    return(
        <>
        <h1>Task Queue: {JSON.stringify(queue)}</h1>
        <button onClick={processNextTask}>Process Next Task</button>
        </>
    )
}
