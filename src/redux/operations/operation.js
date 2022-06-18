import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from 'services/baseURL';
import takeToken from '../../services/takeToken';

axios.defaults.baseURL = BASE_URL;
const defaultPicture = '../../img/defaultPicture/razorRamon.jpg';

//
//export const getToken = createAsyncThunk(
//    "token/getToken",
//    async () => {
//        const request = await axios.get("/token");
//        return request.data;
//    }
//)

export const getUsers = createAsyncThunk('users/getUsers', async page => {
  const request = await axios.get(`/users?page=${page}&count=6`);
  return request.data;
});

export const postUsers = createAsyncThunk(
  'users/postUsers',
  async ({ name, email, phone, position, photo = defaultPicture }) => {
    try {
      //takeToken().then(a => axios.defaults.headers.common.Token = a)
      axios.defaults.headers.common.Token = takeToken();
      const request = await axios.post('/users', {
        name,
        email,
        phone,
        position_id: position,
        photo,
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
