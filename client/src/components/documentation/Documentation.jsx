// client/src/pages/Documentation.jsx
import React, { useEffect, useState } from 'react';
import Table from '../table/table'; // Adjust path if needed

const Documentation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/table`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to fetch data:', err));
  }, []);

  return (
    <div>
      <h1>Documentation Resources</h1>
      <Table data={data} />
    </div>
  );
};

export default Documentation;
