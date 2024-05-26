import React, { useState } from 'react';
import ControlledModal from './ControlledModal';

const Index = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const handleClose = () => {
        setShouldDisplay(false);
    }
    return (
        <>
        <ControlledModal shouldDisplay={shouldDisplay} onClose={handleClose}>
            I am a controlled modal
        </ControlledModal>

        {!shouldDisplay && (<button onClick={() => setShouldDisplay(true)}>
            Show modal
        </button>)}
        </>
    );
}

export default Index;
