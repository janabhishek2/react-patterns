import React from 'react'

function SmallComponent({ book }) {
    const { name } = book;
  return (
    <div>Book name: {name} </div>
  )
}

export default SmallComponent;
