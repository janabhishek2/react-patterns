import React from "react";
import PropTypes from "prop-types";

import "./style.css";

function NotificationsLibrary(props) {
    const {
        title = "This is the default title",
        description = "This is the default description",
        onRemove,
        cta = "",
        type = "success",
        position = "bottom-right",
    } = props;

    return (
        <div data-position={position} data-type={type} className="toast">
            {!!onRemove && (<button onClick={onRemove} className="toast-close">
                &times;
            </button>) 
            } 
            <div className="toast-content">
                <div className="toast-info">
                    <img
                        src="https://thumbs.dreamstime.com/b/alert-icon-white-background-176995793.jpg"
                        width="24px"
                        height={"24px"}
                    />
                    <div className="toast-title-desc">
                        <span>{title}</span>
                        <span>{description}</span>
                    </div>
                </div>
                <div className="toast-cta">{cta}</div>
            </div>
            <div className="toast-progress"></div>
        </div>
    );
}

NotificationsLibrary.propTypes = {};

export default NotificationsLibrary;
