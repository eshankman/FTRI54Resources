export default function DynamicTable({ data }) {
  if (!data || !data.length) return <p>No data found.</p>;

  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {headers.map((key) => (
              <td key={key}>{row[key]?.toString()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
