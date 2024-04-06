import React from "react";
import { styled } from "styled-components";

export default function ({ Left, Right, leftWidth = 1 , rightWidth = 1 }) {
    const Container = styled.div`
        display: flex;
    `;

    const Panel = styled.div`
        flex: ${(props) => props.flex};
        background-color: ${(props) => props.bgColor}
    `;

    return (
        <Container>
            <Panel flex={leftWidth} bgColor="red">
                <Left />
            </Panel>
            <Panel flex={rightWidth} bgColor="green">
                <Right />
            </Panel>
        </Container>
    );
}
