// FlightDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FlightDetail.css';

const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await fetch(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        const data = await response.json();
        setFlight(data);
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlight();

    return () => {}; // Cleanup function
  }, [id]);

  if (!flight) {
    return <div>Loading flight details...</div>;
  }

  return (

        <div className="flight-detail-container">
          <h2 className="flight-detail-heading">Flight Details</h2>
          <div className="flight-detail-item">
            <span className="detail-label">Flight Number:</span>
            <span className="detail-value">{flight.flightNumber}</span>
          </div>
          <div className="flight-detail-item">
            <span className="detail-label">Airline:</span>
            <span className="detail-value">{flight.airline}</span>
          </div>
          <div className="flight-detail-item">
            <span className="detail-label">Origin:</span>
            <span className="detail-value">{flight.origin}</span>
          </div>
          <div className="flight-detail-item">
            <span className="detail-label">Destination:</span>
            <span className="detail-value">{flight.destination}</span>
          </div>
          <div className="flight-detail-item">
            <span className="detail-label">Departure Time:</span>
            <span className="detail-value">{flight.departureTime}</span>
          </div>
          <div className="flight-detail-item">
            <span className="detail-label">Status:</span>
            <span className="detail-value">{flight.status}</span>
          </div>
          {/* Add more flight details as needed */}
        </div>
  
  );
};

export default FlightDetail;
