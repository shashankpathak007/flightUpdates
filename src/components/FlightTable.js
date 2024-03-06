import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FlightTable = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(
          "https://flight-status-mock.core.travelopia.cloud/flights"
        );
        const data = await response.json();

        setFlights(data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };
    // Fetch data immediately on page load
    fetchFlights();

    const interval = setInterval(fetchFlights, 10000); // Fetch data every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flight-table-container">
   <table className="flight-table">
  <thead>
    <tr>
      <th>Flight Number</th>
      <th>Airline</th>
      <th>Origin</th>
      <th>Destination</th>
      <th>Departure Time</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {flights.length > 0 ? (
      flights.map((flight) => {
        const dateTime = new Date(flight.departureTime);
        const options = {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        };

        const formattedDateTime = new Intl.DateTimeFormat(
          "en-US",
          options
        ).format(dateTime);
        
        const statusClass = flight.status === 'Delayed' ? 'delayed' : 
                            flight.status === 'Boarding' ? 'boarded' : 'ontime';

        return (
          <tr key={flight.id} className={statusClass}>
            <td>
              <Link to={`/flight/${flight.id}`} className="flight-link">
                {flight.flightNumber}
              </Link>
            </td>
            <td>{flight.airline}</td>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{formattedDateTime}</td>
            <td>{flight.status}</td>
          </tr>
        );
      })
    ) : (
      <div className="flight-list-loader">
        <div className="flight-loader-item"></div>
        <div className="flight-loader-item"></div>
        <div className="flight-loader-item"></div>
      </div>
    )}
  </tbody>
</table>

    </div>
  );
};

export default FlightTable;
