// import './App.css';

import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Main } from './components/pages/main_Page/MainPage';
import { Contacts } from './components/pages/contacts/Contacts';
import { FeedbackPage } from './components/pages/feedback/FeedbackPage';
import { Products } from './components/pages/products/Products';
import { Rates } from './components/pages/rates/Rates';
import { Calculation } from './components/pages/calculation/Calculation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/contacts" element={<Contacts data={[]} />}></Route>
      <Route path="/reviews" element={<FeedbackPage />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/rates" element={<Rates />}></Route>
      <Route path="/calculation" element={<Calculation />}></Route>
    </Routes>
  );
}

export default App;
