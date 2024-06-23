import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import Advanced from "./components/AdvancedReact/Advanced";

function App() {

    return <Advanced />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
