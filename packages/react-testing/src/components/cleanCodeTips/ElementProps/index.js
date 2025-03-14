import Button from "./components/button.jsx";
import React from 'react';
const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
};

function ElementProps() {
  return (
    <div style={style}>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
      <Button Name="a" size="xl">xLarge</Button>
    </div>
  );
}

export default ElementProps;
