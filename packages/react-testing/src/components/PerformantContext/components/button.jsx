import styled from "styled-components";
import React from 'react';

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = ({ collapsed, setCollapsed }) => {
  return <ToggleButton onClick={() =>{
    setCollapsed(!collapsed)
  }}>{collapsed ? ">": "<"}</ToggleButton>;
};

export default Button;
