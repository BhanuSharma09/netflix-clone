// In this project i am using the movie db api and it is not working without vpn or without dns setting go to the chorome setting > search
// dns > select security > go on select dns provider > choose cloudflare(1.1.1.1)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
