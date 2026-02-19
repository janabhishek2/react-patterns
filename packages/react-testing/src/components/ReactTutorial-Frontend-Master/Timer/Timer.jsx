import React, { useRef, useState } from 'react';
import './timer.css';

const TimeConstants = {
    Hour: "hh",
    Min: "mm",
    Sec: "ss",
    MilliSec: "ms"
}

const Config = {
    [TimeConstants.Hour]: {
        value: "",
        factor: 60 * 60 * 1000,
        placeholder: "HH"
    },
    [TimeConstants.Min]: {
        value: "",
        factor: 60 * 1000,
        placeholder: "MM"
    },
    [TimeConstants.Sec]: {
        value: "",
        factor: 1000,
        placeholder: "SS"
    },
    [TimeConstants.MilliSec]: {
        value: "",
        factor: 1,
        placeholder: "MS"
    }
}

const OrderOfTimeValues = [TimeConstants.Hour, TimeConstants.Min, TimeConstants.Sec, TimeConstants.MilliSec];

function Timer() {

    const [config, setConfig] = useState(Config);
    const [time, setTime] = useState(0);

    const handleChange = ({ timeKey, index}) => {
        return (event) => {
            const currentConfig = structuredClone(config);
            currentConfig[timeKey].value = Number(event.target.value) || 0;

            setConfig(currentConfig);
        }
    }

    const finalTimeRef = useRef(0);
    const prevUsedTimeRef = useRef(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    const handleStart = () => {
        // Get time in ms

        // if final time ref is not set, set final time

        // set start call time ref to current time + spentTimeRef.

        // Need to fix this logic

        let timeInMs = 0;
        OrderOfTimeValues.forEach((timeValue) => {
            const value = config[timeValue].value;
            const factor = config[timeValue].factor;
            if(value && !isNaN(value)) {
                timeInMs += config[timeValue].value * factor;
            }
        });
        
        startTimeRef.current = Date.now();

        if(!finalTimeRef.current) {
            finalTimeRef.current = timeInMs + Date.now();
        }

        intervalRef.current = setInterval(() => {
            let prevTime = prevUsedTimeRef.current;
            setTime(() => { 
                console.log(startTimeRef.current);           
                const newTime = finalTimeRef.current - prevTime - Date.now();
                if(newTime < 0) {
                    clearInterval(intervalRef.current);
                    return 0;
                } else {
                    return newTime;
                }
            });
        }, 10);

    };

    const formatTime = (time) => {
        if(isNaN(time)) return "";

        const ms = Math.floor((time % 1000) / 10).toString().padStart(2, "0");
        const sec = Math.floor((time / 1000) % 60).toString().padStart(2, "0") ;
        const mm = Math.floor((time / (1000  * 60)) % 60).toString().padStart(2, "0") ;
        const hh = Math.floor((time / (60 * 60 * 100))).toString().padStart(2, "0") ;

        return `${hh}: ${mm} : ${sec}: ${ms}`;
    }

    const handlePause = () => {
        // Update used time using startTime and Date now

        prevUsedTimeRef.current = prevUsedTimeRef.current + (Date.now() - startTimeRef.current);
        // console.log( prevUsedTimeRef.current, startTimeRef.current);
        // Clear interval

        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const handleReset = () => {

    };

    return (
        <div className='timer'>
            <div className='text-fields'>
                {
                    OrderOfTimeValues.map((timeKey, index) => {
                        const currConfig = config[timeKey];
                        return (
                            <div>
                                <input onChange={handleChange({ timeKey, index })} type='text' placeholder={currConfig.placeholder} value={currConfig.value} />
                            </div>
                        )
                    })
                }
            </div>

            <div className='timerRemaining'>
                {
                    formatTime(time)
                }
            </div>

            <div className='buttons'>
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
          
        </div>
    )
}

export default Timer
