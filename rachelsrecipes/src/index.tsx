import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FavoritesContextProvider } from './context/FavoritesContext';

ReactDOM.render(
  <React.StrictMode>
  {/* The context provider must be wrapped around the app 
  for the context to be accessible to all parts of the code */}
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

