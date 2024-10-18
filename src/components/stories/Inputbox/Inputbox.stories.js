import React from 'react';
import InputBox from './InputBox';

export default {
    name: 'Inputbox',
    component: InputBox
};

const Small = () => {
    return (
        <InputBox size="small" />
    )
};

const Medium = () => {
    return (
        <InputBox size="medium" />
    ) 
};

const Large = () => {
    return (
        <InputBox size="large" />
    )
};

export {
    Small, Medium, Large
}