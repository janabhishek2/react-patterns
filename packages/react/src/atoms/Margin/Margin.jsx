import React from 'react';
import PropTypes from 'prop-types';
import { SPACING } from '@react-patterns/react-foundation';
import '@react-patterns/scss/lib/Utilities.css';

console.log(Object.keys(SPACING));
const Margin = (props) => {
    const { left = 'none', right = 'none', bottom = 'none' , top = 'none', children = null } = props;
    return <div className={`dse-margin-left-${left} dse-margin-right-${right} dse-margin-top-${top} dse-margin-bottom-${bottom}`}>
        {children}
    </div>
};

Margin.propTypes = {
    left: PropTypes.oneOf(Object.keys(SPACING)),
    right: PropTypes.oneOf(Object.keys(SPACING)),
    bottom: PropTypes.oneOf(Object.keys(SPACING)),
    top: PropTypes.oneOf(Object.keys(SPACING)),
    children: PropTypes.node
}
export default Margin;
