import React, { useState } from 'react'

function ChildrenProp() {

    return <NewChild>
        <Card>
                Hello
        </Card>
    </NewChild>
}

function NewChild({ children }) {
     const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>{count}</button>
            {children}
        </div>
    )
}

function Card({ children }) {

    console.log("render");
    return <div className='card-wrapper'>
        {children}
    </div>
}

export default ChildrenProp;
