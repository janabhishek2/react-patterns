import React, { useEffect, useRef } from 'react';

const usePrevious = (value) => {
    console.log('val', value);
    const prev = useRef();
    useEffect(() => {
        prev.current = value;
    });
    return prev.current;
};

export { usePrevious };
