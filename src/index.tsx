import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';

store.dispatch(checkAuthAction);
store.dispatch(fetchOffersAction);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-center" />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
