import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import Refs from './components/Refs-section/Refs';

function App() {
    return <Refs />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
