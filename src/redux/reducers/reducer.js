import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getToken,
  getUsers,
  postUsers,
  getPosition,
} from 'redux/operations/operation';

const user = createReducer([], {
  [getUsers.fulfilled]: (state, { payload }) => [...state, ...payload.users],
  [postUsers.fulfilled]: (state, { payload }) => payload,
});

const position = createReducer('', {
  [getPosition.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer('', {
  [getToken.fulfilled]: (_, { payload }) => payload,
});

export default combineReducers({
  token,
  user,
  position,
});
