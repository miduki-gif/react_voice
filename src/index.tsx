import { createRoot } from 'react-dom/client';
// import { StrictMode } from 'react';
import "regenerator-runtime";
import {jsx as _jsx} from 'react/jsx-runtime';
import App from "./components/App";

// コンポーネント読み込み

// const rootElement = document.getElementById('root');

const container= document.getElementById("root");

if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

  root.render(
    // <StrictMode> 
        <App />
        // </StrictMode>
 );

// import App from './components/App';
// ReactDom.render(<App />, document.getElementById("root"));