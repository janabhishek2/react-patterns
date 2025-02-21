import React, { useState } from 'react';

const NavigationContext = React.createContext({
    collapsed: false,
    setCollapsed: () => {}
});

function NavigationContextProvider(props) {
    const [collapsed, setCollapsed] = useState(false);
    return <NavigationContext.Provider value={{
        collapsed,
        setCollapsed
    }}>
        {props.children}
    </NavigationContext.Provider>
}

