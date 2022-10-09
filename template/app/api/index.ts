import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL, API_KEY} from '@env';
import {loginData} from './types';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'x-api-key': API_KEY,
  },
});

const authLogin = createAsyncThunk(
  'auth/authLogin',
  async (data: loginData) => {
    const {email, password} = data;
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    const res = await api.post('login', params);
    res.data !== undefined
      ? AsyncStorage.setItem('@USER', JSON.stringify(data))
      : null;
    return res.data;
  },
);

export {authLogin};
