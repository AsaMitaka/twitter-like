import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTweets = createAsyncThunk('tweet/', async () => {
  try {
    const response = await axios.get('/api/login');
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

const fetchUserTweets = createAsyncThunk('tweet/user', async (id: string) => {
  try {
    const response = await axios.get('/api/tweets/' + id);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

const removeUserTweet = createAsyncThunk('delete/usertweets', async (id: string) => {
  try {
    const response = await axios.delete('/api/tweets/' + id);

    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

export { fetchTweets, fetchUserTweets, removeUserTweet };
