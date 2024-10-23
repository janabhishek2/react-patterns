import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function Input(props, ref) {

    const inputRef = useRef(null);
    useImperativeHandle(
     ref,
     () => {
        return {
            myFocus() {
                inputRef.current.focus();
            }
        }
     },
    []);

    return (
        <input type="text" {...props} ref={inputRef} />
    )
};

export default forwardRef(Input);
