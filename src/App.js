import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load FlightTable component
const Home = lazy(() => import('./pages/home/Home'));

// Lazy load FlightDetail component
const FlightDetail = lazy(() => import('./components/Details/FlightDetail'));

const App = () => {
  return (
    <Router>
      <div>
        <h1>Flight Status Board</h1>
        <Suspense fallback={  <div className="flight-list-loader">
              <div className="flight-loader-item"></div>
              <div className="flight-loader-item"></div>
              <div className="flight-loader-item"></div>
            </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flight/:id" element={<FlightDetail />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
