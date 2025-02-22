import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { useEffect, useState } from "react";
import React from 'react';
import NavigationContextProvider from "./context/nav-context";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default function PerformantContext() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationContextProvider>
      <Container>
        <Sidebar/>
        <Main />
      </Container>
    </NavigationContextProvider>
  );
}
