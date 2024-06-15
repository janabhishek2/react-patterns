import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import Observer from "./components/ObserverPatterns/Observer";

function App() {

    return <Observer />
}

ReactDOM.render(<App />, document.getElementById("root"));