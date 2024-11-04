import React  from 'react';

const ReduceRightComp = () => {
   

  return (
    <>
    <ConcatenateString/>
    </>
  );
}

export default ReduceRightComp;

function ConcatenateString() {

    const strings = ['you',' ','are',' ','how',]

    const result = strings.reduceRight((accmulator,currentVal) => {
        return accmulator + currentVal
    },'')
    return(
        <>
        <h1>Concatenated String: {result}</h1>
        </>
    )
}
