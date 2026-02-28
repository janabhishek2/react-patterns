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
function App() {

    // useEffect(() => {
    //     const performanceObserver = new PerformanceObserver((list) => {
    //          const entries = list.getEntries();
    //         entries.forEach((entry) => {
    //             console.log("Long task detected:", entry);
    //         });
    //     })

    //     performanceObserver.observe({ type: 'longtask', buffered: true });
    // }, []);

    const div = <div meta="hello">Hello</div>
   
    console.log(div);

    return (<div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Provider store={store}>
            <CompoundPattern />
        </Provider>
    </div>)
}


// export default function App() {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Rahul" },
//     { id: 3, name: "Priya" }
//   ]);

//   const removeFirst = () => {
//     const sliced = users.slice(1);
//     console.log(sliced);
//     setUsers(sliced);
//   };

//   return (
//     <div>
//       <button onClick={removeFirst}>Remove First User</button>

//       {
//         users.map((user, index) => (
//             <div key={index}>
//             <input defaultValue={user.name} />
//             </div>
//         ))
//       }
//     </div>
//   );
// }

const root = createRoot(document.getElementById("root"))
root.render(<App />);
