import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import ContainerComponent from "./components/ContainerComponents";

function App() {
    return (<ContainerComponent />);
}

ReactDOM.render(<App />, document.getElementById("root"));