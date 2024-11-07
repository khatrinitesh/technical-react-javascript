import React, { useState,useEffect  } from 'react';

const GetDayComp = () => {
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
       {/* <h1>Today's Date:</h1>
       <p>Day of the month: {currentDate.getDate()}</p>
       <hr/> */}
       <Example/>
    </>
  );
}

export default GetDayComp;

function Example(){
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentDate(timer)
        },1000)
        return () => clearTimeout(timer);
    },[]);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = currentDate.getDay(); // Get the day of the week
    return(
        <>
         {daysOfWeek[currentDay]}
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
