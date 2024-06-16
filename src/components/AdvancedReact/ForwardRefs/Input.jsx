import React, { forwardRef } from 'react'

function Input(props, inputRef) {
  return (
    <input {...props} ref={inputRef} />
  )
}

export default forwardRef(Input);
