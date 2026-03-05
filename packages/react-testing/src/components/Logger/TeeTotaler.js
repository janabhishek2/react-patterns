import React from 'react'
import CompA from './CompA'
import CompB from './CompB'
import Logger from './Logger';

function TeeTotaler() {

    const handleClick = () => {
        const logger = new Logger();
        const logs = logger.sendLogs();

        console.log(logs);
    }
    return (
        <>
            <CompA />
            <CompB />

            <button onClick={handleClick}>See logs</button>
        </>
    )
}

export default TeeTotaler
