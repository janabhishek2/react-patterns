import React, { useContext, useMemo, useReducer } from 'react';

const initContextState = {
    collapsed: false
};
const NavigationContextData = React.createContext(initContextState);
const NavigationContextFunctions = React.createContext({
    open: () => {},
    close: () => {},
    toggle: () => {}
});

const navContextReducerFunction = (state, action) => {
    switch(action.type) {
        case "open": {
            return {
                ...state,
                collapsed: false
            }
        }
        case "close": {
            return {
                ...state,
                collapsed: true
            }
        }
        case "toggle": {
            return {
                ...state,
                collapsed: !state.collapsed
            }
        }
        default: {
            return state;
        }
    }
};

export const useNavigationContextData = () => useContext(NavigationContextData);
export const useNavigationContextFunctions = () => useContext(NavigationContextFunctions);

export default function NavigationContextProvider(props) {

    const [state, dispatch] = useReducer(navContextReducerFunction, initContextState);

    const data = useMemo(() => {
        return {
        collapsed: state?.collapsed
    }
    }, [state?.collapsed]);

    const functionData = useMemo(() => {
        return {
            toggle: ()=> dispatch({ type: "toggle"}),
            open: ()=> dispatch({ type: "open" }),
            close: ()=> dispatch({ type: "close" })
        }
    }, []);

    return (<NavigationContextData.Provider value={data}>
        <NavigationContextFunctions.Provider value={functionData}>
            {props.children}
        </NavigationContextFunctions.Provider>
    </NavigationContextData.Provider>)
};
