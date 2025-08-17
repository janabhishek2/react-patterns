import React, { useState, useEffect } from 'react'

function HooksDemo() {

    const [count, setCount] = useState(0);
    const [padding, setPadding] = useState(20);

    useEffect(() => {
        for(let i = 0; i<100000000; i++) {
          
        }
      
        setPadding(padding + 30);
    
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }
    
    return (<div>
        <div>{count}</div>
        <h1 style={{ paddingTop: `${padding}px`}}>This is a text</h1>
        <button onClick={handleClick}>Click Me!</button>
    </div>)
}

export default HooksDemo