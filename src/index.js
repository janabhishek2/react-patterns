import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import UserInfoForm from "./components/hocs/UserInfoForm";

function App() {

    return <UserInfoForm />
}

ReactDOM.render(<App />, document.getElementById("root"));