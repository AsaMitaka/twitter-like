import { Route, Routes } from 'react-router-dom';
import { Main, Sign } from './pages/';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </>
  );
}

export default App;
