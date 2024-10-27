import React from "react";
import DataSourceLocalStorage from "./DataSourceLocalStorage";
import Message from "./Message";

const getDataFromLocalStorage = (key) => {
    return localStorage.getItem(key);
};

function ContainerComponent() {
    return (
       <DataSourceLocalStorage getDataFromLocalStorage={() => getDataFromLocalStorage("test")} resourceName="message">
          <Message />
       </DataSourceLocalStorage>
    );
}

export default ContainerComponent;
