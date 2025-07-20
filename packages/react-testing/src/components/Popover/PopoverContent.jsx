import React, { useContext } from 'react';
import { PopoverContext } from './Popover';
import './style.css';

function Content({ children }) {

    const { isOpen, contentRef } = useContext(PopoverContext);

    const classNames = isOpen ? "popover-content" : "popover-content hidden"
    return (<div ref={contentRef} className={classNames}>
        {children}
    </div>)
}

export default Content;
