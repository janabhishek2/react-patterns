import React from 'react'

function Input({ hint }) {
  console.log('input render');
  return (
    <input type="text" placeholder={hint} />
  )
}

export default React.memo(Input); 