import Margin from '@react-patterns/react/src/atoms/Margin/Margin';
import React from 'react';

export default  {
    title: "Components/Margin Component",
    component: Margin
}

const MarginLeft = {
    render: (props) => <Margin {...props}>Hello World</Margin>
};

export { 
    MarginLeft
};
