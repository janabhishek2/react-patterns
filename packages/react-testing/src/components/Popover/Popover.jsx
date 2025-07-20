import React, { useRef, useState } from 'react';
import { createContext } from 'react';
import Content from './PopoverContent';
import Action from './PopoverTrigger';
import "./style.css";

export const PopoverContext = createContext(null);

function Popover({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    const togglePopover = () => {
        let newValue = !isOpen;
        setIsOpen(newValue);
    
        if(newValue) {
            const { top, height } = contentRef?.current?.getBoundingClientRect();
            const totalHeightOfContent = top + height;
            console.log(top, height);
            if(totalHeightOfContent > window.innerHeight) {
                // position content at -height relative to popover wrapper
                contentRef.current.style.top = `${top-totalHeightOfContent}px`;
            } else {
                const { height : buttonHeight} =  buttonRef.current.getBoundingClientRect();
                contentRef.current.style.top = `${buttonHeight}px`;
            }
        }
    };

    return (
        <PopoverContext.Provider value={{
            isOpen, 
            togglePopover,
            contentRef,
            buttonRef
        }}>
            <div className='popover-wrapper'>
                { children }
            </div>
        </PopoverContext.Provider> 
    )
}

Popover.PopoverTrigger = Action;
Popover.PopoverContent = Content;

export default Popover