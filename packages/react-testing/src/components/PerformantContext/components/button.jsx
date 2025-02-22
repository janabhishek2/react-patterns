import styled from "styled-components";
import React from 'react';
import { useNavigationContext } from "../context/nav-context";

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
  const { collapsed, toggle } = useNavigationContext();
  return <ToggleButton onClick={toggle}>{collapsed ? ">": "<"}</ToggleButton>;
};

export default Button;
