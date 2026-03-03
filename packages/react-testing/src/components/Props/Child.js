import React from 'react'

function Child(args) {

    const childMethod = () => {
        console.log("Child method called - 1");
    };

    window.childFn = childMethod;

    return (
        <div>Child</div>
    )
}

export default Child
