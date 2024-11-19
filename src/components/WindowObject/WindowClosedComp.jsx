import React, { useEffect } from 'react';

const WindowClosedComp = () => {
  return (
    <>
      <WindowCheck/>
    </>
  );
}

export default WindowClosedComp;

const WindowCheck = () => {
    useEffect(() => {
        const checkWindowStatus = setInterval(() => {
            if(window.closed){
                console.log('window is closed')
                clearInterval(checkWindowStatus)
            }
            else{
                console.log('window is still open')
            }
        },1000)

        return () => {
            clearInterval(checkWindowStatus)
        }
    },[])

    return(
        <>
         <div>check if window is closed</div>
        </>
    )
}