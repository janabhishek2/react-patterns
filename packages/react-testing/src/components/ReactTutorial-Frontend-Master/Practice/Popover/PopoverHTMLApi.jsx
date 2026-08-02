import React from "react";
import './popover-html.css';

function PopoverHTMLApi() {
    return (
        <div>
            <div className="popover-trigger">
                <button popovertarget="myPopover">Click me!</button>
            </div>
            <div className="popover-content" popover="auto" id="myPopover">
                Popover
                <h1>Popover Content</h1>
                <button popovertargetaction="hide" popovertarget="myPopover">
                    Close Popover
                </button>
            </div>
        </div>
    );
}

export default PopoverHTMLApi;
