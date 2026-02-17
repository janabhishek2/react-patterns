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
import Toys from './components/ReactTutorial-Frontend-Master/DragNDrop';
import DraggableList from './components/ReactTutorial-Frontend-Master/DraggableList/DraggableList';
import GridLights from './components/ReactTutorial-Frontend-Master/GridLights/GridLights';
import StarRating from './components/ReactTutorial-Frontend-Master/StarRating/StarRating';
import FileExplorer from './components/ReactTutorial-Frontend-Master/FileExplorer/FileExplorer';
import Switch from './components/ReactTutorial-Frontend-Master/Switch';
import PaginationWrapper from './components/ReactTutorial-Frontend-Master/Pagination';
import Modal from './components/ReactTutorial-Frontend-Master/Modal';
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
    return (<div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Provider store={store}>
            <Modal />
        </Provider>
    </div>)
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
