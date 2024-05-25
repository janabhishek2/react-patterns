import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns';

function Test() {

  const [time, setTime] = useState(new Date());
  const times = useRef(0);
  times.current++;
  console.log('render', times.current);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return(
    <div>
      Time is {format(time, "hh : mm : ss")}
    </div>
  )

}

export default Test;



// const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count+1);
//   }
//   return <div>
//     <button onClick={handleClick}>You clicked: {count} times</button>
//   </div>