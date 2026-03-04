import { createRoot } from 'react-dom/client';

import React, { useEffect } from "react";
import { Provider, ReactReduxContext } from 'react-redux';
import './index.css';
// import ReactRedux from './components/ReactRedux/ReactRedux';
// import NotificationsLibrary from './components/NotificationsLibrary/main';
// import Tutorial from './components/ReactTutorial-Frontend-Master/Tutorial';
import store from './store/store';
import ProgressBar from './components/ReactTutorial-Frontend-Master/ProgressBar';
import OtpWrapper from './components/ReactTutorial-Frontend-Master/Otp/OtpWrapper';
import MultiStepFormWrapper from './components/ReactTutorial-Frontend-Master/MultiStepForm/MultiStepFormWrapper';
import CompoundPattern from './components/ReactTutorial-Frontend-Master/CompoundPattern';
import Props from './components/Props';
import Child from './components/Props/Child';
// function App() {

//     // useEffect(() => {
//     //     const performanceObserver = new PerformanceObserver((list) => {
//     //          const entries = list.getEntries();
//     //         entries.forEach((entry) => {
//     //             console.log("Long task detected:", entry);
//     //         });
//     //     })

//     //     performanceObserver.observe({ type: 'longtask', buffered: true });
//     // }, []);

//     const div = <div meta="hello">Hello</div>
   
//     console.log(div);

//     return (<div style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//     }}>
//         <Provider store={store}>
//             <CompoundPattern />
//         </Provider>
//     </div>)
// }
let score = 10;
function App() {
    return (<React.StrictMode>
        <Props>
            <Child />
        </Props>
    </React.StrictMode>);
};

function Score() {
    score = score + 10;
    console.log(score);
    return (
        <h1>Score is: {score}</h1>
    )
}



const root = createRoot(document.getElementById("root"))
root.render(<App />);
