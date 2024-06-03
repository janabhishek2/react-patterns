import React from 'react'
import Clock from './Clock'
import Primes from './Primes'
import useTime from './useTime'

function Test() {

    const { time } = useTime();
    console.log('render test');
    return (
        <div>
            <Clock time={time} />
            <Primes />
        </div>
    )
}

export default Test;
