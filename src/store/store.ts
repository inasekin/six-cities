import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducers/reducers';
import {redirect} from './middlewares/redirect';
import {createAPI} from '../services/api';

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export default store;
