import React from 'react';
//import ReactDOM from 'react-dom';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = createRoot(document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
registerServiceWorker()
