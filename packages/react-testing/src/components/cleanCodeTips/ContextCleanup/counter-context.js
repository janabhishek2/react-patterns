import React, { useContext, useReducer } from 'react';

const CounterValueContext = React.createContext(null);
const CounterDispatchContext = React.createContext(null);

const initState = {
    counter: 0
};

function counterReducer (state, action) {
    switch(action.type) {
        case "increment": {
            return {
                counter: state.counter + 1,
            }
        }
        case "decrement": {
            return {
                counter: state.counter - 1
            }
        }
        default: {
            return state
        }
    }
}

function CounterContextProvider(props) {

    const [counterState, counterDispatch] = useReducer(counterReducer, initState);
    return (<CounterValueContext.Provider value={counterState}>
        <CounterDispatchContext.Provider value={counterDispatch}>
            {
                props.children
            }
        </CounterDispatchContext.Provider>
    </CounterValueContext.Provider>);
};

function useCounterState() {
    const counterState = useContext(CounterValueContext);
    if(!counterState) {
        throw new Error("Not wrapped in counter value context");
    } else return counterState;
}

function useCounterDispatch() {
    const counterDispatch = useContext(CounterDispatchContext);
    if(!counterDispatch) {
        throw new Error("Not wrapped in counter Dispatch context");
    } else return counterDispatch;
};

export { CounterContextProvider, useCounterState, useCounterDispatch };
