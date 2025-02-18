import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { useState } from "react";
import React from 'react';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default function PerformantContext() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Container>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Main collapsed={collapsed} />
    </Container>
  );
}
