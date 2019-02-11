import React from 'react';

export default function Table(props) {
  const cols = props.data.length ? Object.keys(props.data[0]) : [];
  const rows = props.data ? props.data : [];
  return (
    <table>
      <thead>
        <tr>
          {cols.map(col => (
            <th>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr>
            {cols.map(col => (
              <td>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
