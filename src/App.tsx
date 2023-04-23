// import './App.css';

import { Routes, Route } from 'react-router';
import { Main } from './components/pages/main_Page/MainPage';

function App() {
  return (
    <Routes>
      {/* ошибка в роутах */}
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
