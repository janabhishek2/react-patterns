import React, { useState, useRef } from "react";

function StopWatch() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const handleStart = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 16);
        }
    };

    const handleStop = () => {
        if (intervalRef?.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    const handleReset = () => {
        intervalRef?.current && clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    };
    const min = ((time / 60).toFixed(0)).toString().padStart(2, "0");
    const sec = (time % 60).toString().padStart(2, "0");

    return (
        <div>
            <div>
                Time is: {min} seconds and {sec} milli-seconds
            </div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default StopWatch;
