import React from 'react';
import Button from '../Button';

export default {
    title: "Atoms/Button",
    component: Button
};

const DefaultButton = {
    render: (props) => <Button {...props} />,
    args: {
    }
};

export {
    DefaultButton
};
