// components/TableComponent.jsx
import React from 'react';

const TableComponent = ({ data }) => {
  if (!data.length) return <p>No data to display.</p>;

  const visibleKeys = Object.keys(data[0]).filter((key) => key !== '_id' && key !== 'url');
  return (
    <table>
      {/*prettier-ignore*/}
      <thead>
        <tr>
          {visibleKeys.map((key) => (
            <th key={key}>{key.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      {/*prettier-ignore*/}
      <tbody>
     
        {data.map((row, idx) => (
          <tr key={idx}>
       
            {visibleKeys.map((key) => (
              <td key={key}>
        
                {key === 'link' && row.url ? (<a href={row.url} target="_blank" rel="noopener noreferrer">{row.link || 'Visit'}</a>) 
                : typeof row[key] === 'object' && row[key] !== null 
                ? ( <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{JSON.stringify(row[key], null, 2)}</pre>) 
                : (row[key])}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
