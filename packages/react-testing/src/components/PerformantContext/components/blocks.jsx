import styled from "styled-components";
import React from 'react';
import { useNavigationContextData } from "../context/nav-context";
import { CloseButton } from "./button";

const BottomBlock = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.collapsed ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  gap: 10px;
  margin-top: 20px;
  text-align: center;
`;

const Blocks = () => {
  const { collapsed } = useNavigationContextData();
  return (
    <>
      <BottomBlock collapsed={collapsed}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
        <CloseButton />
      </BottomBlock> 
    </>
  );
};

export default React.memo(Blocks);
