import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import ElementProps from './components/cleanCodeTips/ElementProps';


function App() {
    return <ElementProps />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
