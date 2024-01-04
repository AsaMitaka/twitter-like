import { Route, Routes } from 'react-router-dom';
import {
  MainPage,
  SignPage,
  TweetPage,
  ProfilePage,
  NotificationPage,
  ExplorePage,
} from './pages/';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tweet/:id" element={<TweetPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Route>
        <Route path="/sign" element={<SignPage />} />
      </Routes>
    </>
  );
}

export default App;
