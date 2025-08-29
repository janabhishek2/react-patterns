import React, { useEffect, useState } from 'react';

function Tutorial() {
  
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect mount with deps array");
    return () => {
      console.log("useEffect unmount with deps array");
    }
  }, [counter]);

  // useEffect(() => {
  //   console.log("useEffect with counter reactive var");
  // }, [counter]);

  // useEffect(() => {
  //   console.log("useEffect with temp variable");
  // }, [temp]);

  const handleCounterIncrease = () => {
    setCounter((prev) => prev + 1);
  }

  return (<div>
    Counter is: {counter}
    {console.log("Mount", counter)};

    <button onClick={handleCounterIncrease}>Increase</button>
  </div>)
}

function Child() {

  useEffect(() => {
    console.log("Child mount");

    return () => {
      console.log("Child unmount");
    }
  });
  return(<div>Child component</div>)
}

export default Tutorial