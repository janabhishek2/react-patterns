import React from "react";
import Buttons from "./Buttons";
import { CounterContextProvider } from "./counter-context";
import Display from "./Display";

function ContextCleanup() {
    return (
        <CounterContextProvider>
            <Display />
            <Buttons />
        </CounterContextProvider>
    );
}

export default ContextCleanup;
