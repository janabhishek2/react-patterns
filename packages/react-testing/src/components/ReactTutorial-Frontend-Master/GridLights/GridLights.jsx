import React, { useEffect, useRef, useState } from 'react';
import './GridLights.css';

 const init = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]
];

let stackSpace = 0;
init.forEach((row) => {
    row.forEach((item) => {
        if(item) stackSpace++;
    })
})

function GridLights() {
    const [grid, setGrid ] = useState(init);
    let maxStacksize = stackSpace;

    const [stack, setStack] = useState([]);

    let timeoutRef = useRef(null);

    console.log(grid);
    const startStackPop = (latest) => {
        let currStack = [...latest];

        const tick = () => {
            let lastItem = currStack.pop();
            const { i, j } = lastItem
            let timerDuration = 500;
            setTimeout(() => {
                setGrid((prev) => {
                    let prevCopy = structuredClone(prev);
                    prevCopy[i][j] = 1;
                    return prevCopy;
                });
                if(currStack.length) {
                    tick();
                }
            }, timerDuration);
        }
        tick();
        setStack([]);
        
    }

    const onClick = (i, j) => {

        let stackCopy = [...stack];
        stackCopy.push({i, j});
        setStack(stackCopy);

        let gridCopy = structuredClone(grid);
        gridCopy[i][j] = 0;

        setGrid(gridCopy);
        if(stackCopy.length === maxStacksize) {
            startStackPop(stackCopy);
            return;
        }

    };

    const getGridJsx = () => {

        return (<div className="grid-wrapper">
                {
                    grid.map((row, x) => {
                        return (<div className='grid-row'>
                            {
                                row.map((rowItem, y) => {
                                    let cls = 'row-item';
                                    if(rowItem) cls+= ' on';

                                    return (<div onClick={() => rowItem && onClick(x, y)} className={cls}></div>)
                                })
                            }
                        </div>)
                    })

                }
                </div>)
    }
    return (
        <div style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            {
                getGridJsx()
            }
        </div>
    )
}

export default GridLights
