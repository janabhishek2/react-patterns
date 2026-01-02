import { createRoot } from 'react-dom/client';

import React, { useEffect } from "react";
import { Provider, ReactReduxContext } from 'react-redux';
import './index.css';
// import ReactRedux from './components/ReactRedux/ReactRedux';
// import NotificationsLibrary from './components/NotificationsLibrary/main';
// import Tutorial from './components/ReactTutorial-Frontend-Master/Tutorial';
import store from './store/store';
import StopWatch from './components/StopWatch/StopWatch';
import InfiniteScroll from './components/ReactTutorial-Frontend-Master/InfiniteScroll/InfiniteScroll';
import InfiniteScrollIntersectionObserver from './components/ReactTutorial-Frontend-Master/InfiniteScroll/InfiniteScrollIntersectionObserver';
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
    return (<div>
        <Provider store={store}>
            <InfiniteScrollIntersectionObserver />
        </Provider>
    </div>)
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
