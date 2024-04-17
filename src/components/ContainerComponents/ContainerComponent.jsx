import React from "react";
import DataSource from "./DataSource";

import User from "./User";

const handleGetDataForUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Abhishek',
                age: 24,
                books: ['react', 'react-dom', 'webpack']
            })
        }, 2000);
    });
}
function ContainerComponent() {
    return (
        <DataSource resourceName={"user"} getData={handleGetDataForUser}>
            <User />
        </DataSource>
    );
}

export default ContainerComponent;
