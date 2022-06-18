import { configureStore } from '@reduxjs/toolkit';
import dataReducers from './reducers/reducer';

const store = configureStore({
  reducer: {
    data: dataReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
