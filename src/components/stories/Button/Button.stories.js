import React from 'react';
import Button from './Button';

export default {
    name: "Button",
    component: Button
};

const Primary = function() {
    return (<Button variant="primary">Primary</Button>);
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
