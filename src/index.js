import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import UserInfo from "./components/hocs/UserInfo";
import logProps from "./components/hocs/logProps";

function App() {
    const user = {
        name: 'Abhishek',
        age: 24,
        country: "India",
        books: [
            {
                id: 1,
                name: 'Test-1'
            },
            {
                id: 2,
                name: 'Test-2'
            },
            {
                id: 3,
                name: 'Test-3'
            }
        ]
    };

    const UserInfoWrapped = logProps(UserInfo);
    return (<UserInfoWrapped user={user}/>);
}

ReactDOM.render(<App />, document.getElementById("root"));