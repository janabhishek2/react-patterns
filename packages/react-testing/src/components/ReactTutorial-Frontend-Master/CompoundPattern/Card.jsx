import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardWrapper from './CardWrapper'

function Card() {
    const headerData = "This is the header";
    const bodyData = "This is the body content";

    return (
        <CardWrapper data={{ headerData, bodyData }}>
            <CardHeader>
                <h1>{headerData}</h1>
            </CardHeader>
            <CardBody>
                <p>{bodyData}</p>
            </CardBody>
        </CardWrapper>
    )
}

export default Card
