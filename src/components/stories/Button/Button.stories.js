import React from 'react';
import Button from './Button';

export default {
    name: "Button",
    component: Button
};

const Primary = function({ children }) {
    return (<Button variant="primary">{children || "Primary"}</Button>);
}

const Secondary = function() {
    return (<Button variant="secondary">Secondary</Button>);
}

const Tertiary = function() {
    return (<Button variant="tertiary">Tertiary</Button>);
}

const Success = function() {
    return (<Button variant="success">Success</Button>);
}

const Danger = function() {
    return (<Button variant="danger">Danger</Button>);
}

export {
    Primary, Secondary, Tertiary, Success, Danger
};

const Template = (ss) => <Button {...ss} />;

export const PrimaryA = Template.bind({});

PrimaryA.args= {
    variant: "primary",
    children: "Primary Args"
};
