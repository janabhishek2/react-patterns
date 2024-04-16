import React from "react";
import GenericDataLoader from "./GenericDataLoader";
import User from "./User";

function ContainerComponent() {
    return (
        <GenericDataLoader resourceUrl="/ancd" resourceName="user">
            <User />
        </GenericDataLoader>
    );
}

export default ContainerComponent;
