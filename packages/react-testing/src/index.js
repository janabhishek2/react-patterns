import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import MemoCallbacks from './components/MemoCallbacks';

function App() {
    return <MemoCallbacks />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
