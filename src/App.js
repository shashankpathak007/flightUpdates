import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load FlightTable component
const FlightTable = lazy(() => import('./components/FlightTable'));

// Lazy load FlightDetail component
const FlightDetail = lazy(() => import('./components/FlightDetail'));

const App = () => {
  return (
    <Router>
      <div>
        <h1>Flight Status Board</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<FlightTable />} />
            <Route path="/flight/:id" element={<FlightDetail />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
