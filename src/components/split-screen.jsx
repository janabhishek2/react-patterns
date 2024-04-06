import React from "react";
import { styled } from "styled-components";

export default function ({ Left, Right }) {
    const Container = styled.div`
        display: flex;
    `;

    const Panel = styled.div`
        flex: 1;
    `;
    return (
        <Container>
            <Panel>
                <Left />
            </Panel>
            <Panel>
                <Right />
            </Panel>
        </Container>
    );
}
