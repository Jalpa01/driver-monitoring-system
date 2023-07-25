
import React, { useState } from 'react';

const AlertApp = ({ alertsData }) => {
  const [searchText, setSearchText] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredAlerts, setFilteredAlerts] = useState(alertsData);

  const handleSearchTextChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    filterAlerts(text, vehicleNumber, startDate, endDate);
  };

  const handleVehicleNumberChange = (event) => {
    const vehicleNumber = event.target.value;
    setVehicleNumber(vehicleNumber);
    filterAlerts(searchText, vehicleNumber, startDate, endDate);
  };

  const handleStartDateChange = (event) => {
    const startDate = event.target.value;
    setStartDate(startDate);
    filterAlerts(searchText, vehicleNumber, startDate, endDate);
  };

  const handleEndDateChange = (event) => {
    const endDate = event.target.value;
    setEndDate(endDate);
    filterAlerts(searchText, vehicleNumber, startDate, endDate);
  };

  const filterAlerts = (searchText, vehicleNumber, startDate, endDate) => {
    const filtered = alertsData.filter((alert) => {
      const searchTextMatch =
        alert.text.toLowerCase().includes(searchText.toLowerCase());
      const vehicleNumberMatch =
        alert.vehicle_friendly_name.toLowerCase().includes(vehicleNumber.toLowerCase());
      const startDateMatch =
        startDate === '' || new Date(alert.timestamp) >= new Date(startDate);
      const endDateMatch =
        endDate === '' || new Date(alert.timestamp) <= new Date(endDate);
      return searchTextMatch && vehicleNumberMatch && startDateMatch && endDateMatch;
    });
    setFilteredAlerts(filtered);
  };

  const handleFalseAlarmToggle = (id) => {
    const updatedAlerts = alertsData.map((alert) =>
      alert.id === id ? { ...alert, isFalseAlarm: !alert.isFalseAlarm } : alert
    );
    setFilteredAlerts(updatedAlerts);
  };

  return (
    <div>
      <h1>Alert Viewer</h1>
      <div>
        <label>Free Text Search:</label>
        <input type="text" value={searchText} onChange={handleSearchTextChange} />
      </div>
      <div>
        <label>Search by Vehicle Number:</label>
        <input
          type="text"
          value={vehicleNumber}
          onChange={handleVehicleNumberChange}
        />
      </div>
      <div>
        <label>Search by Date Range:</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </div>
      <ul>
        {filteredAlerts.map((alert) => (
          <li key={alert.id}>
            <strong>Timestamp:</strong> {alert.timestamp},{' '}
            <strong>Text:</strong> {alert.text},{' '}
            <strong>Vehicle Number:</strong> {alert.vehicle_friendly_name},{' '}
            <strong>Is False Alarm:</strong> {alert.isFalseAlarm ? 'Yes' : 'No'}
            <button onClick={() => handleFalseAlarmToggle(alert.id)}>
              Mark as False Alarm
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertApp;
