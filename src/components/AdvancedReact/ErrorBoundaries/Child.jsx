import React from 'react'

function Child() {
    throw new Error('err');
  return (
    <div>Child</div>
  )
}

export default Child;
