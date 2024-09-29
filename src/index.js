import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import RtkWrapper from './components/rtk-query/RtkWrapper';

function App() {
    return <RtkWrapper />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
