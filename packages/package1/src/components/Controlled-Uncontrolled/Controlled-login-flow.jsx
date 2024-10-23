import React, { useEffect, useState } from 'react';
import Step from './Step';
import ControlledFlowChild from './ControlledFlowChild';

function ControlledFlow() {
    const [data, setData] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);

    const goNext = (callbackData) => {

        console.log(callbackData);
        if(callbackData.id === 3 ) {
            const newData = [...data, callbackData]
            setData(newData);
            onDone(newData);
            return;
        }

        setData([...data, callbackData]);
        setCurrIndex(currIndex+1);

    };

    const onDone = (data) => {
        console.log("You are done: ", data);
    }

    return (
        <ControlledFlowChild data={data} goNext={goNext} currIndex={currIndex}>
            <Step id={1} />
            <Step id={2} />
            <Step id={3} />
        </ControlledFlowChild>
    )
}

export default ControlledFlow;
