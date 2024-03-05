import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightTable from './components/FlightTable';
import FlightDetail from './components/FlightDetail';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Flight Status Board</h1>
        <Routes>
          <Route path="/" element={<FlightTable />} />
          <Route path="/flight/:id" element={<FlightDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
