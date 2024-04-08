import React from "react";

function LargeListItem({ author }) {
  const { name, age, country, books } = author;

  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books: </h2>
      <ul>
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </ul>
    </>
  );
}

export default LargeListItem;
