import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Pages/Home';
import Quote from './components/Pages/Quote';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <Calculator />
        )}
        exact
      />
      <Route
        path="/Home"
        element={
          <Home />
        }
        exact
      />
      <Route
        path="/Quote"
        element={
          <Quote />
        }
        exact
      />

    </Routes>
  );
}

export default App;
