import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import PerformantContext from './components/PerformantContext';

function App() {
    return <PerformantContext />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
