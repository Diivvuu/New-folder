import React from "react";

const TableComponent = ({ columns, data }) => {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id} className="border p-3 bg-gray-100 text-left">
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={`${row.id}-${column.id}`} className="border p-3">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
