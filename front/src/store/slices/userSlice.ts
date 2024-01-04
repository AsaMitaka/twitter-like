import { createSlice } from '@reduxjs/toolkit';
import { STATUS, User } from '../../types/const';
import { loginUser, registerUser, verifySession } from '../thunk/userThunk';

type userSliceState = {
  isAuth: boolean;
  user: User;
  status: STATUS;
  userToken: string | null;
};

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState: userSliceState = {
  isAuth: false,
  user: {
    name: '',
    username: '',
    avatarUrl: '',
    likes: [],
    tweets: [],
  },
  userToken,
  status: STATUS.LOADED,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('userToken');
      state.userToken = null;
      state.isAuth = false;
      state.user = {
        name: '',
        username: '',
        avatarUrl: '',
        likes: [],
        tweets: [],
      };
      state.status = STATUS.LOADED;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = STATUS.LOADED;
      state.isAuth = true;
      state.user = action.payload;
      state.userToken = action.payload.userToken;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = STATUS.LOADED;
      state.isAuth = true;
      state.user = action.payload;
      state.userToken = action.payload.userToken;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
    builder.addCase(verifySession.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(verifySession.fulfilled, (state, action) => {
      state.status = STATUS.LOADED;
      state.isAuth = true; // или на основе полученных данных с сервера
      state.user = action.payload.user; // предположим, что сервер возвращает информацию о пользователе
      state.userToken = localStorage.getItem('userToken');
    });
    builder.addCase(verifySession.rejected, (state) => {
      state.status = STATUS.ERROR;
      state.isAuth = false;
      state.user = initialState.user;
      state.userToken = null;
      localStorage.removeItem('userToken');
    });
  },
});

export const selectUser = (state: { user: userSliceState }) => state.user.user;
export const isAuthUser = (state: { user: userSliceState }) => state.user.isAuth;
export const statusUser = (state: { user: userSliceState }) => state.user.status;
export const isSession = (state: { user: userSliceState }) => state.user.userToken;
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
