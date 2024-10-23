import React, { useState, useMemo } from 'react'
import useTime from './useTime';

const isPrime = (num) => {
    for(let i = 2; i*i <= num; i++) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

function UseMemo() {
    
    const [num, setNum] = useState(0);
    const { time } = useTime();

    const getPrimes = () => {
        console.log('run');
        const allPrimes = [];
        for(let i = 2; i<=num; i++) {
            if(isPrime(i)) {
                allPrimes.push(i);
            }
        }
        return allPrimes;
    }
    
    let allPrimes = useMemo(() => {
        return getPrimes();
    }, [num]);

    return (
        <>
            {`${new Date((time))}`}
            <div>
                <label htmlFor='num'>Enter number</label>
                <input type="text" value={num} onChange={({ target: { value }}) => { setNum(value)}} />
            </div>

            <div>
                The primes are: 
                <ul>
                {
                    allPrimes.map((prime) => {
                        return <li key={prime}>{prime}</li>
                    })
                }
                </ul>
                
            </div>
        </>
    )
}

export default UseMemo