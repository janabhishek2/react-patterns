import React from 'react'
import mitt from 'mitt';
import Buttons from './Buttons';
import Counter from './Counter';

export const emitter = mitt();

function Observer() {
  return (
    <>
        <Buttons />
        <Counter />
    </>
  )
}

export default Observer;
