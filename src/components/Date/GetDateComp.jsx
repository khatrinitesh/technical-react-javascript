import React, { useState,useEffect  } from 'react';

const GetDateComp = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentDate(new Date()); // Update the date every second
        }, 1000);
    
        // Cleanup on component unmount
        return () => clearInterval(timer);
      }, []);
  return (
    <>
       <h1>Today's Date:</h1>
       <p>Day of the month: {currentDate.getDate()}</p>
       <hr/>
       <Example/>
    </>
  );
}

export default GetDateComp;

function Example(){
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    const lastDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth() +1,0).getDate();
    const daysLeft = lastDayOfMonth - currentDay;
    return(
        <>
         <h1>Days Left in the Month:</h1>
         <p>{daysLeft} days left until the end of the month!</p>
        </>
    )
}

// function Example(){
//     const currentDate = new Date();
//     const day = currentDate.getDate();
//     const month = currentDate.getMonth() + 1;
//     const year = currentDate.getFullYear();
//     return(
//         <>
//          <h1>Current Date:</h1>
//          <p>{`Today is ${month}/${day}/${year}`}</p>
//         </>
//     )
// }

// function Example(){
//     const specificDate = new Date()
//     const dayOfMonth = specificDate.getDate();
//     return(
//         <>
//         <h1>Specific Date:</h1>
//         <p>Day of the month: {dayOfMonth}</p> {/* Displays 26 */}
//         </>
//     )
// }
