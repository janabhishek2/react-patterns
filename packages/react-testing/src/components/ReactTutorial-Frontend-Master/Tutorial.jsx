import React, { useState, Suspense } from 'react';

function Tutorial() {

  return (<div>
  <Suspense fallback="loading....">
    <Child />
  </Suspense>
     
    
  </div>)
  
}

function Child() {
    const [flag, setFlag] = useState(0);
    const [color, setColor] = useState("red");

    const handleSetFlag = () => {
      setFlag((prev) => prev + 1);
    }

    const handleColorChange = (e) => {
      setColor(e.target.value);
    };
  
    return (<div>
        <button onClick={handleSetFlag}>Child flag {flag} </button>
        <div style={{ backgroundColor: color, minWidth: "200px"}}>
            <input type="text" onInput={handleColorChange} />
        </div>
        <Expensive />
    </div>)
};

function Expensive() {
  
  const { score, increaseScore } = useExpensive();
  return (
    <div>
      Expensive component:{ score } <button onClick={increaseScore}>Increase score</button>
    </div>
  )
}

function useExpensive() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    for(let i=0; i<1_000_000_000; i++) {}
    setScore(prev => prev + 1);
  }

  return {
    score, increaseScore
  }
}

export default Tutorial