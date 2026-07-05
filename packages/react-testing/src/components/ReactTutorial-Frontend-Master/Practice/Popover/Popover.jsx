import React, { useContext, useEffect, useRef } from "react";
import "./popover.css";
import { useState } from "react";
import { createPortal } from "react-dom";

const PopoverContext = React.createContext({});

function Trigger({ label, children, node, triggerRef }) {
    const { toggleShow } = useContext(PopoverContext);
    if (node) {
        return (
            <button ref={triggerRef} className="trigger" onClick={toggleShow}>
                {node}
            </button>
        );
    }
    if (label) {
        return (
            <button ref={triggerRef} className="trigger" onClick={toggleShow}>
                {label}
            </button>
        );
    }
    if (children) {
        return (
            <button ref={triggerRef} className="trigger" onClick={toggleShow}>
                {children}
            </button>
        );
    }
}

function Content({ children, contentRef }) {
    const { isOpen } = useContext(PopoverContext);

    const classes = isOpen ? "content" : "content hidden"
    return createPortal((<div ref={contentRef} className={classes}>{children}</div>), document.body);
}

function Popover({ children }) {
   
    return (
         <div className="popover">{children}</div>
    );
}

Popover.Trigger = Trigger;
Popover.Content = Content;

function PopoverWrapper() {

     const [isOpen, setIsOpen] = useState(false);

    const toggleShow = () => {
        setIsOpen((prev) => !prev);
    };

    const triggerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if(triggerRef?.current && contentRef?.current) {
            const { height: triggerHeight, left: triggerLeft, top: triggerTop } = triggerRef.current.getBoundingClientRect() || {};
            const { height: contentHeight } = contentRef.current.getBoundingClientRect();
            contentRef.current.style.left = `${triggerLeft}px`;

            // check if popover needs to be opened on top
            const topIndexPop = triggerTop + triggerHeight + 5;

            if(topIndexPop >= window.innerHeight) {
                contentRef.current.style.top = `${triggerTop - contentHeight}px`;
            } else {
                contentRef.current.style.top = `${topIndexPop}px`;
            }

           
        }
    }, [triggerRef?.current, contentRef?.current])
    return (

        <PopoverContext.Provider
            value={{
                toggleShow,
                isOpen,
            }}
        >
         <div style={{ display: "flex", flexDirection:"column" }}>
            <Popover>
                {/* Popover trigger */}
                <Popover.Trigger label="Click Me!!" triggerRef={triggerRef}/>
                {/* Popover content  */}
                <Popover.Content contentRef={contentRef}>Content!!</Popover.Content>
            </Popover>
            <div>Hey!!</div>
        </div>
        </PopoverContext.Provider>
       

    );
}
export default PopoverWrapper;
