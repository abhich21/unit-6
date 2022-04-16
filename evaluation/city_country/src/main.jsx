import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { store } from "./Redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
)
