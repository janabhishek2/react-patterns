import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import UserInfo from "./components/hocs/UserInfo";
import includeUpdateUser from "./components/hocs/includeUpdateUser";

function App() {

    const UserInfoWrapped = (includeUpdateUser(UserInfo));
    return (<UserInfoWrapped />);
}

ReactDOM.render(<App />, document.getElementById("root"));