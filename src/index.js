import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import ControlledUncontrolled from './components/Controlled-Uncontrolled';

function App() {
    return (<ControlledUncontrolled />);
}

ReactDOM.render(<App />, document.getElementById("root"));