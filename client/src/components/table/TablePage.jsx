import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetchCollection from './hooks/useFetchCollections';

const TablePage = () => {
  const location = useLocation();
  const collection = location.pathname.replace('/', '');
  const { data, loading } = useFetchCollection(collection);

  if (loading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No data found.</p>;

  // Dynamically get the fields but exclude _id
  const allKeys = Object.keys(data[0]).filter((key) => key !== '_id');

  // For most pages, only show first 2 fields + Visit link
  let visibleKeys = allKeys;

  if (collection === 'VSCodeSnip') {
    visibleKeys = allKeys.slice(0, -1); // remove last column
  } else if (!['vscode-shortcuts'].includes(collection)) {
    visibleKeys = allKeys.filter((k) => k !== 'url').slice(0, 2); // default: show 2 + Visit
  }

  return (
    <table>
      <thead>
        <tr>
          {visibleKeys.map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            {visibleKeys.map((key, j) => (
              <td key={j}>{item[key]}</td>
            ))}
            <td>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              ) : (
                '—'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePage;
