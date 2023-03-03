import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import {legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from 'redux';
import reducer from "./reducers"
import thunk from 'redux-thunk';  
import logger from 'redux-logger';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(reducer, applyMiddleware(thunk,logger))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <>
    <Provider store={store}>
    <App />
    <ToastContainer 
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"/>
    </Provider>
    </>
  </BrowserRouter>
);
