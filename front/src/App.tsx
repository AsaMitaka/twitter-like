import { Route, Routes } from 'react-router-dom';
import {
  MainPage,
  SignPage,
  TweetPage,
  ProfilePage,
  NotificationPage,
  ExplorePage,
} from './pages/';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/tweet/:id" element={<TweetPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </>
  );
}

export default App;
