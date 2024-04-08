import React from 'react'

function SmallListItem( { author }) {
  const { name, age} = author;
  return (
    <div>Name: {name}, Age: {age}</div>
  )
}

export default SmallListItem;
