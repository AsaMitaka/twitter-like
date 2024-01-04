import { createSlice } from '@reduxjs/toolkit';
import { STATUS, Tweet } from '../../types/const';
import { fetchTweets, fetchUserTweets, removeUserTweet } from '../thunk/tweetsThunk';

type tweetsSliceState = {
  tweets: Tweet[];
  status: STATUS;
};

const initialState: tweetsSliceState = {
  tweets: [],
  status: STATUS.LOADED,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTweets.pending, (state) => {
      state.status = STATUS.LOADING;
    }),
      builder.addCase(fetchTweets.fulfilled, (state, action) => {
        state.status = STATUS.LOADED;
        state.tweets = state.tweets.concat(action.payload);
      }),
      builder.addCase(fetchTweets.rejected, (state) => {
        state.status = STATUS.ERROR;
      }),
      builder.addCase(fetchUserTweets.pending, (state) => {
        state.status = STATUS.LOADING;
      }),
      builder.addCase(fetchUserTweets.fulfilled, (state, action) => {
        state.status = STATUS.LOADED;
        state.tweets = action.payload;
      }),
      builder.addCase(fetchUserTweets.rejected, (state) => {
        state.status = STATUS.ERROR;
      }),
      builder.addCase(removeUserTweet.fulfilled, (state, action) => {
        if (!action?.payload.id) {
          console.log('could not delete');
          console.log(action.payload);
          return;
        }

        const { id } = action.payload;
        const OldPosts = state.tweets.filter((tweet) => tweet.id !== id);
        state.tweets = OldPosts;
      });
  },
});

export const tweetStatus = (state: { tweets: tweetsSliceState }) => state.tweets.status;
export const tweets = (state: { tweets: tweetsSliceState }) => state.tweets.tweets;
export default tweetsSlice.reducer;
