// src/App.js
import React, { useState } from 'react';
import BarcodeScanner from './components/BarcodeScanner';
import AttendanceTable from './components/AttendanceTable';
import ExportButton from './components/ExportButton';

function App() {
  const [attendanceData, setAttendanceData] = useState([]);

  const addAttendanceEntry = (entry) => {
    setAttendanceData([...attendanceData, entry]);
  };

  return (
    <div className="App">
      <h1>Attendance Register</h1>
      <BarcodeScanner onScan={addAttendanceEntry} />
      <AttendanceTable data={attendanceData} />
      <ExportButton data={attendanceData} />
    </div>
  );
}

export default App;
