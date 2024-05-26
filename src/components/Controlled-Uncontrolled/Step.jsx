import React from 'react'

function Step({ id, goNext }) {
  return (
    <>
        <h1>This is step {id}</h1>
        <button onClick={goNext}>Next</button>
    </>
  )
}

export default Step;
