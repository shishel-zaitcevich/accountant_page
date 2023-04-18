// import './App.css';

import { Routes, Route } from 'react-router';
import { Main } from './pages/main_Page/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
