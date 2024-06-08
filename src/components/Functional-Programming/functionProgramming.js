import React from 'react';
import RecursiveComponents from './RecursiveComponents';
import { nested } from './RecursiveComponents/nestedObject';

function FunctionalProgramming() {
  return (
    <RecursiveComponents data={nested}></RecursiveComponents>
  )
}

export default FunctionalProgramming