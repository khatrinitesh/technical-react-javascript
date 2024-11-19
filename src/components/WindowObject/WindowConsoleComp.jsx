import React, { useEffect } from "react";

const WindowConsoleComp = () => {
  return (
    <>
      <ConsoleExample />
    </>
  );
};

export default WindowConsoleComp;

const ConsoleExample = () => {
  useEffect(() => {
    const isDEbugMode = true;
    if (isDEbugMode) {
      window.console.warn("you are in doing mode!");
    }
  }, []);
  return (
    <>
      <h1>Check your browser console for warnings</h1>
    </>
  );
};
