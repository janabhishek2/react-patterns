import React from 'react'
import PropTypes from 'prop-types'
import './progress.css';

function ProgressBar(props) {
    const {
        value,
        max,
        onStart,
        onComplete
    } = props

    return (
        <div className='progress-bar'>
            <div style={{ width: `${value}%`}} className='progress-complete'>

            </div>
        </div>
    )
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onStart: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
}

export default ProgressBar
