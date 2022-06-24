import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from 'services/baseURL';

axios.defaults.baseURL = BASE_URL;
const defaultPicture = '../../img/defaultPicture/razorRamon.jpg';

export const getToken = createAsyncThunk('token/getToken', async () => {
  const request = await axios.get('/token');
  return request.data;
});

export const getUsers = createAsyncThunk('users/getUsers', async page => {
  const request = await axios.get(`/users?page=${page}&count=6`);
  return request.data;
});

export const postUsers = createAsyncThunk(
  'users/postUsers',
  async ({ token, name, email, phone, position, photo = defaultPicture }) => {
    try {
      console.log('token', token);
      const request = await axios('/users', {
        method: 'POST',
        body: { token, name, email, phone, position_id: position, photo },
        headers: { Token: token },
      });
      return request.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPosition = createAsyncThunk(
  'position/getPosition',
  async () => {
    const request = await axios.get(`/positions`);
    return request.data;
  }
);
