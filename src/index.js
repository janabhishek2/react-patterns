import ReactDOM from "react-dom";
import React from "react";
import SplitScreen from "./components/split-screen.jsx";
import './index.css';

const Left = ({ title }) => <h1>{title}</h1>;
const Right = ({ title }) => <h1>{title}</h1>;


function App() {
    return <SplitScreen leftWidth={1} rightWidth={3}>

    <Left title="right"/>
    <Right title="left"/>

    </SplitScreen>
}

ReactDOM.render(<App />, document.getElementById("root"));