import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import Tutorial from './components/ReactTutorial-Frontend-Master/Tutorial';


function App() {
    return (<div className='wrapper'>
        <Tutorial />
    </div>)
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
