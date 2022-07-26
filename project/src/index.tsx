import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  FAVORITE_COUNT: 3,
  PLACE_COUNT: 259, //312 было изначально
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      favoriteCount={Setting.FAVORITE_COUNT}
      placeCount={Setting.PLACE_COUNT}
    />
  </React.StrictMode>,
);
