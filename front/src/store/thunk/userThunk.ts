import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type CredentialsProps = {
  username: string;
  password: string;
};

const loginUser = createAsyncThunk('user/loginUser', async (credentials: CredentialsProps) => {
  const { username, password } = credentials;
  try {
    const response = await axios.post('/api/login', { username, password });
    localStorage.setItem('userToken', response.data.userToken);

    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

interface RegistrationData {
  email: string;
  username: string;
  name: string;
  password: string;
}

const registerUser = createAsyncThunk('user/registerUser', async (data: RegistrationData) => {
  const { email, username, name, password } = data;
  try {
    const response = await axios.post('/api/register', { email, username, name, password });
    localStorage.setItem('userToken', response.data.userToken);

    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

const verifySession = createAsyncThunk('user/verifySession', async () => {
  try {
    const response = await axios.get('/api/isVerifiedSession', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

export { loginUser, registerUser, verifySession };
