import React, { useContext, useMemo, useState } from 'react';

const NavigationContext = React.createContext({
    collapsed: false,
    toggle: () => {}
});

export const useNavigationContext = () => useContext(NavigationContext);
export default function NavigationContextProvider(props) {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = React.useCallback(() => setCollapsed(!collapsed), [collapsed]);

    const value = useMemo(() => ({
        collapsed,
        toggle
    }), [collapsed, toggle]);

    return (<NavigationContext.Provider value={value}>
        {props.children}
    </NavigationContext.Provider>)
};
