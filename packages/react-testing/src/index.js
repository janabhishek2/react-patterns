import { createRoot } from 'react-dom/client';

import React from "react";
import './index.css';
import Reconc from './components/Reconicliliation/Reconc';

function App() {
    return <Reconc />;
}

const root = createRoot(document.getElementById("root"))
root.render(<App />);
