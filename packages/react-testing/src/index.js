import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import Popover from './components/Popover';

function App() {
    return (<div className='wrapper'>
        <Popover>
        <Popover.PopoverTrigger label="Popover trigger" />
        <Popover.PopoverContent>
            This is the popover content
        </Popover.PopoverContent>
    </Popover>
    </div>)
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
