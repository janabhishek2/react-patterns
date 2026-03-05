import React from 'react'
import Logger from './Logger';

function CompB() {
    const handleClick = () => {
        const logger = new Logger();
        logger.log("Message 2");
    };

    return (
        <button onClick={handleClick}>Add Log 2</button>
    )
}

export default CompB
