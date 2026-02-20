import React from 'react'
import PropTypes from 'prop-types'
import './progress.css';

function ProgressBar(props) {
    const {
        value,
        max,
        onStart,
        onComplete
    } = props;
    const completedRef = React.useRef(false);
    const startRef = React.useRef(false);

    React.useEffect(() => {
        if(value > 0 && !startRef.current) {
            onStart();
            startRef.current = true;
        }
        if(value >= max && !completedRef.current) {
             onComplete();
            completedRef.current = true;
        }
    }, [value]);

    const scaleFactor = 1 + (value / max);

    return (
        <>
        <div className='progress-bar'>
            <div style={{ transform: `translateX(${value - 100}%)`}} className='progress-complete'>

            </div>

            
        </div>

        <div className='test'>
                
            </div>
        </>
       
    )
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onStart: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
}

export default ProgressBar
