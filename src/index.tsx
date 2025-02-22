import { createRoot } from 'react-dom/client';
import {jsx as _jsx} from 'react/jsx-runtime';
import App from './components/App';
import "regenerator-runtime";

// コンポーネント読み込み

// const rootElement = document.getElementById('root');
// const container = document.getElementById('app');
// const root = createRoot(container!); 
//  root.render(<App/>);
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element'); // createRoot(container!) if you use TypeScript
const root = createRoot(container);
 root.render(
    <App />
  );