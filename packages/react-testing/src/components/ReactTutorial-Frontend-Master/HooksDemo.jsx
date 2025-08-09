import React, { useEffect, useReducer, useRef, useState } from 'react';

function HooksDemo() {

    const [value, setValue] = useState(0);

   useMyEffect(() => {
    console.log("Inside effect");
    return () => {
        console.log("Cleanup function");
    }
   }, [value])

    const handleClick = () => {
        setValue(value + 1);
    }

    return (<div>
        <button onClick={handleClick}>Click me</button>
        <br/>
        This is the value: {value}
    </div>)
}

const hasDepsChanged = (prev, curr) => {

    if(prev.length !== curr.length ) return true;
    let hasDepsChanged = false;
    prev.forEach((prevDepItem, prevIndex) => {
        const isEqual = Object.is(prevDepItem, curr?.[prevIndex]);
        if(!isEqual) {
           hasDepsChanged  =true;
           return;
        }
    })

    return hasDepsChanged;
}

function useMyEffect(callback, depsArray = []) {
    const initialCallRef = useRef(true);
    const prevDepsArray = useRef([]);
    const cleanupRef = useRef(null);
    if(initialCallRef.current) {
        const returnCallback = callback();
        initialCallRef.current = false;
        if(returnCallback) {
            cleanupRef.current = returnCallback;
        }
        return;
    }

    let depsChanged = true;
    if(depsArray.length) {
        depsChanged = hasDepsChanged(prevDepsArray.current, depsArray);
    }
   
    if(depsChanged) {
        if(typeof cleanupRef.current === "function") cleanupRef.current();
        callback();
    }

    prevDepsArray.current = [...depsArray];
    return;
}

export default HooksDemo;
