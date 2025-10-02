import React, { useId } from 'react';

function Tutorial() {
  const id= useId();
  return <h1 id={id}>Hello</h1>
}

export default Tutorial;
