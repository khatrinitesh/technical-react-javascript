import React, { useState,useEffect  } from 'react';

const GetHoursComp = () => {
    
  return (
    <>
       <Example/>
    </>
  );
}

export default GetHoursComp;

function Example(){
  const [currentTime,setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date())
    },1000)

      return () => clearTimeout(timer)
  },[])

  const formatted = currentTime.toLocaleTimeString();

  const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let hours12 = hours % 12;
    if (hours12 === 0) hours12 = 12; // Handle midnight (0) and noon (12)
  
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  
    // Format minutes and seconds to always have two digits
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return(
        <>
         <br />
         {formatted}
         <br />
         {hours} - {minutes} - {seconds}
         {/* {minutes}
         <br />
         {seconds} */}
        </>
    )
}