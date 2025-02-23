import styled from "styled-components";
import React from 'react';
import { useNavigationContextData, useNavigationContextFunctions } from "../context/nav-context";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
  const { collapsed } = useNavigationContextData();
  const { toggle } = useNavigationContextFunctions();

  return <ToggleButton onClick={toggle}>{collapsed ? ">": "<"}</ToggleButton>;
};

export const CloseButton = React.memo(() => {
  console.log('render the close!');
  const { close } = useNavigationContextFunctions();
  return <ToggleButton onClick={close}>close button</ToggleButton>
});

export default Button;
