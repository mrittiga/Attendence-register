import React from 'react';
import { exportToExcel } from '../utils/excelExport';

const ExportButton = ({ data }) => {
  return (
    <button onClick={() => exportToExcel(data)}>
      Export to Excel
    </button>
  );
};

export default ExportButton;
