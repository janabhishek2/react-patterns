import React from "react";
import { emitter } from "./Observer";

function Buttons() {
    return (
        <div>
            <button
                onClick={() => {
                    emitter.emit("inc");
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    emitter.emit("dec");
                }}
            >
                Decrement
            </button>
        </div>
    );
}

export default Buttons;
