import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import ContextCleanup from './components/cleanCodeTips/ContextCleanup';


function App() {
    return <ContextCleanup />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
