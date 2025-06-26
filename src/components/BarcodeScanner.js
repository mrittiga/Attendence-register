import React, { useState } from 'react';

const BarcodeScanner = ({ onScan }) => {
  const [barcode, setBarcode] = useState('');

  const handleScan = (e) => {
    e.preventDefault();
    if (barcode.trim()) {
      const entry = {
        id: barcode,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      };
      onScan(entry);
      setBarcode(''); // Clear the input after scanning
    }
  };

  return (
    <div>
      <h2>Scan Barcode</h2>
      <form onSubmit={handleScan}>
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Scan or Enter Barcode"
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default BarcodeScanner;

