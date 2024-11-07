import React, { useEffect, useState } from 'react';

const NewDateComp = () => {
  return (
    <>
      <Example/>
    </>
  );
}

export default NewDateComp;

function Example(){
    const currentDate = new Date();
    const eventDate = new Date(2024,9,26)

    const timeDifference = eventDate - currentDate

    const daysAllEvent = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return(
        <>
            {daysAllEvent}
        </>
    )
}

// function Example(){
//     const currentDate = new Date();
//     return(
//         <>
//          <h1>FOrmatted Date</h1>
//          <p>Date: {currentDate.toLocaleDateString()}</p>
//          <p>Time: {currentDate.toLocaleTimeString()}</p>
//         </>
//     )
// }

// function Example(){
//     const specificDate = new Date(2024,9,26,15,30,0);


//     return(
//         <>
//             <h1>Specific Date</h1>
//             <p>{specificDate.toLocaleString()}</p>
//         </>
//     )
// }

// function Example(){
//     const [currentDate,setCurrentDate] = useState(new Date());
    

//     useEffect(() => {
//         const timer = setInterval(() => {
//           setCurrentDate(new Date()); // Update the date every second
//         }, 1000);
    
//         // Cleanup on component unmount
//         return () => clearInterval(timer);
//       }, []);
//     return(
//         <>
//         <h1>Current Date and Time:</h1>
//         <p>{currentDate.toLocaleString()}</p>
//         </>
//     )
// }
