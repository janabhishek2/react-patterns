import React from 'react';
import '@react-patterns/scss/lib/Utilities.css';
import PropTypes from 'prop-types';

function Color(props) {
    const { hexCode, width = '1rem', height= '1rem' } = props;
    return (
        <div className="dse-border-radius-sm" style={{
            width,
            height,
            backgroundColor: hexCode
        }}></div>
    )
}

Color.propTypes = {
    hexCode: PropTypes.string
}

export default Color