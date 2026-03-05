import React from 'react'
import Logger from './Logger'

function CompA() {

    const handleClick = () => {
        const logger = new Logger();
        logger.log("Message 1");
    };

    return (
        <button onClick={handleClick}>Add Log 1</button>
    )
}

export default CompA
