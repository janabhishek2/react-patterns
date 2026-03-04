import React, { useState } from 'react'

function ChildrenProp() {

    return <NewChild>
        {/* <Card>
                Hello
        </Card> */}
        <h1>Hello</h1>
        <h2>Bye</h2>
    </NewChild>
}

function NewChild({ children }) {
     const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    }

    const renderChildren = () => {
        if(React.isValidElement(children)) {
            return children;
        }
        if(React.Children.toArray(children).length > 0) {
            console.log(children);
            return <div>Children hui</div>
        }
    }
    return (
        <div>
            <button onClick={handleClick}>{count}</button>
            {renderChildren()}
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
