import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import useTime from './useTime';

function Clock({time}) {

  console.log('render Clock');
  return(
    <div>
      Time is {format(time, "hh : mm : ss")}
    </div>
  )

}

export default Clock;

// const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count+1);
//   }
//   return <div>
//     <button onClick={handleClick}>You clicked: {count} times</button>
//   </div>