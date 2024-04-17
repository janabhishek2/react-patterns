import React from "react";
import DataSource from "./DataSource";
import DataSourceWithRenderProps from "./DataSourceWithRenderProps";

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
       <DataSourceWithRenderProps getData={handleGetDataForUser} render={(resource) => <User user={resource}/>}/>
    );
}

export default ContainerComponent;
