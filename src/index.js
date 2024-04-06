import ReactDOM from "react-dom";
import React from "react";
import SplitScreen from "./components/split-screen.jsx";
import './index.css';

const Left = () => <h1>Left</h1>;
const Right = () => <h1>Right</h1>;


function App() {
    return <SplitScreen Left={Left} Right={Right} leftWidth={1} rightWidth={3} />
}

ReactDOM.render(<App />, document.getElementById("root"));