import React from 'react';
import PropTypes from 'prop-types';
import { TextSizes } from '@react-patterns/react-foundation';
import "@react-patterns/scss/lib/Text.css";

export default function Text(props) {
    const { size, children } = props;

    return (
        <span className={`dse-text-${size}`}>{children}</span>
    );
};

Text.propTypes = {
    size: PropTypes.oneOf(Object.keys(TextSizes)),
    children: PropTypes.node
}

Text.defaultProps = {
    size: "base",
    children: null
}

