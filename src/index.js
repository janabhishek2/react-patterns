import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import Lists from "./components/LayoutComponents/ListsPattern/Lists.jsx";

function App() {
    return (<Lists />);
}

ReactDOM.render(<App />, document.getElementById("root"));