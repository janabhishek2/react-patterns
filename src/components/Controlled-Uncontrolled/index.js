import React, { useState } from 'react';
import ControlledModal from './ControlledModal';
import Step from './Step';
import UnControlledLogin from './Un-controlled-login-flow';

const Index = () => {

    const onDone = (data) => {
        console.log('You are now done: ', data);
    };

    return <UnControlledLogin onDone={onDone}>
        <Step id={1} />
        <Step id={2} />
        <Step id={3} />
    </UnControlledLogin>
}

export default Index;
