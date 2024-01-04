import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './slices/userSlice';
import tweetsSliceReducer from './slices/tweetsSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  user: userSliceReducer,
  tweets: tweetsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
