import React from "react";
import { styled } from "styled-components";

export default function ({ children, leftWidth = 1 , rightWidth = 1 }) {
    const Container = styled.div`
        display: flex;
    `;

    const Panel = styled.div`
        flex: ${(props) => props.flex};
        background-color: ${(props) => props.bgcolor}
    `;

    return (
        <Container>
            <Panel flex={leftWidth} bgcolor="red">
                {children[0]}
            </Panel>
            <Panel flex={rightWidth} bgcolor="green">
                {children[1]}
            </Panel>
        </Container>
    );
}
