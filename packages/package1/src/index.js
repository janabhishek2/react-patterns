import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import HooksHindi from './components/hooksHindi/HooksHindi';

function App() {
    return <HooksHindi />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
