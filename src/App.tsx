// import './App.css';

import { Routes, Route } from 'react-router';
import { Main } from './components/pages/main_Page/MainPage';
import { Contacts } from './components/pages/contacts/Contacts';
import { FeedbackPage } from './components/pages/feedback/FeedbackPage';
import { Products } from './components/pages/products/Products';
import { Calculation } from './components/pages/calculation/calculationForms/Calculation';
import { Rates } from './components/pages/rates/Rates';
import ScrollToTop from './components/utils/scrollToTop';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Main />
            <ScrollToTop />
          </>
        }
      ></Route>
      <Route
        path="/contacts"
        element={
          <>
            <Contacts data={[]} />
            <ScrollToTop />
          </>
        }
      ></Route>
      <Route
        path="/reviews"
        element={
          <>
            <FeedbackPage />
            <ScrollToTop />
          </>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <>
            <Products />
            <ScrollToTop />
          </>
        }
      ></Route>
      <Route
        path="/rates"
        element={
          <>
            <Rates />
            {/* <ScrollToTop /> */}
          </>
        }
      ></Route>
      <Route
        path="/calculation"
        element={
          <>
            <Calculation />
            <ScrollToTop />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
