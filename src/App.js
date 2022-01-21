import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import './App.css';

import HomePage from './routes/home-page';
import QuotePage from './routes/quotes-page';
import CalculatorPage from './routes/calculator-page';

const App = () => (
  <div className="App">
    <Router>
      <header>
        <nav>
          <h1>
            Math Magicians
          </h1>
          <div className="nav-links">
            <Link to="/"> Home </Link>
            <Link to="/calculator"> Calculator  </Link>
            <Link to="/quotes">Quote</Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/quotes" element={<QuotePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
