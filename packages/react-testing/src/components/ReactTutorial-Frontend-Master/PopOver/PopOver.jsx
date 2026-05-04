import React, { useCallback, useState } from 'react'
import Action from './Action';
import Panel from './Panel';
import PopOverContext from './popoverContext';

function PopOver({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    }

    return <PopOverContext.Provider value ={{
        isOpen,
        handleToggle
    }}>
        {children}
    </PopOverContext.Provider>
}

PopOver.Action = Action;
PopOver.Panel = Panel;

export default PopOver;
