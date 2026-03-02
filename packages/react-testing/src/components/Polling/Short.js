import React, { useEffect } from 'react'

function Short() {
    useEffect(() => {
        const shortPoll = () => {
            fetch("http://localhost:4000/short-polling").then((res) => res.json()).then((data) => {
               if(data.message) {
                console.log(data.message);
                return;
               } else {
                setTimeout(() => {
                    shortPoll();
                }, 1000);
               }
            }).catch((err) => {
                console.log(err);
            })
        }

        shortPoll();
    }, []);

    return (
        <div>Short</div>
    )
}

export default Short
