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

    const finalTimeRef = useRef(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        // Get time in ms

        let timeInMs = 0;
        OrderOfTimeValues.forEach((timeValue) => {
            const value = config[timeValue].value;
            const factor = config[timeValue].factor;
            if(value && !isNaN(value)) {
                timeInMs += config[timeValue].value * factor;
            }
        });

        finalTimeRef.current = Date.now() + timeInMs;

        intervalRef.current = setInterval(() => {
            setTime(() => {
                const newTime = finalTimeRef.current - Date.now();
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
