import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

function ProgressWrapper() {

    const MAX = 100;
    const [value, setValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((prev) => {
                let newValue = prev + 20;
                if(newValue >= MAX) {
                    newValue = Math.min(newValue, MAX);
                    clearInterval(intervalId);
                }
                return newValue;
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const handleStart = () => {
        console.log("Started!");
    };

    const handleComplete = () => {
        console.log("Completed!");
    };

    return (
        <ProgressBar
            value={value}
            max={MAX}
            onStart={handleStart}
            onComplete={handleComplete}
        />
    )
}

export default ProgressWrapper