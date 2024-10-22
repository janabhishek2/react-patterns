import React from 'react';
import PropTypes from 'prop-types';

function Heading(props) {
    const { level, children, ...rest } = props;
    let Heading = `h1`;
    let headings = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
    if(headings.has(`h${level}`)) {
        Heading = `h${level}`
    }
    return (
        <Heading>{children}</Heading>
    )
};

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

export default Heading;
