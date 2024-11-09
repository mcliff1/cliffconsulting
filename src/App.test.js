import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
  const root = createRoot(div);
  root.render(<App />);
  //ReactDOM.unmountComponentAtNode(div);
  root.unmount();
});
