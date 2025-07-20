import React, { useContext } from 'react';
import { PopoverContext } from './Popover';

function Action({ label, children }) {

    const { togglePopover, buttonRef } = useContext(PopoverContext);
    if(children) {
        return <button ref={buttonRef} onClick={togglePopover} className='popover-trigger'>
            {children}
        </button>
    }

    return (<button ref={buttonRef} onClick={togglePopover} className='popover-trigger'>
        {label}
    </button>)
}

export default Action;
