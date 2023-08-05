// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import  loginReducer  from './state/Slices/UserSlice';
import { createWrapper } from 'next-redux-wrapper';

export default configureStore({
  reducer: {
    login: loginReducer
  },
});

const makestore = ()=> configureStore


export const wrapper = createWrapper(makestore)