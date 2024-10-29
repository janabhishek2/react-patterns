import React from 'react';
import '@react-patterns/scss/lib/Utilities.css';
import PropTypes from 'prop-types';
import { SPACING } from '../../foundation/Spacing';

function Color(props) {
    const { hexCode, width = "sm", height= "sm"} = props;
    return (
        <div className={`dse-width-${width} dse-height-${height}`} style={{
            backgroundColor: hexCode
        }}></div>
    )
}

Color.propTypes = {
    hexCode: PropTypes.string,
    width: PropTypes.oneOf(Object.keys(SPACING)),
    height:  PropTypes.oneOf(Object.keys(SPACING))
}

export default Color