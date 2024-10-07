import React, { useReducer } from 'react'

function Test() {
    const [value, setValue] = useMyState(3);
    const handleClick = () => {
        setValue(4);
    };

    return (
        <div>
            {value}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

const useMyState = (initialValue) => {

    const reducer = (state, action) => {
        switch(action.type) {
            case 'update': {
                return action?.payload
            }
            default: {
                return state
            }
        }
    };
    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleChange = function(value) {
        dispatch({
            type: "update",
            payload: value
        })
    };

    return [state, handleChange];
};

export default Test