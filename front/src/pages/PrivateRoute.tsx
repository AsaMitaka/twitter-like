import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { verifySession } from '../store/thunk/userThunk';
import { isAuthUser } from '../store/slices/userSlice';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  const isAuth = useSelector(isAuthUser);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(verifySession());
  }, [dispatch]);
  if (!isAuth) {
    return <Navigate to={'/sign'} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
