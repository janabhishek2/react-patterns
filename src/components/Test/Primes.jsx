import React, { useState, useMemo } from 'react';

const isPrime = num => {
    console.log(num);
    if(num <= 1) return false;
    let isNumPrime = true;
    for(let i = 2; i*i <= num; i++) {
        if(num%i === 0) {
            isNumPrime = false;
            break;
        }
    }
    return isNumPrime;
};

function Primes() {
    const [selectedNum, setSelectedNum] = useState(0);
    const [test, setTest] = useState(true);

    const handleNumChange = ({ target: { value }}) => {
        setSelectedNum(value);
    };
    const primes = useMemo(() => {
        
        let primes = [];
        for(let i= 1;i<=selectedNum; i++) {
            if(isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }, [selectedNum]);

    return (
        <>
            <input type="number" value={selectedNum} onChange={handleNumChange} />
            <p>Test is: {test ? "True": "False"} <button onClick={() => setTest(!test)}>Flip!</button></p>
            <div>
                Prime Numbers are: 
                <ul>
                    {
                        primes.map(prime => {
                            return <li key={prime}>{prime}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Primes;
